import { userInterface } from "./appUIManager.js";
import { getWeatherInfo, handleWeatherInfo } from "./weatherInfoHandling.js"


async function defaultInit(){

}

async function getWeatherData(){
        let data = await getWeatherInfo("New-York","celsius");
        let processedData = handleWeatherInfo(data, "celsius");
        updateUI(processedData);
}

function updateUI(data){
    userInterface.updateOnScreenData(data);
}

export{
    getWeatherData,
    defaultInit
}