# 🌤️ Weather App

A clean and responsive weather app built with **React** and **Tailwind CSS**. Search any city in the world and instantly see its current temperature, humidity, and wind speed, powered by the free **Open-Meteo API** (no API key needed).

![Weather App](./screenshots/weather.png)

## ✨ Features

- Search weather by city name (Enter key or Search button)
- Shows current temperature, humidity, and wind speed
- Loading indicator while data is being fetched
- Friendly error message when a city is not found
- Welcome screen shown before the first search
- Glassmorphism UI with a gradient background
- Responsive layout for mobile and desktop

## 🛠️ Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)
- [Open-Meteo API](https://open-meteo.com/) (Geocoding + Forecast)

## 🧠 Concepts Used

- `useState` for managing data, loading, and error states
- API integration with `fetch` and `async/await`
- Chaining two API calls (city name to coordinates to weather)
- Error handling with `try / catch / finally`
- Controlled components (form and input)
- Conditional rendering with `&&`
- Template literals for dynamic URLs

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/jaspreetsingh06/weather-app.git

# Go to the project folder
cd weather-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## 🔄 How It Works

1. The user types a city name and submits the form.
2. The **Geocoding API** converts the city name into latitude and longitude.
3. The **Forecast API** uses those coordinates to return the current weather.
4. The data is stored in state and displayed in the weather card.

## 📁 Project Structure

```
weather-app/
├── src/
│   ├── App.jsx
│   └── main.jsx
├── screenshots/
│   └── weather.png
├── index.html
└── package.json
```

## 🔮 Future Improvements

- Save last searched city using localStorage
- Auto-load weather on app start
- Change background based on weather condition
- Weather icons and 5-day forecast
- Deploy on Vercel

## 👤 Author

**Jaspreet Singh**
GitHub: [@jaspreetsingh06](https://github.com/jaspreetsingh06)
