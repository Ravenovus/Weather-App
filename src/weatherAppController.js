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
    if(data == null){
        userInterface.openErrorWindow();
        return;
    }
    let processedData = handleWeatherInfo(data, unit);
    updateUI(processedData);
}

function updateUI(data){
    userInterface.updateOnScreenData(data);
}

function switchUnit(unit){
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
            e.target.textContent = e.target.id[0];
            getWeatherData(document.querySelector("#location").textContent, e.target.id); 
        }
    )

    document.querySelector("#lookupWeatherButton").addEventListener(
        "click", function(){
            let city = document.querySelector("#cityName").value;
            let unit  = document.querySelector(".unitSwap").id;
            getWeatherData(city,unit);
            document.querySelector("#cityName").value = "";
        }
    )

    document.querySelector("#errorAccept").addEventListener(
        "click", function(){
            userInterface.closeErrorWindow();
        }
    )
}

export{
    getWeatherData,
    defaultInit
}