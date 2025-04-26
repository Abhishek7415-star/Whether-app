function getWeather() {
  const city = document.getElementById('cityInput').value;
  const weatherInfo = document.getElementById('weatherInfo');

  if (city === '') {
      weatherInfo.innerHTML = "Please enter a city name.";
      return;
  }

  console.log("Fetching weather data for city:", city); 

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => {
      if (!response.ok) { 
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
  })
  .then(data => {
      console.log(data); 
  
  })
  .catch(error => {
      console.error("Error fetching weather data:", error); 
  });
}