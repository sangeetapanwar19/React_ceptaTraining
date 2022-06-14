import React, { useState } from 'react'
import axios from 'axios'
import WeatherDataShow from './WeatherDataShow'
import '../../css/weatherapp.css'

const WeatherApp = () => {
    const [city, setCity] = useState("")
    const [weatherdata, setweatherData] = useState({
        description: "",
        temprature: 0,
        temprature_max: 0,
        temprature_min: 0,
        humidity: 0,
        sunrise: 0,
        sunset: 0,
        country: "",
    })

    const handleTemprature = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c412e32f8374f6a87ce341d095a159f6`)
            .then((response) => {
                setweatherData({
                    description: response.data.weather[0].description,
                    temprature: response.data.main.temp,
                    temprature_max: response.data.main.temp_max,
                    temprature_min: response.data.main.temp_min,
                    humidity: response.data.main.humidity,
                    sunrise: response.data.sys.sunrise,
                    sunset: response.data.sys.sunset,
                    country: response.data.sys.country,
                })
            })
    }

    return (
        <>
            <div className='text-center my-2'>
                <h1>Weather App</h1>
                <div class="row">
                <div class="col-md-9">
                <input type="text" className='form-control' value={city} onChange={(e) => {
                    setCity(e.target.value);
                }} />
                </div>
                <div className="col-md-3">
                <button className='btn btn-warning mx-2' type='submit' onClick={handleTemprature}>Temprature</button>
                </div>
               </div>
            </div>

            <WeatherDataShow text ={weatherdata}></WeatherDataShow>
        </>
    )
}

export default WeatherApp
