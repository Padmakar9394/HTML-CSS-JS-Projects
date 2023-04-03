console.log("Hello World!");

function currWeather() {
    let response = fetch("http://api.weatherapi.com/v1/current.json?key=570613fb414b4414995215457231703&q=Mumbai&aqi=no").then(res => {
        return res.json();
    }).then(function(res) {
    console.log(res.coord);
    });
}

console.log(currWeather());