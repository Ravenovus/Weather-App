import { getWeatherInfo } from "./weatherInfoHandling.js"


export const weatherAppController = {

    init(){
        console.log(getWeatherInfo("tokyo","celsius"));
    }

}