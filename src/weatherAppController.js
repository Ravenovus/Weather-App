import { userInterface } from "./appUIManager.js";
import { getWeatherInfo, handleWeatherInfo } from "./weatherInfoHandling.js"


async function defaultInit(){
    let data = await getWeatherInfo("tokyo","Celsius");
    let processedData = handleWeatherInfo(data, "Celsius");
    updateUI(processedData);
    addListeners();
}

async function getWeatherData(location, unit){
    let data = await getWeatherInfo(location,unit);
    //add nullcheck for data here and reset, also do modal to notify user that "oi, dimwit, actual place please"
    let processedData = handleWeatherInfo(data, unit);
    updateUI(processedData);
}

function updateUI(data){
    userInterface.updateOnScreenData(data);
}

function switchUnit(unit){
    //use button ID to save instead of class member 
    if(unit == "Celsius"){
        return "Fahrenheit";
    }
    else{
        return "Celsius";
    }
}

function addListeners(){
    document.querySelector(".unitSwap").addEventListener(
        "click", function(e) {
            e.target.id = switchUnit(e.target.id);
            e.target.textContent = e.target.id;
            getWeatherData(document.querySelector("#location").textContent, e.target.id); 
        }
    )

    document.querySelector("#lookupWeatherButton").addEventListener(
        "click", function(){
            let city = document.querySelector("#cityName").value;
            let unit  = document.querySelector(".unitSwap").textContent;
            getWeatherData(city,unit);
            document.querySelector("#cityName").value = "";
        }
    )
}

export{
    getWeatherData,
    defaultInit
}