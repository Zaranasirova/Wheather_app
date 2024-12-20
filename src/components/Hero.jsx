import React, {useState } from 'react';
import clear from "../Assets/image/clear.png";
import cloud from "../Assets/image/cloud.png";
import drizzle from "../Assets/image/drizzle.png";
import humidity from "../Assets/image/humidity.png";
import rain from "../Assets/image/rain.png";
import snow from "../Assets/image/snow.png";
import wind from "../Assets/image/wind.png";
import search_icon from "../Assets/image/search.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Hero = () => {
    const [wheatherData, setWheatherData] = useState(false);
    const [searchInput, setSearchInput] = useState("")

    const allIcons = {
        "01d": clear,
        "01n": clear,
        "02d": cloud,
        "02n": cloud,
        "03d": cloud,
        "03n": cloud,
        "04d": drizzle,
        "04n": drizzle,
        "09d": rain,
        "09n": rain,
        "10d": rain,
        "10n": rain,
        "13d": snow,
        "13n": snow,
    }

    const search = async (city) => {

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_APP_ID}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const icons = allIcons[data.weather[0].icon] || clear;
            setWheatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temprature: Math.floor(data.main.temp),
                location: data.name,
                icon: icons
            })
        } catch (error) {
            setWheatherData(false)
            console.error(" error in fetching weather data")
        }
    }
    const handleSearch = () => {
        if (searchInput === "") {
            toast.error("City name cannot be empty!");
            return;
        }
        search(searchInput)
    }




    return (
        <div className="hero">
            <div className='search-wrapper'>
                <input type="text" placeholder='City name' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                <img src={search_icon} alt="search_icon" onClick={handleSearch} />
            </div>
            {
                wheatherData && (
                    <>
                        <div className='weather-top-content'>
                            <img src={wheatherData.icon} alt="clear" />
                            <p className='temprature'>{wheatherData.temprature}°C</p>
                            <p className='location'>{wheatherData.location}</p>
                        </div>
                        <div className="weather-data">
                            <div className="col">
                                <img src={humidity} alt="humidity" />
                                <div>
                                    <p>{wheatherData.humidity}%</p>
                                    <span>Humidity</span>
                                </div>
                            </div>
                            <div className="col">
                                <img src={wind} alt="wind" />
                                <div>
                                    <p>{wheatherData.windSpeed} Km/h</p>
                                    <span>Wind Speed</span>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

            <ToastContainer />
        </div>
    )
}

export default Hero