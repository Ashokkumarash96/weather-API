//variables
let inputval = document.querySelector("#cityinput");
let btn = document.querySelector("#add");
let city = document.querySelector("#cityoutput");
let descrip = document.querySelector("#description");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");

apid = "3045dd712ffe6e702e3245525ac7fa38";

//kelvin to celsius
function convertion(val) {
  return (val - 273).toFixed(1);
}

//fetch
btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputval.value +
      "&appid=" +
      apid
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
