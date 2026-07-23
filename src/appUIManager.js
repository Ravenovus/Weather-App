import { weatherStaticImages } from "./imageImporter.js";
import { weatherStaticIcons } from "./imageImporter.js";


export const userInterface = {
    todayCard : document.querySelector(".todayWeather"),
    weekCards : document.getElementsByClassName("dayCard"),
    errorWindow : document.querySelector("#inputError"),


    updateOnScreenData(weather){
        const unit = (weather.today.unit == "Celsius")? "c" : "f";
        this.updateTodayInformation(weather.today, unit);
        this.updateWeeklyInformation(weather.week, unit);
    },

    updateTodayInformation(today, unit){
        let backgroundImage = weatherStaticImages[today.condition.split(",")[0]];
        let todayIcon = weatherStaticIcons[today.icon]
        document.querySelector("#location").textContent = today.location;
        document.querySelector("#currentTemp").textContent = today.currentTemp +"°"+unit;
        document.querySelector("#currentIcon").src = `${todayIcon}`;
        document.querySelector("#currentCondition").textContent = today.condition;
        document.querySelector("#feelsLike").textContent = today.feelsLike +"°"+unit;
        document.querySelector("#todayRange").textContent = today.minTemp+"°"+unit+ " - " +today.maxTemp+"°"+unit;
        document.querySelector("#todayHumidity").textContent = today.humidity + "%";
        document.body.style.backgroundImage = `url(${backgroundImage}`;
    },

    updateWeeklyInformation(week, unit){
        for(var i=0;i<this.weekCards.length; i++){            
            this.updateWeeklyDayCard(this.weekCards[i], week[i], unit);
            
        }
    },

    updateWeeklyDayCard(day, data, unit){
        const date = new Date(data.datetime);
        let icon = weatherStaticIcons[data.icon]
        day.querySelector(".weatherDescription").textContent = data.conditions;
        day.querySelector(".weatherIcon").src = `${icon}`
        day.querySelector(".dayName").textContent = this.setDayName(date.getDay());
        day.querySelector(".dayTemperatures").textContent = data.tempmin +"°"+unit+" - "+data.tempmax+"°"+unit;
    },

    setDayName(dayCode){
        switch(dayCode) {
            case 0 : return "Sunday";

            case 1 : return "Monday";

            case 2 : return "Tuesday";

            case 3 : return "Wednesday";                                            

            case 4 : return "Thursday";

            case 5 : return "Friday";

            case 6 : return "Saturday";

            default : return "error";
        }
    },

    openErrorWindow(){
        this.errorWindow.showModal();
    },

    closeErrorWindow(){
        this.errorWindow.close();
    }
}   
