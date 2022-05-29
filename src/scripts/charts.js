//import {createBarChart, createPieChart, createPolarChart} from './modules/chart-module.js';

const ctx = document.getElementById('myChartFNAmp').getContext('2d');
const ctxPlayers = document.getElementById('myChartFNAmpPlayers').getContext('2d');
const ctxServerVer = document.getElementById('myChartFNAmpServerVer').getContext('2d');
const ctxPluginVer = document.getElementById('myChartFNAmpPluginVer').getContext('2d');
const ctxPluginCountry = document.getElementById('myChartFNAmpPluginCountry').getContext('2d');


const ctx2 = document.getElementById('myChartSfChunk').getContext('2d');
const ctx2Players = document.getElementById('myChartSfChunkPlayers').getContext('2d');
const ctx2ServerVer = document.getElementById('myChartSfChunkServerVer').getContext('2d');
const ctx2PluginVer = document.getElementById('myChartSfChunkPluginVer').getContext('2d');
const ctx2PluginCountry = document.getElementById('myChartSfChunkPluginCountry').getContext('2d');


/* Having hard time with these, fuck!
function createAndUpdateTopography(ctx){

fetch('https://unpkg.com/world-atlas/countries-50m.json').then((r) => r.json()).then((data) => {
      const countries = ChartGeo.topojson.feature(data, data.objects.countries).features;

fetch('https://bstats.org/api/v1/plugins/13219/charts/location/data').then((repo) => repo.json()).then((dataArray) => {
	//console.log(dataArray);
	//console.log(dataArray.find(e => e.name.includes('United States of America')));
	
	//console.log(countries.filter(obj => dataArray.some(e => e.name.includes(obj.properties.name) ) ).map((d) => ({feature: d, value: 2})));
  const chart = new Chart(document.getElementById("myChartFNAmpPluginCountry").getContext("2d"), {
    type: 'choropleth',
    data: {
      labels: countries.filter(ob => 
			dataArray.some(e => ob.properties.name.includes(e.name)) ).map((c) => c.properties.name),
      datasets: [{
        label: 'Countries',
        data: countries.filter(obj => 
			dataArray.some(e => obj.properties.name.includes(e.name)) ).map((d) => ({feature: d, value: e.y})),
      }]
    },
    options: {
      showOutline: false,
      showGraticule: true,
      plugins: {
        legend: {
          display: false
        },
      },
      scales: {
        xy: {
          projection: 'equalEarth'
        }
      }
    }
  });
});

});

}*/

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
              'rgba(255, 99, 132, 0.4)',
              'rgba(54, 162, 235, 0.4)',
              'rgba(255, 206, 86, 0.4)',
              'rgba(75, 192, 192, 0.4)',
              'rgba(153, 102, 255, 0.4)',
              'rgba(255, 159, 64, 0.4)'
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
          ticks: {
             beginAtZero: true
          }
       },
       x: {
        ticks: {
           beginAtZero: true
        }
     },
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

function createPolarChart(ctx, label, type){
return new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: [],
      datasets: [{
        label: label,
        data: [],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ]
      }]
  },options: {
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

async function fetchUpdateSingleBarChart(api_url, myChart){
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    const date = new Date(data[47][0]).toLocaleString();

   
    myChart.data.labels.push(date);
    myChart.data.datasets.forEach((dataset) => {
        dataset.data.push(data[47][1]);
        dataset.data.push(data[47][1] + 20);
    });
  
    myChart.update();
  } catch (error) {
    console.log('An error has occured: ' + error);
  }
}

async function fetchUpdateMultiBarChart(api_url, myChart){
  try {
    const response = await fetch(api_url);
    const data = await response.json();
    
    data.forEach((dataArray) =>{	
      myChart.data.labels.push(new Date(dataArray[0]).toLocaleString());	
      myChart.data.datasets[0].data.push(dataArray[1]);
    });
    
    myChart.update();
  } catch (error) {
    console.log('An error has occured: ' + error);
  }
}

async function fetchUpdatePieChart(api_url, myChart){
  try {
    const response = await fetch(api_url);
    const data = await response.json();

   
    data.forEach((dataArray) =>{
    myChart.data.labels.push(dataArray.name);	
    myChart.data.datasets[0].data.push(dataArray.y);
    
    })
      
    myChart.update();
  } catch (error) {
      console.log('An error has occured: ' + error);
  }
}

// FNAmplifications
const myChartFNAmp = createBarChart(ctx, '# of Servers Currently Using FNAmplifications');
fetchUpdateSingleBarChart('https://bstats.org/api/v1/plugins/13219/charts/servers/data', myChartFNAmp);

const myChartFNAmpPlayers = createBarChart(ctxPlayers, '# of Current Players');
fetchUpdateMultiBarChart('https://bstats.org/api/v1/plugins/13219/charts/players/data', myChartFNAmpPlayers);

const myChartFNAmpServerVer = createPieChart(ctxServerVer, 'Server Version', 'pie');
fetchUpdatePieChart('https://bstats.org/api/v1/plugins/13219/charts/minecraftVersion/data', myChartFNAmpServerVer);

const myChartFNAmpPluginVer = createPieChart(ctxPluginVer, 'Plugin Version', 'doughnut');
fetchUpdatePieChart('https://bstats.org/api/v1/plugins/13219/charts/pluginVersion/data', myChartFNAmpPluginVer);

const myChartFNAmpPluginCountry = createPolarChart(ctxPluginCountry, 'Countries', 'doughnut');
fetchUpdatePieChart('https://bstats.org/api/v1/plugins/13219/charts/location/data', myChartFNAmpPluginCountry);

// Sf Chunk Info
const myChartSfChunk = createBarChart(ctx2, '# of Servers Currently Using SfChunkInfo');
fetchUpdateSingleBarChart('https://bstats.org/api/v1/plugins/13713/charts/servers/data', myChartSfChunk);

const myChartSfChunkPlayers = createBarChart(ctx2Players, '# of Current Players');
fetchUpdateMultiBarChart('https://bstats.org/api/v1/plugins/13713/charts/players/data', myChartSfChunkPlayers);

const myChartSfChunkServerVer = createPieChart(ctx2ServerVer, 'Server Version', 'pie');
fetchUpdatePieChart('https://bstats.org/api/v1/plugins/13713/charts/minecraftVersion/data', myChartSfChunkServerVer);

const myChartSfChunkPluginVer = createPieChart(ctx2PluginVer, 'Plugin Version', 'doughnut');
fetchUpdatePieChart('https://bstats.org/api/v1/plugins/13713/charts/pluginVersion/data', myChartSfChunkPluginVer);

const myChartSfChunkPluginCountry = createPolarChart(ctx2PluginCountry, 'Countries', 'doughnut');
fetchUpdatePieChart('https://bstats.org/api/v1/plugins/13713/charts/location/data', myChartSfChunkPluginCountry);


