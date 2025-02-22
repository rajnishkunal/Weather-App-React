# React Weather App

This is a responsive weather application built using React and the OpenWeatherMap API. It allows users to search for weather details by city name and displays temperature, humidity, wind speed, and weather conditions.

## Features
- Search for weather by city name
- Display current temperature, humidity, wind speed, and weather conditions
- Responsive design for mobile and desktop views
- Error handling for invalid city names

## Technologies Used
- React
- Axios for API requests
- Tailwind CSS for styling
- OpenWeatherMap API

## Weather App Live Vercel Link 
- https://weather-app-react-six-theta.vercel.app/
## Installation and Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/react-weather-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd react-weather-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
    ```
    VITE_APP_ID=your_api_key_here
    ```
5. Start the development server:
    ```bash
    npm run dev
    ```

## Usage
- Enter a city name in the search bar and click the search icon.
- The app will display the current weather details for the entered city.
- If the city name is incorrect, an error message will be shown.

## API Reference
- This app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data.

