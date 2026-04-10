const celcusText = document.getElementById("celcius-text");
const footerDisplay = document.getElementById("future-display");

const precip = document.getElementById("precipitation-value");
const humidity = document.getElementById("humidity-value");
const wind = document.getElementById("wind-value");

const day_time = document.getElementById("day-time");
const condition = document.getElementById("condition");

const dateNow = new Date();

const day = dateNow.toLocaleDateString('en-US', { weekday: 'long' })
const hours = dateNow.getHours();

const ampm = hours >= 12 ? 'PM' : 'AM';

const API = "http://localhost:8000/v1/weather"
fetch(API).then(res => res.json()).then(res => {
    const tempFre = parseFloat(res[0].tempmax);
    const tempCelcius = (tempFre - 32) * 5/9;
    celcusText.innerHTML = `${Math.round(tempCelcius)}<sup class="sup-celc">C</sup><sup>F</sup>`;
    precip.innerText = `${res[0].precip}%`;
    humidity.innerText = `${res[0].humidity}%`;
    wind.innerText = `${res[0].windspeed} km/h`;

    day_time.innerText = `${day}, ${hours}:00 ${ampm}`;
    condition.innerText = `${res[0].conditions}`;

    console.log(res.length)

    for(let i = 0; i < 10; i++){
        const day = dateNow.toLocaleDateString('en-US', { weekday: 'long' })

        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const headText = document.createElement("h4");
        headText.innerText = `${day}`;

        const icon = document.createElement("img");
        icon.setAttribute("src", "img/sun-yellow-spiral.png");
        const tempP = document.createElement("p");

        const tempFre = parseFloat(res[i].tempmax);
        const tempCelcius = (tempFre - 32) * 5/9;

        tempP.innerHTML = `${Math.round(tempCelcius)}<sup>◦</sup>`;

        card.appendChild(headText);
        card.appendChild(icon);
        card.appendChild(tempP);

        footerDisplay.appendChild(card);
        dateNow.setDate(dateNow.getDate() + 1);
    }
});
