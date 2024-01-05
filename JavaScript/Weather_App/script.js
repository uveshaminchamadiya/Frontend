const loadData = async (url, options, cityInput) => {
    document.getElementById('loader').style.display = 'block';
    document.getElementById('chart').style.display = "none";
    document.getElementById('body').style.backgroundColor = "#aba6a6";
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        document.getElementById('city').innerText = 'City : ' + cityInput;
        document.getElementById('temp').innerText = result.temp + '°C';
        document.getElementById('minTemp').innerText = (result.min_temp - 2) + '°C';
        document.getElementById('maxTemp').innerText = (result.max_temp + 1) + '°C';
        document.getElementById('wind').innerText = (result.wind_speed + 1) + 'km/hr';
        document.getElementById('windDeg').innerText = (result.wind_degrees + 1) + '°';
        document.getElementById('humidity').innerText = (result.humidity + 1) + '%';

    } catch (error) {
        console.error('Error fetching data:', error);

      
    } finally {
       
        document.getElementById('loader').style.display = 'none';
        document.getElementById('chart').style.display = "block";
        document.getElementById('body').style.backgroundColor = "#FFF";
    }
}


function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const weatherInfo = document.getElementById('weatherInfo');

    if (cityInput) {
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityInput}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '96c89bdbe3msh99bd897f202b26ap1d7d9bjsn49c6a57d21ad',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };

        try {
            let load = loadData(url, options, cityInput);
            if (load) {
                document.getElementById('userInput').style.display = "none";
            }
        } catch (error) {
            console.error(error);
        }
    } else {
        alert('Please enter a city');
    }
}

function closeModel() {
    console.log('close')
    document.getElementById('chart').style.display = "none";
    document.getElementById('userInput').style.display = "block";
}
