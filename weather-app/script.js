const apiKey = '13d120652b8c8ca431bd81905a3cac05'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    displayWeather(data);
                } else {
                    alert("City not found. Please enter a valid city name.");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("Unable to fetch data. Please try again.");
            });
    } else {
        alert("Please enter a city name.");
    }
}

function displayWeather(data) {
    document.getElementById('cityName').innerText = `Weather in ${data.name}`;
    document.getElementById('condition').innerText = `Condition: ${data.weather[0].description}`;
    document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
}
