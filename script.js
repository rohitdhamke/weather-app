async function getWeather() {
    
    const cityinput = document.getElementById("cityinput")
    const result = document.getElementById("result")
    const city = cityinput.value.trim();

    if(!city){
        result.innerHTML = "<p> enter the city name </P>";
        alert("name required!");
        return;
    }

    try{
        const response = await fetch (`http://localhost:3000/${city}`);
        const data = await response.json();
        if(data.error){
            result.innerHTML = ` <p>${data.error}</P> `;
            return
        }
        result.innerHTML=`<h3> ${data.name},
        ${data.country}</h3>
        <p>main:${data.weather.main}</p>
        <p>temp:${data.weather.temp}</p>
        <p>humidity:${data.weather.humidity}</p>
        <p>wind speed:${data.weather.wind_speed}</p>`
    }
    catch(error){
        result.innerHTML = `<p> fail to fetch data </p>`
    }
}