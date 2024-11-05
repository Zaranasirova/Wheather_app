import React, { useEffect } from 'react';
import clear from "../Assets/image/clear.png";
import cloud from "../Assets/image/cloud.png";
import drizzle from "../Assets/image/drizzle.png";
import humidity from "../Assets/image/humidity.png";
import rain from "../Assets/image/rain.png";
import snow from "../Assets/image/snow.png";
import wind from "../Assets/image/wind.png";
const Hero = () => {
const search=async (city)=>{
try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_APP_ID}`;
    const response= await fetch(url);
    const data= await response.json();
    console.log(data)
} catch (error) {
    console.log(error)
}
}
useEffect(()=>{
search("London")
},[])


    return (
        <div className="hero">
            <div className='weather-top-content'>
                <img src={clear} alt="clear" />
                <p className='temprature'>16°C</p>
                <p className='location'>London</p>
            </div>
            <div className="weather-data">
                <div className="col">
                    <img src={humidity} alt="humidity" />
                    <div>
                        <p>91%</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className="col">
                    <img src={wind} alt="wind" />
                    <div>
                        <p>3.6 Km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero