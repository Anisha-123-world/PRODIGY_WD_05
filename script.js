const apikey = "c8a61d870d775118ebf07d41554e092e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
async function checkweather(city){
    const response = await fetch(apiurl+ city + `&appid=${apikey}`);
    var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if(data.weather[0].main == "Clouds"){
        weathericon.src = "clouds.png";

    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "Rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weathericon.src = "snow.png";
    }
    document.querySelector(".weather").style.display = "block";
}
searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})


