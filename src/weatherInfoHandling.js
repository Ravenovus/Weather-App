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

function handleWeatherInfo(data, unitType){
    //null check will happen in controller
    const today = data.currentConditions;

    const week = data.days;

    const location = data.resolvedAddress;


    const weatherData ={
        //today data - expansive
        today : {
            unit : unitType,
            location: location,
            date: today.datetimeEpoch,
            currentTemp : today.temp,
            feelsLike : today.feelslike,
            humidity : today.humidity,
            maxTemp : week[0].tempmax,
            minTemp : week[0].tempmin
        },
        week : week.slice(1,7)

        //rest of the week data - limited temp minmax and icon
    }

    return weatherData;
    
}

export{
    getWeatherInfo,
    handleWeatherInfo
}