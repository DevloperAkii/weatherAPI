const celcusText = document.getElementById("celcius-text");

const API = "http://localhost:8000/v1/weather"

fetch(API).then(res => res.json()).then(res => {
    celcusText.innerHTML = `${res[0].temp}<sup>C</sup><sup>F</sup>`;
});