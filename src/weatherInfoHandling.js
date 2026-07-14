async function getWeatherInfo(location, unitType) {
    const unit = (unitType == "celsius")? "metric" : "us";
    const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
    const postData = `${location}?unitGroup=${unit}&key=YTQHVV6DAHGQUQDPD7RFJGJ98&contentType=json`; 

    try {
        console.log(url + postData);
        const weatherData = await(fetch(url + postData));
        if(!weatherData.ok){
            throw new Error(weatherData.status);
        }

        const pullData = await weatherData.json();
        return pullData;

    } catch (error) {
        console.log(error);
        return null;
    }
}


export{
    getWeatherInfo
}