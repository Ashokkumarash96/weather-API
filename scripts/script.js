//variables
let inputval = document.querySelector("#cityinput");
let btn = document.querySelector("#add");
let city = document.querySelector("#cityoutput");
let descrip = document.querySelector("#description");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");

// Get your own free OWM API key at https://www.openweathermap.org/appid - please do not re-use mine!
// You don't need an API key for this to work at the moment, but this will change eventually.
apik = "3045dd712ffe6e702e3245525ac7fa38";

//kelvin to celcious
function convertion(val) {
  return (val - 273).toFixed(1);
}

//fetch
btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputval.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())
    .then((data) => {
      let nameval = data["name"];
      let descrip = data["weather"]["0"]["description"];
      let temperature = data["main"]["temp"];
      let wndspd = data["wind"]["speed"];
      city.innerHTML = `City: ${nameval}`;
      temp.innerHTML = `Temperature: ${convertion(temperature)} &#8451`;
      description.innerHTML = `Conditions: ${descrip}`;
      wind.innerHTML = `Wind Speed: ${wndspd.toFixed(2)} km/h`;
    })
    .catch((err) => alert("Enter valid City name"));
});
