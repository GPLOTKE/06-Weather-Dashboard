var searchBtn = document.querySelector("#search-btn");
var cityInput = document.querySelector("#city-input");
// var cityListEl = document.querySelectorAll("#city-list");
// var weatherForm = document.querySelectorAll("#weather-form");
// var currentWeatherEl = document.querySelector("#current-container");
// var searchedCity = "";

class Fetch {
    async fetchCurrent(cityInput) {
        const apiKey = "41ea287d4912f0b2e0fa6621fbca8b89"
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`
        );
        const data = await response.json();
        console.log(data);
        return data;
    }
}

class UI {
    constructor() {
        this.currentContainer = document.getElementById("current-container");
        this.city;
    }

    generateHtml(data) {
        this.currentContainer.innerHTML = `
        
        <div>
            <div>
                <h5>${data.name}</h5>
                <h6>High of ${data.main.temp_max}. Low of ${data.main.temp_min}</h6>
            </div>
        </div>`;
    }
}

const fetch = new Fetch();
const ui = new UI();

searchBtn.addEventListener("click", () => {
    const currentVal = search.value;

    fetch.getCurrent(currentVal).then((data) => {
        ui.generateHtml(data);
        ui.saveToLocal(data);
    });
});

window.addEventListener("DOMContentLoaded", () => {
    const dataSaved = ui.getFromLocal();
    ui.generateHtml(dataSaved);
});

clearHtml(); {
    currentContainer.innerHTML = "";
}

saveToLocal(data); {
    localStorage.setItem("city", JSON.stringify(data));
}

getFromLocal(); {
    if (localStorage.getItem("city" == null)) {
        return this.defaultCity;
    } else {
        this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
}

// clearLocal(); {
//     localStorage.clear();
// }