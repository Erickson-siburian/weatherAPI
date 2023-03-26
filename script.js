const searchBox = document.querySelector(".search-input input");
const searchBtn = document.querySelector("search-field");
const input = document.getElementById("input");

const weatherData = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    "x-rapidapi-key": "25d3e17146msh1bdabc2d0b81689p191129jsna8a4d29639d0",
  },
};

const getData = async (cityName) => {
  try {
    const response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${cityName}&days=3`,
      weatherData
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

const displayCurrentWeather = (weatherData) => {
  const displays = document.getElementById("current-weather");
  let weather = ``;
  let forecasts = weatherData.forecast.forecastday;
  console.log(forecasts);

  for (let i = 0; i < forecasts.length; i++) {
    const forecastData = {
      date: forecasts[i].date,
      condition: forecasts[i].day.condition.text,
      conditionImage: forecasts[i].day.condition.icon,
      avg_temp: forecasts[i].day.avgtemp_c,
      max_temp: forecasts[i].day.maxtemp_c,
      min_temp: forecasts[i].day.mintemp_c,
      avg_humidity: forecasts[i].day.avghumidity,
    };

    const element = `
        <div class="weather-container">
          <h2>Current Weather</h2>
          <p style="text">"${currentWeather.condition}"</p>
          <img src="https:${currentWeather.conditionImage}" class="weather-image">
          <p>temperature: ${currentWeather.temperature}℃</p>
          <p>humidity: ${currentWeather.humidity}%</p>
          <p>(updated at ${currentWeather.time})</p>
        </div>`;

    listOfElement += element;

    forecastDiv.innerHTML = listOfElement;
  }
};

async function cari() {
  console.log(searchBox.value);
  displayCurrentWeather(getData(searchBox.value));
}
// const displayCityName = (weatherData) => {
//   const cityNameDiv = document.getElementById("city-description");
//   const cityName = weatherData.location.name;
//   const countryName = weatherData.location.country;
//   const element = `<h2>Showing the weather of ${cityName}, ${countryName}<h2>`;
//   cityNameDiv.innerHTML = element;
// };

// const currentWeather = {
//   condition: weatherData.current.condition.text,
//   conditionImage: weatherData.current.condition.icon,
//   temperature: weatherData.current.temp_c,
//   humidity: weatherData.current.humidity,
//   time: weatherData.current.last_updated,
// };

// const displayWeatherForecast = (weatherData) => {
//   const forecastDiv = document.getElementById("weather-forecast");
//   forecasts = weatherData.forecast.forecastday;

//   let listOfElement = "";
// };

// const searchWeather = async () => {
//   const cityName = document.getElementById("city-name").value;
//   if (!cityName) {
//     return null;
//   }

//   const weatherData = await getWeatherForecast(cityName);
//   if (!weatherData.error) {
//     displayCityName(weatherData);
//     displayCurrentWeather(weatherData);
//     displayWeatherForecast(weatherData);
//   }
// };
