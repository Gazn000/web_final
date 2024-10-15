function dayOfTheWeek(day, month, year) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return weekday[new Date(`${year}-${month}-${day}`).getDay()];
}

function getCountry(city) {
    const countryCurrencyMap = {
        "Afghanistan": "AFN",
        "Albania": "ALL",
        "Algeria": "DZD",
        "American Samoa": "USD",
        "Andorra": "EUR",
        "Angola": "AOA",
        "Anguilla": "XCD",
        "Antarctica": "XCD",
        "Antigua and Barbuda": "XCD",
        "Argentina": "ARS",
        "Armenia": "AMD",
        "Aruba": "AWG",
        "Australia": "AUD",
        "Austria": "EUR",
        "Azerbaijan": "AZN",
        "Bahamas": "BSD",
        "Bahrain": "BHD",
        "Bangladesh": "BDT",
        "Barbados": "BBD",
        "Belarus": "BYN",
        "Belgium": "EUR",
        "Belize": "BZD",
        "Benin": "XOF",
        "Bermuda": "BMD",
        "Bhutan": "BTN",
        "Bolivia": "BOB",
        "Bosnia and Herzegovina": "BAM",
        "Botswana": "BWP",
        "Brazil": "BRL",
        "British Indian Ocean Territory": "USD",
        "British Virgin Islands": "USD",
        "Brunei": "BND",
        "Bulgaria": "BGN",
        "Burkina Faso": "XOF",
        "Burundi": "BIF",
        "Cabo Verde": "CVE",
        "Cambodia": "KHR",
        "Cameroon": "XAF",
        "Canada": "CAD",
        "Cayman Islands": "KYD",
        "Central African Republic": "XAF",
        "Chad": "XAF",
        "Chile": "CLP",
        "China": "CNY",
        "Colombia": "COP",
        "Comoros": "KMF",
        "Congo (Congo-Brazzaville)": "XAF",
        "Cook Islands": "NZD",
        "Costa Rica": "CRC",
        "Croatia": "HRK",
        "Cuba": "CUP",
        "Curacao": "ANG",
        "Cyprus": "EUR",
        "Czechia (Czech Republic)": "CZK",
        "Denmark": "DKK",
        "Djibouti": "DJF",
        "Dominica": "XCD",
        "Dominican Republic": "DOP",
        "Ecuador": "USD",
        "Egypt": "EGP",
        "El Salvador": "USD",
        "Equatorial Guinea": "XAF",
        "Eritrea": "ERN",
        "Estonia": "EUR",
        "Eswatini": "SZL",
        "Swaziland": "SZL",
        "Ethiopia": "ETB",
        "Fiji": "FJD",
        "Finland": "EUR",
        "France": "EUR",
        "Gabon": "XAF",
        "Gambia": "GMD",
        "Georgia": "GEL",
        "Germany": "EUR",
        "Ghana": "GHS",
        "Greece": "EUR",
        "Grenada": "XCD",
        "Guatemala": "GTQ",
        "Guinea": "GNF",
        "Guinea-Bissau": "XOF",
        "Guyana": "GYD",
        "Haiti": "HTG",
        "Honduras": "HNL",
        "Hong Kong": "HKD",
        "Hungary": "HUF",
        "Iceland": "ISK",
        "India": "INR",
        "Indonesia": "IDR",
        "Iran": "IRR",
        "Iraq": "IQD",
        "Ireland": "EUR",
        "Israel": "ILS",
        "Italy": "EUR",
        "Jamaica": "JMD",
        "Japan": "JPY",
        "Jordan": "JOD",
        "Kazakhstan": "KZT",
        "Kenya": "KES",
        "Kiribati": "AUD",
        "Kuwait": "KWD",
        "Kyrgyzstan": "KGS",
        "Laos": "LAK",
        "Latvia": "EUR",
        "Lebanon": "LBP",
        "Lesotho": "LSL",
        "Liberia": "LRD",
        "Libya": "LYD",
        "Liechtenstein": "CHF",
        "Lithuania": "EUR",
        "Luxembourg": "EUR",
        "Madagascar": "MGA",
        "Malawi": "MWK",
        "Malaysia": "MYR",
        "Maldives": "MVR",
        "Mali": "XOF",
        "Malta": "EUR",
        "Marshall Islands": "USD",
        "Mauritania": "MRU",
        "Mauritius": "MUR",
        "Mexico": "MXN",
        "Micronesia": "USD",
        "Moldova": "MDL",
        "Monaco": "EUR",
        "Mongolia": "MNT",
        "Montenegro": "EUR",
        "Montserrat": "XCD",
        "Morocco": "MAD",
        "Mozambique": "MZN",
        "Myanmar": "MMK",
        "Namibia": "NAD",
        "Nauru": "AUD",
        "Nepal": "NPR",
        "Netherlands": "EUR",
        "New Zealand": "NZD",
        "Nicaragua": "NIO",
        "Niger": "XOF",
        "Nigeria": "NGN",
        "North Korea": "KPW",
        "North Macedonia": "MKD",
        "Norway": "NOK",
        "Oman": "OMR",
        "Pakistan": "PKR",
        "Palau": "USD",
        "Palestine State": "ILS",
        "Panama": "PAB",
        "Papua New Guinea": "PGK",
        "Paraguay": "PYG",
        "Peru": "PEN",
        "Philippines": "PHP",
        "Poland": "PLN",
        "Portugal": "EUR",
        "Qatar": "QAR",
        "Romania": "RON",
        "Russia": "RUB",
        "Rwanda": "RWF",
        "Saint Kitts and Nevis": "XCD",
        "Saint Lucia": "XCD",
        "Saint Vincent and the Grenadines": "XCD",
        "Samoa": "WST",
        "San Marino": "EUR",
        "Sao Tome and Principe": "STN",
        "Saudi Arabia": "SAR",
        "Senegal": "XOF",
        "Serbia": "RSD",
        "Seychelles": "SCR",
        "Sierra Leone": "SLL",
        "Singapore": "SGD",
        "Slovakia": "EUR",
        "Slovenia": "EUR",
        "Solomon Islands": "SBD",
        "Somalia": "SOS",
        "South Africa": "ZAR",
        "South Korea": "KRW",
        "South Sudan": "SSP",
        "Spain": "EUR",
        "Sri Lanka": "LKR",
        "Sudan": "SDG",
        "Suriname": "SRD",
        "Sweden": "SEK",
        "Switzerland": "CHF",
        "Syria": "SYP",
        "Taiwan": "TWD",
        "United States of America": "USD",
        "United Kingdom": "GBP"
    };

    return countryCurrencyMap[country];
}

const apiKey = "07cc5c268b4241faa5985244241706";
const apiUrl = "http://api.weatherapi.com/v1/forecast.json?q=";

const searchBox = document.getElementById("search");
const searchBtn = document.getElementById("submit");
const exchangeBtn = document.getElementById("exchange");

var country = "";
var currencyCode = "";
var exchangeRate = null;
var cityname = "";

async function checkCurrency(currencyCode) {
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyCode}`);
    var cur = await response.json();

    document.getElementById("exchangeRate").innerHTML = cur.rates.TWD;
    exchangeRate = cur.rates.TWD;
}

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&key=${apiKey}`);
    var data = await response.json();


    console.log(data);
    country = data.location.country;
    console.log(country);
    currencyCode = getCountry(data.location.name);
    cityname = data.location.name;

    document.getElementById("name").innerHTML = data.location.name;
    document.getElementById("temp").innerHTML = Math.round(data.current.temp_c);
    document.getElementById("humidity").innerHTML = data.current.humidity;
    document.getElementById("cloud").innerHTML = data.current.cloud;
    document.getElementById("condition").innerHTML = data.current.condition.text;
    document.getElementById("country").innerHTML = country;
    document.getElementById("currencyCode").innerHTML = currencyCode;

    checkCurrency(currencyCode);


    const localTime = data.location.localtime;
    const date = new Date(localTime);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();

    document.getElementById("date").innerHTML = `${dayOfTheWeek(day, month, year)} ${month}/${day} ${year}`;
    let timeOuput = document.getElementById("time");
    if (hour == 0) timeOuput.innerHTML = "12a.m.";
    else if (hour == 12) timeOuput.innerHTML = "12p.m.";
    else if (hour > 12) {
        let hour12 = hour - 12;
        timeOuput.innerHTML = hour12 + "p.m.";
    }
    else {
        timeOuput.innerHTML = hour + "a.m.";
    }

    document.getElementById("maxtemp").innerHTML = Math.round(data.forecast.forecastday[0].day.maxtemp_c);
    document.getElementById("mintemp").innerHTML = Math.round(data.forecast.forecastday[0].day.mintemp_c);

    const iconUrl = `https:${data.current.condition.icon}`;
    const imageElement = document.getElementById('icon');
    imageElement.src = iconUrl;

    const app = document.getElementById("travel-app");


    let timeOfDay = "day";
    const code = parseInt(data.current.condition.code);
    console.log(code);
    if (!data.current.is_day) {
        timeOfDay = "night";
    }
    //sunny
if (code == 1000 && timeOfDay == "day") {
    app.style.backgroundImage = "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    searchBtn.style.background = "#e5ba92";
    exchangeBtn.style.background = "#e5ba92";
    favoriteBtn.style.background = "#e5ba92";
    app.style.backgroundSize = "cover"; // 调整背景图片大小
    app.style.backgroundPosition = "center"; // 调整背景图片位置
} 
//clear
else if (code == 1000 && timeOfDay == "night") {
    app.style.backgroundImage = "url('https://images.unsplash.com/photo-1471032432678-03409d91e045?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    searchBtn.style.background = "#181e27";
    exchangeBtn.style.background = "#181e27";
    favoriteBtn.style.background = "#181e27";
    app.style.backgroundSize = "cover"; // 调整背景图片大小
    app.style.backgroundPosition = "center"; // 调整背景图片位置
}
//cloudy
else if (
    code == 1003 || code == 1006 || code == 1009 || code == 1030 || code == 1063 || 
    code == 1066 || code == 1069 || code == 1072 || code == 1087 || code == 1135 || 
    code == 1147 || code == 1150
) {
    if (timeOfDay == "day") {
        app.style.background = "url('https://images.unsplash.com/photo-1483702721041-b23de737a886?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        searchBtn.style.background = "#fa6d1b";
        exchangeBtn.style.background = "#fa6d1b";
        favoriteBtn.style.background = "#fa6d1b";
        app.style.backgroundSize = "cover"; // 调整背景图片大小
        app.style.backgroundPosition = "center"; // 调整背景图片位置
    } else {
        app.style.background = "url('https://images.unsplash.com/photo-1486896427952-71586fb5976a?q=80&w=2638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        searchBtn.style.background = "#181e27";
        exchangeBtn.style.background = "#181e27";
        favoriteBtn.style.background = "#181e27";
        app.style.backgroundSize = "cover"; // 调整背景图片大小
        app.style.backgroundPosition = "center"; // 调整背景图片位置
    }
}
//small rain
else if (
    code == 1153 || code == 1168 || code == 1180 || code == 1183 || code == 1186 || 
    code == 1189 || code == 1198 || code == 1240
) {
    if (timeOfDay == "day") {
        app.style.background = "url('https://images.unsplash.com/photo-1501691223387-dd0500403074?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        searchBtn.style.background = "#647d75";
        exchangeBtn.style.background = "#647d75";
        favoriteBtn.style.background = "#647d75";
        app.style.backgroundSize = "cover"; // 调整背景图片大小
        app.style.backgroundPosition = "center"; // 调整背景图片位置
    } else {
        app.style.background = "url('https://images.unsplash.com/photo-1548232979-6c557ee14752?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        searchBtn.style.background = "#325c80";
        exchangeBtn.style.background = "#325c80";
        favoriteBtn.style.background = "#325c80";
        app.style.backgroundSize = "cover"; // 调整背景图片大小
        app.style.backgroundPosition = "center"; // 调整背景图片位置
    }
}

//heavy rain
else if (
    code == 1171 || code == 1192 || code == 1195 || code == 1243 || code == 1246 || 
    code == 1273 || code == 1276
) {
    if (timeOfDay == "day") {
        app.style.background = "url('https://images.unsplash.com/photo-1501297875943-27f3803b4956?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        searchBtn.style.background = "#647d75";
        exchangeBtn.style.background = "#647d75";
        favoriteBtn.style.background = "#647d75";
        app.style.backgroundSize = "cover"; // 调整背景图片大小
        app.style.backgroundPosition = "center"; // 调整背景图片位置
    } else {
        app.style.background = "url('https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        searchBtn.style.background = "#325c80";
        exchangeBtn.style.background = "#325c80";
        favoriteBtn.style.background = "#325c80";
        app.style.backgroundSize = "cover"; // 调整背景图片大小
        app.style.backgroundPosition = "center"; // 调整背景图片位置
    }
}

//light snow
else if (
    code == 1114 || code == 1204 || code == 1210 || code == 1213 || code == 1237 || 
    code == 1249 || code == 1255 || code == 1261 || code == 1279
) {
    if (timeOfDay == "day") {
        app.style.background = "url('https://images.unsplash.com/photo-1566415282796-4b95d3d3acaf?q=80&w=2703&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        searchBtn.style.background = "#4d72aa";
        exchangeBtn.style.background = "#4d72aa";
        favoriteBtn.style.background = "#4d72aa";
        app.style.backgroundSize = "cover"; // 调整背景图片大小
        app.style.backgroundPosition = "center"; // 调整背景图片位置
    } else {
        app.style.background = "url('https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        searchBtn.style.background = "#1b1b1b";
        exchangeBtn.style.background = "#1b1b1b";
        favoriteBtn.style.background = "#1b1b1b";
        app.style.backgroundSize = "cover"; // 调整背景图片大小
        app.style.backgroundPosition = "center"; // 调整背景图片位置
    }
}

//heavy snow
else if (
    code == 1117 || code == 1207 || code == 1216 || code == 1219 || code == 1222 || 
    code == 1225 || code == 1252 || code == 1258 || code == 1264 || code == 1282
) {
    if (timeOfDay == "day") {
        app.style.background = "url('https://images.unsplash.com/photo-1461407665364-25b173b7ffe2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        searchBtn.style.background = "#4d72aa";
        exchangeBtn.style.background = "#4d72aa";
        favoriteBtn.style.background = "#4d72aa";
        app.style.backgroundSize = "cover"; // 调整背景图片大小
        app.style.backgroundPosition = "center"; // 调整背景图片位置
    } else {
        app.style.background = "url('https://images.unsplash.com/photo-1514969655361-1dbc3731d4cc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        searchBtn.style.background = "#1b1b1b";
        exchangeBtn.style.background = "#1b1b1b";
        favoriteBtn.style.background = "#1b1b1b";
        app.style.backgroundSize = "cover"; // 调整背景图片大小
        app.style.backgroundPosition = "center"; // 调整背景图片位置
    }
}
    app.style.opacity = "1";
    addListItem(cityname);

}

checkWeather("taipei"); //default

const TWDBox = document.getElementById("TWDvalue");
const TWDBtn = document.getElementById("exchange");
var pressed = false;
document.getElementById("show").style.display = "none";
const searchHistory = document.getElementById("cities");
const maxItems = 4;
const cityItems = document.querySelectorAll('#cities li');

function getExchangedValue(dollars) {
    document.getElementById("TWD").innerHTML = dollars;
    document.getElementById("ExchangedValue").innerHTML = Math.round(dollars / exchangeRate);
    document.getElementById("currency").innerHTML = currencyCode;
    pressed = true;
    if (pressed) document.getElementById("show").style.display = "block";
}

function addListItem(item) {
    let check = true;

    for (let i = 0; i < searchHistory.children.length; i++) {
        let city = searchHistory.children[i];
        if (city.textContent === item) {
            check = false;
            break; // Exit the loop early if item is found
        }
    }

    if (check) {
        const newItem = document.createElement('li');

        newItem.textContent = item;

        newItem.style.listStyle = 'none';
        newItem.setAttribute('id', 'city_name');
        //newItem.setAttribute('onclick', 'selectInput(this)');

        
        // Set styles for hover effect directly
        newItem.style.transition = 'color 0.3s ease'; // Optional: Add transition for smooth effect

        // Add event listeners for hover effect
        newItem.addEventListener('mouseover', function () {
            this.style.color = '#fff'; // Change text color to white on hover
        });

        newItem.addEventListener('mouseout', function () {
            this.style.color = ''; // Revert text color on mouse out
        });

        searchHistory.appendChild(newItem);


        if (searchHistory.children.length > maxItems) {
            searchHistory.removeChild(searchHistory.firstElementChild);
        }

        newItem.addEventListener('click', function() {
            //addListItem(cityname)
            checkWeather(this.innerHTML);
            pressed = false;
            if (!pressed) document.getElementById("show").style.display = "none";
        });
    }



}
const favoriteBtn = document.getElementById("favoriteBtn");
const favoritesTable = document.getElementById("favoritesTable").getElementsByTagName('tbody')[0];

// 檢查地點是否已經存在於表格中
function isCityInTable(city) {
    let rows = favoritesTable.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].getElementsByTagName('td')[0].textContent === city) {
            return true;
        }
    }
    return false;
}

// 新增收藏地點至表格
function addFavorite(city, temp, time, rate) {
    if (!isCityInTable(city)) {
        let newRow = favoritesTable.insertRow();

        let cityCell = newRow.insertCell(0);
        let tempCell = newRow.insertCell(1);
        let timeCell = newRow.insertCell(2);
        let rateCell = newRow.insertCell(3);

        cityCell.textContent = city;
        tempCell.textContent = temp;
        timeCell.textContent = time;
        rateCell.textContent = rate;
    } else {
        alert("This city is already in the favorites.");
    }
}

favoriteBtn.addEventListener("click", () => {
    let city = document.getElementById("name").textContent;
    let temp = document.getElementById("temp").textContent;
    let time = document.getElementById("time").textContent;
    let rate = document.getElementById("exchangeRate").textContent;

    addFavorite(city, temp, time, rate);
});



searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    var city = searchBox.value.trim();
    pressed = false;
    console.log(cityItems);
    if (!pressed) document.getElementById("show").style.display = "none";
    if (city !== "") {
        checkWeather(city);
        addListItem(cityname);
        searchBox.value = ""; // 清空输入框
    } else {
        alert("Please enter a city name");
    }


})

TWDBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const dollars = parseInt(TWDBox.value.trim());
    if (dollars > 0) {
        getExchangedValue(dollars);
    }
    else {
        alert("Please enter an amount of money");
    }
}
)
TWDBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        TWDBtn.click();
    }
});




