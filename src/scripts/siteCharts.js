const ctxPageViews = document.getElementById('myChartPageViews').getContext('2d');
const ctxPageRequests = document.getElementById('myChartPageRequests').getContext('2d');
const ctxPageCountryMap = document.getElementById('myChartCountryMap').getContext('2d');

function destroyExistingChart(ctx){
    if (Chart.getChart(ctx) != undefined) {
        Chart.getChart(ctx).destroy();
    }
}

function createBarChart(ctx, label){
    destroyExistingChart(ctx);
    
	return new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: label,
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
    	maintainAspectRatio: false,
    	responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
	});
}

function createPieChart(ctx, label, type){
    destroyExistingChart(ctx);

	return new Chart(ctx, {
  		type: type,
  		data: {
  			labels: [],
  			datasets: [{
    			label: label,
    			data: [],
    			backgroundColor: [
      			'rgb(255, 99, 132)',
      			'rgb(54, 162, 235)',
      			'rgb(255, 205, 86)'
    			],
    			hoverOffset: 4
  			}]
		},
		options: {
			 plugins: {
            	title: {
                display: true,
                text: label
            }
        },
        maintainAspectRatio: false,
    	responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
	});
	
}

function fetchAPI(url, email, apiKey, zoneTag, leafNode, field, dateRange) {
    const today = new Date();
    const daysAgo = new Date(new Date().setDate(today.getDate() - dateRange));
    const date = daysAgo.toISOString().split('T')[0];

    let request = new Request(url)
    request.headers.set('x-auth-key', apiKey)
    request.headers.set('x-auth-email', email)

    const query = 
    `query {
        viewer {
          zones(filter: { zoneTag: "${zoneTag}" }) {
            httpRequests1hGroups(
              orderBy: [date_ASC]
              limit: 20
              filter: { date_gt: "${date}" }
            ) {
              date: dimensions {
                date
              }
              sum {
                ${field}
              }
            }
          }
        }
      }`;

    const json = { query, variables: { } };

    let init = {
        method: 'POST',
        body: JSON.stringify(json)
    }
   
    return fetch(request, init)
}

function validateField(email, apiKey, zoneTag){
    if(email && apiKey && zoneTag){
        return true;
    }

    if(!email){
        document.getElementById('error1').innerHTML = 
        "<img src=\"https://www.seekpng.com/png/full/251-2514375_free-high-quality-error-youtube-icon-png-2018.png\" height=\"20px\" width=\"20px\"> Email Required!";  
    } 
    if(!apiKey){
       document.getElementById('error2').innerHTML = 
        "<img src=\"https://www.seekpng.com/png/full/251-2514375_free-high-quality-error-youtube-icon-png-2018.png\" height=\"20px\" width=\"20px\"> API Key Required!";
    } 
    if(!zoneTag){
        document.getElementById('error3').innerHTML = 
        "<img src=\"https://www.seekpng.com/png/full/251-2514375_free-high-quality-error-youtube-icon-png-2018.png\" height=\"20px\" width=\"20px\"> Zone Tag Required!";
    }
    return false;
}

async function fetchDateSumData(chart, leafNode, field, dateRange, isMap){
    var email = document.getElementById('email').value;
    var apiKey = document.getElementById('apiKey').value;
    var zoneTag = document.getElementById('zoneTag').value;
    var api_url = 'https://cf-cors.walshydev.workers.dev/client/v4/graphql'

    if(!validateField(email, apiKey, zoneTag)){
        return;
    }

    fetchAPI(api_url, email, apiKey, zoneTag, leafNode, field, dateRange)
    .then(res => {
      if (res.status == 200) {
        return res.json();
      }
      return res.text().then(text => { throw new Error(text) })
    })
    .then(function(dataObject) {
        //console.log(dataObject);
        
        dataObject.data.viewer.zones[0].httpRequests1hGroups.forEach((dataArray) =>{     
            if(!isMap){
                chart.data.labels.push(dataArray.date.date);  
                chart.data.datasets[0].data.push(dataArray.sum[field]);
            } else {
                dataArray.sum[field.substring(0, field.indexOf(' '))].forEach( (dataArray2) => {
                    chart.data.labels.push(new Intl.DisplayNames(['en'], {type: 'region'}).of(dataArray2.clientCountryName) + ' ' + dataArray.date.date);  
                    chart.data.datasets[0].data.push(dataArray2.requests);
                });            
            }
        });
        
        chart.update();   
    });
} 


document.getElementById('fetch').addEventListener('click', async function() {

const myChartPageViews = createBarChart(ctxPageViews, '# of Page Views');
fetchDateSumData(myChartPageViews, 'httpRequests1hGroups', 'pageViews', 2, false);

const myChartRequests = createBarChart(ctxPageRequests, '# of Requests');
fetchDateSumData(myChartRequests, 'httpRequests1hGroups', "requests", 2, false);

const myChartCountryMap = createPieChart(ctxPageCountryMap, '# of Request Per Country', 'doughnut');
fetchDateSumData(myChartCountryMap, 
    'httpRequests1hGroups', 
    `countryMap {
            bytes
            requests
            threats
            clientCountryName
    }`, 2, true);  

});
