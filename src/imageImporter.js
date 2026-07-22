import clearWeatherImage from "./images/clearWeather.jpg";
import rainImage from "./images/rain.jpg";
import cloudyImage from "./images/cloudy.jpg";
import snowImage from "./images/snow.jpg";
import overcastImage from "./images/overcast.jpg";

import clearDayIcon from "./images/icons/clear-day.svg";
import clearNightIcon from "./images/icons/clear-night.svg"
import cloudyIcon from "./images/icons/cloudy.svg"
import fogIcon  from "./images/icons/fog.svg"
import hailIcon from "./images/icons/hail.svg"
import partlyCloudyDayIcon from "./images/icons/partly-cloudy-day.svg"
import partlyCloudyNightIcon from "./images/icons/partly-cloudy-night.svg"
import rainIcon from "./images/icons/rain.svg"
import rainSnowIcon from "./images/icons/rain-snow.svg"
import rainSnowShowersDayIcon from "./images/icons/rain-snow-showers-day.svg"
import rainSnowShowersNightIcon from "./images/icons/rain-snow-showers-night.svg"
import showersDayIcon from "./images/icons/showers-day.svg"
import showersNightIcon from "./images/icons/showers-night.svg"
import sleetIcon from "./images/icons/sleet.svg"
import snowIcon from "./images/icons/snow.svg"
import snowShowersDayIcon from "./images/icons/snow-showers-day.svg"
import snowShowersNightIcon from "./images/icons/snow-showers-night.svg"
import thunderIcon from "./images/icons/thunder.svg"
import thunderRainIcon from "./images/icons/thunder-rain.svg"
import thunderShowersDayIcon from "./images/icons/thunder-showers-day.svg"
import thunderShowersNightIcon from "./images/icons/thunder-showers-night.svg"
import windIcon from "./images/icons/wind.svg"




const weatherStaticIcons = {
    'clear-day' : clearDayIcon,
    'clear-night': clearNightIcon,
    'cloudy' : cloudyIcon,
    'fog' : fogIcon,
    'hail' : hailIcon,
    'partly-cloudy-day' : partlyCloudyDayIcon,
    'partly-cloudy-night' : partlyCloudyNightIcon,
    'rain' : rainIcon,
    'rain-snow' : rainSnowIcon,
    'rain-snow-showers-day' : rainSnowShowersDayIcon,
    'rain-snow-showers-night' : rainSnowShowersNightIcon,
    'showers-day' : showersDayIcon,
    'showers-night' : showersNightIcon,
    'sleet' : sleetIcon,
    'snow' : snowIcon,
    'snow-showers-day' : snowShowersDayIcon,
    'snow-showers-night' : snowShowersNightIcon,
    'thunder' : thunderIcon,
    'thunder-rain' : thunderRainIcon,
    'thunder-showers-day' : thunderShowersDayIcon,
    'thunder-showers-night' : thunderShowersNightIcon,
    'wind' : windIcon

}

const weatherStaticImages = {
    'Clear': clearWeatherImage,
    'Rain': rainImage,
    'Partially cloudy': cloudyImage,
    'Snow': snowImage,
    'Overcast': overcastImage,
    }


export {weatherStaticIcons, weatherStaticImages}