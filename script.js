const apiKey = "c700261f435d2975596bf6d61c7af092";

function getWeather(){

    const city = document.getElementById("cityInput").value.trim();
    const weatherInfo = document.getElementById("weatherInfo");

    if(city===""){
        weatherInfo.innerHTML="<p>Please enter a city name.</p>";
        return;
    }

    weatherInfo.innerHTML="<p>Loading...</p>";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response=>{

        if(!response.ok){
            throw new Error("City not found");
        }

        return response.json();

    })

    .then(data=>{

        weatherInfo.innerHTML=`
        <h2>${data.name}, ${data.sys.country}</h2>

        <p>🌡 Temperature : <b>${data.main.temp} °C</b></p>

        <p>🌤 Weather : <b>${data.weather[0].main}</b></p>

        <p>📝 Description : <b>${data.weather[0].description}</b></p>

        <p>💧 Humidity : <b>${data.main.humidity}%</b></p>

        <p>💨 Wind Speed : <b>${data.wind.speed} m/s</b></p>
        `;

    })

    .catch(error=>{

        weatherInfo.innerHTML=`<p style="color:red;">${error.message}</p>`;

    });

}