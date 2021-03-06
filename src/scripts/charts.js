import {createBarChart, createPieChart, createPolarChart} from './modules/chart-module.js';

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

const ctx3 = document.getElementById('myChartRelic').getContext('2d');
const ctx3Players = document.getElementById('myChartRelicPlayers').getContext('2d');
const ctx3ServerVer = document.getElementById('myChartRelicServerVer').getContext('2d');
const ctx3PluginVer = document.getElementById('myChartRelicPluginVer').getContext('2d');
const ctx3PluginCountry = document.getElementById('myChartRelicPluginCountry').getContext('2d');


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

const myChartFNAmpPluginCountry = createPieChart(ctxPluginCountry, 'Countries', 'doughnut');
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

const myChartSfChunkPluginCountry = createPieChart(ctx2PluginCountry, 'Countries', 'doughnut');
fetchUpdatePieChart('https://bstats.org/api/v1/plugins/13713/charts/location/data', myChartSfChunkPluginCountry);

// Relics of Cthonia
const myChartRelic = createBarChart(ctx3, '# of Servers Currently Using RelicsOfCthonia');
fetchUpdateSingleBarChart('https://bstats.org/api/v1/plugins/15420/charts/servers/data', myChartRelic);

const myChartRelicPlayers = createBarChart(ctx3Players, '# of Current Players');
fetchUpdateMultiBarChart('https://bstats.org/api/v1/plugins/15420/charts/players/data', myChartRelicPlayers);

const myChartRelicServerVer = createPieChart(ctx3ServerVer, 'Server Version', 'pie');
fetchUpdatePieChart('https://bstats.org/api/v1/plugins/15420/charts/minecraftVersion/data', myChartRelicServerVer);

const myChartRelicPluginVer = createPieChart(ctx3PluginVer, 'Plugin Version', 'doughnut');
fetchUpdatePieChart('https://bstats.org/api/v1/plugins/15420/charts/pluginVersion/data', myChartRelicPluginVer);

const myChartRelicPluginCountry = createPieChart(ctx3PluginCountry, 'Countries', 'doughnut');
fetchUpdatePieChart('https://bstats.org/api/v1/plugins/15420/charts/location/data', myChartRelicPluginCountry);
