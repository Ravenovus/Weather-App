import { getWeatherInfo, handleWeatherInfo } from "./weatherInfoHandling.js"


async function getWeatherData(){
        let data = await getWeatherInfo("tokyo","celsius");
        let processedData = handleWeatherInfo(data, "celsius");
}

export{
    getWeatherData,
}