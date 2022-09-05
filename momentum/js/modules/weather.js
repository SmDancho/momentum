const weather = document.querySelector('.weather');
const cityInput = document.querySelector('.city');
const weatherIcon = document.querySelector('.weather-icon');
const temreture = document.querySelector('.temperature');
const weatherDescr = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');



cityInput.addEventListener('change', () => {
    localStorage.setItem('city', cityInput.value);
}); // save value to localstorage
cityInput.value = localStorage.getItem('city'); // get value from local storage and put to input

const APIKEY = '9e082bde657f244b58e723e0e684b49f';


export async function getWeather() {
    try {
        const getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}
        &lang=ru&appid=${APIKEY}&units=metric`);

        const response = await getData.json();


        weatherIcon.classList.add(`owf-${response.weather[0].id}`);
        weatherDescr.innerHTML = response.weather[0].description;
        temreture.innerHTML = `${Math.floor(response.main.temp)} °C`;
        wind.innerHTML = `Wind speed: ${response.wind.speed} m/s`;
        humidity.innerHTML = `Humidity: ${response.main.humidity} %`;
        
      }
    catch(err) {
        weatherIcon.innerHTML = '';
        weatherDescr.innerHTML= 'Error :try to enter another name of city';
        temreture.innerHTML = '';
        wind.innerHTML = ``;
        humidity.innerHTML = ``;
    }
  
    
}




cityInput.addEventListener("keydown", (event) => {    
    if (event.key === "Enter") {
    getWeather();
}});
