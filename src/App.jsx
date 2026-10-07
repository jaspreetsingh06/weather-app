import React, { useState } from 'react'

const App = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSearch(e){
        e.preventDefault();

        if(city.trim() === ''){
            return;
        }

        setLoading(true);
        setError('');

        try{
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`)
        const data = await response.json();
        if(!data.results){
            throw new Error('City Not Found');
        }

        const lat = data.results[0].latitude;
        const long = data.results[0].longitude;

        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`)

        const data2 = await res.json();

        const newWeather = {
            name: data.results[0].name,
            temp: data2.current.temperature_2m,
            humidity: data2.current.relative_humidity_2m,
            wind: data2.current.wind_speed_10m
        }

        setWeather(newWeather);
        } catch(err){
            setError(err.message);
            setWeather(null);
        } finally{
            setLoading(false);
        }
    }

  return (
    <>
    <div className="min-h-screen bg-linear-to-br from-sky-400 to-blue-600 flex flex-col items-center justify-center gap-4 px-4">

        <h1 className='text-4xl sm:text-5xl font-bold text-white'>🌤️ Weather App</h1>

        <form onSubmit={handleSearch} className='w-full max-w-sm flex gap-2'>
            <input value={city} onChange={(e) => setCity(e.target.value)} className='flex-1 bg-white/30 rounded-2xl border border-white/30 backdrop-blur-md outline-none text-white p-3 placeholder:text-white/70' type="text" placeholder='Search City' />
            <button type='submit' className='bg-white text-blue-600 font-semibold px-5 rounded-2xl hover:bg-blue-50 transition'>Search</button>
        </form>

        {!weather && !loading && !error && (
            <div className='w-full max-w-sm text-center text-white bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl'>
                <p className='text-6xl mb-3'>🌍</p>
                <p className='font-semibold text-xl'>Check the weather anywhere</p>
                <p className='text-white/80 mt-1'>Search a city to see its live weather</p>
            </div>
        )}

        {loading && (
            <p className='font-semibold text-white animate-pulse'>Loading...</p>
        )}

        {error && (
            <p className='w-full max-w-sm text-center font-semibold text-white bg-red-500/40 border border-red-300/50 rounded-2xl p-3'>⚠️ {error}</p>
        )}

        {weather && !loading && (
            <div className='bg-white/30 w-full p-8 max-w-sm rounded-2xl backdrop-blur-md border border-white/30 text-white shadow-xl text-center'>
                <h2 className='font-semibold text-3xl'>{weather.name}</h2>
                <p className='text-7xl font-bold my-4'>{Math.round(weather.temp)}°C</p>

                <div className='grid grid-cols-2 gap-3 mt-6'>
                    <div className='bg-white/20 rounded-xl p-3'>
                        <p className='text-sm text-white/80'>💧 Humidity</p>
                        <p className='font-semibold text-lg'>{weather.humidity}%</p>
                    </div>
                    <div className='bg-white/20 rounded-xl p-3'>
                        <p className='text-sm text-white/80'>💨 Wind</p>
                        <p className='font-semibold text-lg'>{weather.wind} km/h</p>
                    </div>
                </div>
            </div>
        )}

    </div>
    </>
  )
}

export default App