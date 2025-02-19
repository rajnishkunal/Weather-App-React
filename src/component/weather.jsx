import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchIcon from '../assets/search.png';
import Wind from '../assets/wind.png';
import Humidity from '../assets/humidity.png';

function Weather2() {
  const [city, setCity] = useState('Jodhpur');
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState('');
  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`);
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setError('City not found');
    }
  };

  const handleSearch = () => {
    fetchWeather();
  };

  return (
    <div className='min-h-screen bg-cyan-200 flex items-center flex-col container mx-auto p-4'>
      <h1 className='text-[#E43D12] text-3xl md:text-5xl my-10 font-bold select-none text-center'>
        Search Weather Of Your Place
      </h1>
      <div className='border-2 p-5 md:p-10 rounded-2xl bg-amber-100 w-full max-w-md'>
        <div className='flex gap-3 justify-center'>
          <input 
            type='text' 
            placeholder='Enter City Name' 
            className='text-center w-2/3 md:w-68 h-8 font-bold border-2 border-black rounded-md text-blue-500' 
            value={city} 
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch}>
            <img src={SearchIcon} alt='' className='h-5 hover:cursor-pointer'/>
          </button>
        </div>
        <div className='flex justify-center'>
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather?.[0].icon}@2x.png`} alt='' className='h-50 md:h-32'/>
        </div>
        <div className='flex justify-center items-center flex-col text-2xl md:text-4xl font-bold text-blue-500 md:pb-10'>
          <h1>{weatherData.main?.temp}&deg;C</h1>
          <h1>{weatherData.name}</h1>
        </div>
        <div className='flex justify-between text-xs md:text-base'>
          <div className='flex gap-2 m-2'>
            <img src={Humidity} alt='' className='h-6 md:h-10'/>
            <div>
              <h1>{weatherData.main?.humidity} %</h1>
              <p>Humidity</p>
            </div>
          </div>
          <div className='flex gap-2 m-2'>
            <img src={Wind} alt='' className='h-6 md:h-10'/>
            <div>
              <h1>{weatherData.wind?.speed} Km/h</h1>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
        {error && <div className='text-red-500 text-center mt-4'>{error}</div>}
      </div>
    </div>
  );
}

export default Weather2;
