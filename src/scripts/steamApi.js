async function getDataSteam(){
    try {
        
        var api_url = `https://cors-proxy.falfn113.workers.dev/?https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=730`
        const response = await fetch(api_url);
        const dataObject = await response.json();

        console.log(dataObject);
       
    } catch (error) {
        console.log('error has occured: ' + error);
    }
    console.log('test');
}

getDataSteam();