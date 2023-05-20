// Variables to store DOM elements
let inputval = document.querySelector("#cityinput"); // Input field for city
let btn = document.querySelector("#add"); // Button to fetch weather data
let city = document.querySelector("#cityoutput"); // Element to display city name
let description = document.querySelector("#description"); // Element to display weather description
let temp = document.querySelector("#temp"); // Element to display temperature
let wind = document.querySelector("#wind"); // Element to display wind speed

let apid = "3045dd712ffe6e702e3245525ac7fa38"; // API key for OpenWeatherMap

// Function to convert temperature from Kelvin to Celsius
function convertion(val) {
  return (val - 273).toFixed(1);
}

// Event listener for button click
btn.addEventListener("click", function () {
  // Fetch weather data from OpenWeatherMap API
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputval.value +
      "&appid=" +
      apid
  )
    .then((res) => res.json())
    .then((data) => {
      // Extract relevant data from the API response
      let nameval = data["name"]; // City name
      let descrip = data["weather"]["0"]["description"]; // Weather description
      let temperature = data["main"]["temp"]; // Temperature in Kelvin
      let wndspd = data["wind"]["speed"]; // Wind speed

      // Update the DOM with the fetched data
      city.innerHTML = `City:  ${nameval.toUpperCase()}`;
      temp.innerHTML = `Temperature: ${convertion(temperature)} &#8451`;
      description.innerHTML = `Conditions: ${descrip}`;
      wind.innerHTML = `Wind Speed: ${wndspd.toFixed(2)} km/h`;
    })
    .catch((err) => alert("Enter a valid city name")); // Display an error message for invalid city
});
