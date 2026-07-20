export const userInterface = {
    todayCard : document.querySelector(".todayWeather"),
    weekCards : document.getElementsByClassName("dayCard"),

    updateOnScreenData(weather){
        const unit = (weather.today.unit == "celsius")? "c" : "f";
        this.updateTodayInformation(weather.today, unit);
        this.updateWeeklyInformation(weather.week, unit);
    },

    updateTodayInformation(today, unit){
        const date = new Date(today.date*1000);
        console.log(date);
        console.log(date.getDay());
        document.querySelector("#location").textContent = today.location;
        document.querySelector("#currentTemp").textContent = today.currentTemp + unit;
        document.querySelector("#feelsLike").textContent = today.feelsLike + unit;
        document.querySelector("#todayRange").textContent = today.minTemp +unit+ " - " +today.maxTemp+unit;
    },

    updateWeeklyInformation(week, unit){
        for(var i=0;i<this.weekCards.length; i++){            
            this.updateWeeklyDayCard(this.weekCards[i], week[i], unit);
            
        }
    },

    updateWeeklyDayCard(day, data, unit){
        const date = new Date(data.datetime);
        day.querySelector(".dayName").textContent = this.setDayName(date.getDay());
        day.querySelector(".dayTemperatures").textContent = data.tempmin + unit + " - "+data.tempmax+unit;
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
    }
}   
