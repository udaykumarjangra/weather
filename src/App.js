import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
function App()
{
  const dateFun = (d) =>
  {
    let date = String(new window.Date());
    date = date.slice(3,15) + "," + date.slice(15,21);
    return date;
  }
  const convertDate = (d) =>
  {
    const a = new Date(d*1000);
    return String(a).slice(16,24);
  }
  const toHHMMSS = (a) => {
    var sec_num = parseInt(a, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}
  const API = //Your OpenWeather API ID;
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState('');
  const search = (press) =>
  {
    if(press.key==="Enter")
    {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API}`).then((r) => r.json()).then((result)=>{setCity(""); setWeather(result); setError(result.cod); console.log(error); console.log(result)});
    }
  };

  return(
    <div className = {typeof weather.main !='undefined' ? (weather.main.temp>18 ? "App-hot" : "App-cold") : "App"}>
     <div className ="search-container">
        <input type="text" placeholder="Enter City Name" className="search-bar" onChange={(e) => setCity(e.target.value)} value={city} onKeyPress={search} />
      </div>
      {error == "404"? (
      <div className="location-container">
        <div className="location">
          City Not Found
        </div>
      </div>
      ) : ("")
      }
      {typeof weather.main != "undefined" ? (

        <div className="location-container">
        <div className="date">
          {String(new Date(weather.dt*1000)).slice(0,15)}
          <br/>
          {String(new Date()).slice(15,24)}
        </div>
        <div className="location">
          {weather.name},{weather.sys.country} ({weather.coord.lon}, {weather.coord.lat})
        </div>
        
        <div className="weather-container">
            <div className="temperature">
              <p className="minmax">
              Feels Like: {Math.round(weather.main.feels_like)}
              </p>
              {Math.round(weather.main.temp)} C
              <p className="minmax mt-0">
              Humidity: {Math.round(weather.main.humidity)}
              </p>
              <br/>

              <p className="minmax mt-0">
                Sunrise: {convertDate(weather.sys.sunrise)}
                <br/>
                Sunset:  {convertDate(weather.sys.sunset)}
                <br/>
                Wind: {weather.wind.speed} m/s {weather.wind.deg} degree
                <br/>
                {console.log("Time ZONE"+weather.timezone +" "+toHHMMSS(weather.timezone))}
                Time Zone: {Math.sign(weather.timezone) == 1 ? "+" : "-"}{toHHMMSS(String(Math.abs(weather.timezone))).slice(0,5)} GMT
              </p>
            </div>
            <div className="weather">
              <img className="icon-small"src={'http://openweathermap.org/img/wn/'+weather.weather[0].icon+'@4x.png'}alt=""/>
              <br/>
              <p className="weather-main">{weather.weather[0].main}</p>
            </div>
        </div>
      </div>
      ) : ("")
      }
     
    </div>
  ); 
}

export default App;
