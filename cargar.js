var fetchadata = position =>{
    var {lantitudes , longitudes } = position , coords;
   window.addEventListener('load', () => {
    navigator.geolocation.position;
    navigator.geolocation.getCurrentPosition(position);
   });
  if(navigator.geolocation.position)
    navigator.geolocation.getCurrentPosition(position)
    var latitudes = "latitudes";
    var longitudes = "longitudes";
    
    lon = position.coords.longitude;
    lat = position.coords.latitude;
    
    }



       
        
fetch ('https://api.openweathermap.org/data/2.5/weather?q=Shibuya&lang=es&units=metric&appid=6cabf5d4dc040a26e49b9159ca2b9aed')       

     
.then(Resp => { return Resp.json()})
.then(data => setweatherdata(data))


var setweatherdata = data => {
    console.log(data)

    var weatherdata = {
        location: data.name,
        description: data.weather[0].description,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: data.main.temp_max,
        clouds: data.clouds.all,
        wind: data.wind.speed,
        sunrise: data.sys.sunrise,  
        sunset: data.sys.sunset, 
        
        
    }
    
    Object.keys(weatherdata).forEach(key => {
        document.getElementById(key).textContent = weatherdata[key]; 
    });

}


var timestamp = (1706478249)*1000;
console.log(timestamp);

var timetamp = (1706515435)*1000;
console.log(timetamp);

var fecha = new Date(timestamp)
console.log(fecha);


var fechas = new Date(timetamp)
console.log(fechas);

        var onload = () => {
            navigator.geolocation.getCurrentPosition(fetchadata);
        }
        
