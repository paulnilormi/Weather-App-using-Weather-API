


let btn = document.getElementById("btn");


async function fetchdata() {
let city = document.getElementById("city").value;
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e5668e0e49b2d1a719c159c618e66b66&units=metric`;

let response = await fetch(url);
let data = await response.json();
console.log(data);

document.getElementById("city-name").innerText = `${data.name}, ${data.sys.country}`;
document.getElementById("weather-img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
document.getElementById("temperature").innerText = `${Math.round(data.main.temp)}°C`;
document.getElementById("desc").innerText = data.weather[0].description;
document.getElementById("wind").innerText = data.wind.speed;
document.getElementById("max-temp").innerText = `Max Temp: ${Math.round(data.main.temp_max)}°C`;
document.getElementById("min-temp").innerText = `Min Temp: ${Math.round(data.main.temp_min)}°C`;
document.getElementById("feels").innerText = `Feels Like: ${Math.round(data.main.feels_like)}°C`;
document.getElementById("humidity").innerText = data.main.humidity;
document.getElementById("visibility").innerText = data.visibility;
document.getElementById("pressure").innerText = data.main.pressure;


// Change background theme based on weather
  const weather = data.weather[0].main.toLowerCase();
  const body = document.body;

  // Remove all previous theme classes
  body.classList.remove(
    "bg-clear",
    "bg-clouds",
    "bg-rain",
    "bg-snow",
    "bg-mist",
    "bg-default"
  );

  switch (weather) {
    case "clear":
      body.classList.add("bg-clear");
      break;
    case "clouds":
      body.classList.add("bg-clouds");
      break;
    case "rain":
    case "drizzle":
      body.classList.add("bg-rain");
      break;
    case "snow":
      body.classList.add("bg-snow");
      break;
    case "mist":
    case "fog":
    case "haze":
      body.classList.add("bg-mist");
      break;
    default:
      body.classList.add("bg-default");
  }
}

btn.addEventListener("click", fetchdata);
