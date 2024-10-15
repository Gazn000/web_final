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

const apiKey = "07cc5c268b4241faa5985244241706";
const apiUrl = "http://api.weatherapi.com/v1/forecast.json?q=";

const searchBox = document.getElementById("search");
const searchBtn = document.getElementById("submit");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&key=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.getElementById("name").innerHTML = data.location.name;
    document.getElementById("temp").innerHTML = Math.round(data.current.temp_c);
    document.getElementById("humidity").innerHTML = data.current.humidity;
    document.getElementById("cloud").innerHTML = data.current.cloud;
    document.getElementById("condition").innerHTML = data.current.condition.text;

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
        app.style.backgroundSize = "cover"; // 调整背景图片大小
        app.style.backgroundPosition = "center"; // 调整背景图片位置
    }
    //clear
    else if (code == 1000 && timeOfDay == "night") {
        app.style.backgroundImage = "url('https://images.unsplash.com/photo-1471032432678-03409d91e045?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
        searchBtn.style.background = "#181e27";
        app.style.backgroundSize = "cover"; // 调整背景图片大小
        app.style.backgroundPosition = "center"; // 调整背景图片位置
    }
    //cloudy
    else if (
        code == 1003 ||
        code == 1006 ||
        code == 1009 ||
        code == 1030 ||
        code == 1063 ||
        code == 1066 ||
        code == 1069 ||
        code == 1072 ||
        code == 1087 ||
        code == 1135 ||
        code == 1147 ||
        code == 1150
    ) {
        if (timeOfDay == "day") {
            app.style.background = "url('https://images.unsplash.com/photo-1483702721041-b23de737a886?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            searchBtn.style.background = "#fa6d1b";
            app.style.backgroundSize = "cover"; // 调整背景图片大小
            app.style.backgroundPosition = "center"; // 调整背景图片位置
        }
        else {
            app.style.background = "url('https://images.unsplash.com/photo-1486896427952-71586fb5976a?q=80&w=2638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            searchBtn.style.background = "#181e27";
            app.style.backgroundSize = "cover"; // 调整背景图片大小
            app.style.backgroundPosition = "center"; // 调整背景图片位置
        }
    }
    //small rain
    else if (
        code == 1153 ||
        code == 1168 ||
        code == 1180 ||
        code == 1183 ||
        code == 1186 ||
        code == 1189 ||
        code == 1198 ||
        code == 1240
    ) {
        if (timeOfDay == "day") {
            app.style.background = "url('https://images.unsplash.com/photo-1501691223387-dd0500403074?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            searchBtn.style.background = "#647d75";
            app.style.backgroundSize = "cover"; // 调整背景图片大小
            app.style.backgroundPosition = "center"; // 调整背景图片位置
        }
        else {
            app.style.background = "url('https://images.unsplash.com/photo-1548232979-6c557ee14752?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            searchBtn.style.background = "#325c80";
            app.style.backgroundSize = "cover"; // 调整背景图片大小
            app.style.backgroundPosition = "center"; // 调整背景图片位置
        }
    }

    //heavy rain
    else if (
        code == 1171 ||
        code == 1192 ||
        code == 1195 ||
        code == 1243 ||
        code == 1246 ||
        code == 1273 ||
        code == 1276
    ) {
        if (timeOfDay == "day") {
            app.style.background = "url('https://images.unsplash.com/photo-1501297875943-27f3803b4956?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            searchBtn.style.background = "#647d75";
            app.style.backgroundSize = "cover"; // 调整背景图片大小
            app.style.backgroundPosition = "center"; // 调整背景图片位置
        }
        else {
            app.style.background = "url('https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            searchBtn.style.background = "#325c80";
            app.style.backgroundSize = "cover"; // 调整背景图片大小
            app.style.backgroundPosition = "center"; // 调整背景图片位置
        }
    }

    //light snow
    else if (
        code == 1114 ||
        code == 1204 ||
        code == 1210 ||
        code == 1213 ||
        code == 1237 ||
        code == 1249 ||
        code == 1255 ||
        code == 1261 ||
        code == 1279
    ) {
        if (timeOfDay == "day") {
            app.style.background = "url('https://images.unsplash.com/photo-1566415282796-4b95d3d3acaf?q=80&w=2703&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            searchBtn.style.background = "#4d72aa";
            app.style.backgroundSize = "cover"; // 调整背景图片大小
            app.style.backgroundPosition = "center"; // 调整背景图片位置
        }
        else {
            app.style.background = "url('https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            searchBtn.style.background = "#1b1b1b";
            app.style.backgroundSize = "cover"; // 调整背景图片大小
            app.style.backgroundPosition = "center"; // 调整背景图片位置
        }
    }

    //heavy snow
    else if (
        code == 1117 ||
        code == 1207 ||
        code == 1216 ||
        code == 1219 ||
        code == 1222 ||
        code == 1225 ||
        code == 1252 ||
        code == 1258 ||
        code == 1264 ||
        code == 1282
    ) {
        if (timeOfDay == "day") {
            app.style.background = "url('https://images.unsplash.com/photo-1461407665364-25b173b7ffe2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            searchBtn.style.background = "#4d72aa";
            app.style.backgroundSize = "cover"; // 调整背景图片大小
            app.style.backgroundPosition = "center"; // 调整背景图片位置
        }
        else {
            app.style.background = "url('https://images.unsplash.com/photo-1514969655361-1dbc3731d4cc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
            searchBtn.style.background = "#1b1b1b";
            app.style.backgroundSize = "cover"; // 调整背景图片大小
            app.style.backgroundPosition = "center"; // 调整背景图片位置
        }
    }
    app.style.opacity = "1";

}

checkWeather("taipei"); //default

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const city = searchBox.value.trim();
    if (city !== "") {
        checkWeather(city);
        searchBox.value = ""; // 清空输入框
    } else {
        alert("Please enter a city name");
    }
})
