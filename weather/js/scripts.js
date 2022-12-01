/*fetch ("testdata.json")
.then((mydata) => mydata.json())
.then((mydata) => {
    console.log(mydata);
    console.log(mydata.url);

    document.getElementById("weather").innerHTML = mydata.name;

    let sample = document.createElement("h1");
    sample.textContent = mydata.name;
    document.getElementById("weather").appendChild(sample);
}); //end

*/




/*const iconcode = weatherInfo.list[0].weather[0].icon;
console.log(iconcode);

const icon_path = "//openweathermap.org/img/w/"+ iconcode +".png";
console.log(icon_path);
document.getElementById('weather_icon').src = icon_path;*/


const d = new Date();
const todayDayNumber = d.getDay();

let forecastDayNumber = todayDayNumber + 1;

console.log(forecastDayNumber);

const myweekday = new Array(7);
myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";

const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5784154&appid=8f22107bf012b2ef3bc0e17f0e059c72&units=imperial";
fetch (apiURL)
.then((response) => response.json())
.then((weatherInfo) => {
console.log(weatherInfo)

document.getElementById('place').innerHTML=weatherInfo.city.name;


let mylist = weatherInfo.list;
for (i=0; i < mylist.length; i++) {
    var time = mylist[i].dt_txt;
    if (time.includes('21:00:00')) {
        let theDayName = document.createElement("h3");
        theDayName.textContent = myweekday[forecastDayNumber];
        console.log(">"+ myweekday[forecastDayNumber]);

        let theTemp = document.createElement("p");
        theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

        let iconcode = weatherInfo.list[0].weather[0].icon;
let icon_path = "//openweathermap.org/img/w/"+ iconcode +".png";


let theIcon = document.createElement("img");
theIcon.src=icon_path;

let theDay = document.createElement("div");
theDay.className = "dayBox";
theDay.appendChild(theDayName);
theDay.appendChild(theTemp);
theDay.appendChild(theIcon);

document.getElementById('weatherforecast').appendChild(theDay);

        forecastDayNumber += 1;
        if (forecastDayNumber === 7) {
            forecastDayNumber = 0;
        }

    } // end if
}//end for
});