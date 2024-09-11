const input= document.querySelector("input");
const btn= document.getElementById("btn");

const icon= document.querySelector(".icon");
const weather= document.querySelector(".weather");
const temperature= document.querySelector(".temperature");
const feelslike= document.querySelector(".feelslike");
const description= document.querySelector(".description");


btn.addEventListener('click', ()=>{
    let city= input.value
    getWeather(city)
})

function getWeather(city){
    console.log(city)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'06d89efb135add9725efc0f339042b26'}`)
        .then(response => response.json())
        .then(data => {
             console.log(data);
             const iconCode = data.weather[0].icon;
             icon.innerHTML=`<img src="https://openweathermap.org/img/wn/${iconCode}.png"
             alt="Weather Icon"/>`
    
             const weatherCity = data.name;
             const WeatherCountry= data.sys.country;
             weather.innerHTML= `${weatherCity} , 
             ${WeatherCountry}`;

             let weatherTemp = data.main.temp;
             weatherTemp = weatherTemp - 273;
             const temp = weatherTemp.toFixed(2)
             temperature.innerHTML= `${temp}°C`;

             let weatherFeels= data.main.feels_like;
             weatherFeels = weatherFeels - 273;
             const feels_like = weatherFeels.toFixed(2)
             feelslike.innerHTML = `<h5 id="feelstext"> Feels Like: </h5>    ${feels_like}°C`;


            const weatherDisc = data.weather[0].description;
            description.innerHTML= weatherDisc;

            
        })
}


