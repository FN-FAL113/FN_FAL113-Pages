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

export {createBarChart, createPieChart, createPolarChart};