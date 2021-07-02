const apiKey = '1a306f57eaa04b66a65190330210107';
let weatherLocation = 'Glasgow';

const getIcon = (is_day, code) => {
    let isDay = 'day';
    if (is_day == 0) {
        isDay = 'night';
    }
    return (`static/images/weather/64x64/${isDay}/${code.slice(-7)}`);
}

const dayOfWeek = (date) => {
    const dayName = new Date(date);
    var options = { weekday: 'long'};
    return (new Intl.DateTimeFormat('en-US', options).format(dayName));
}

function currentWeather(location) {
    const currentLocation = document.getElementById('currentLocation');
    const currentTemperature = document.getElementById('currentTemperature');
    const currentIcon = document.getElementById('currentIcon')
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}}&aqi=no`)
        .then(response => response.json())
        .then(weather => {
            const icon = getIcon(weather.current.is_day, weather.current.condition.icon);
            currentLocation.innerHTML = `<p>${weather.location.name}, <br> ${weather.location.region}</p>`;
            currentTemperature.innerHTML = `<p>${weather.current.temp_f} &#176F<br><span>${weather.current.condition.text}</span></p>`;
            currentIcon.innerHTML = `<img src="${icon}" /></p>`;
        });
}

const getForecast = (location) => {

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`)
        .then(response => response.json())
        .then(weather => {
            for(var x = 0; x < 3; x++){
                const forecastDay = weather.forecast.forecastday[x];
                const icon = getIcon('1', forecastDay.day.condition.icon);
                const element = document.createElement('div')
                    element.className = 'forecastDay'
                    element.innerHTML = `<div class="dayOfWeek">
                                            ${dayOfWeek(forecastDay.date)}
                                        </div>
                                        <div class="dailyForecast">
                                            <p>${forecastDay.day.condition.text}</p>
                                            <p>${forecastDay.day.maxtemp_f} &#176F <br> ${forecastDay.day.mintemp_f} &#176F</p>
                                            <img src=${icon} />
                                        </div>`
                document.getElementById('forecastBox').appendChild(element);
            }
        });

}

getForecast(weatherLocation);
currentWeather(weatherLocation);
