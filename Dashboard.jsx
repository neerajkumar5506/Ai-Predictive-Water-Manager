import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "./Dashboard.css";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const [pumpOn, setPumpOn] = useState(false);
  const [weather, setWeather] = useState({ temp: 28, wind: 10, text: "Rainy" });
  const [history, setHistory] = useState([
   
  ]);
  const [chart, setChart] = useState({
    labels: ["","","","","","","","","",""],
    moisture: [62,48,65,55,52,58,78,72,55,68],
    temp: [30,33,32,34,35,38,36,34,38,34],
    humidity: [58,68,70,52,70,68,65,75,70,62],
  });

  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date().toLocaleTimeString();
      setChart(p => ({
        labels: [...p.labels.slice(1), now],
        moisture: [...p.moisture.slice(1), 20 + Math.random()*60],
        temp: [...p.temp.slice(1), 20 + Math.random()*20],
        humidity: [...p.humidity.slice(1), 40 + Math.random()*40],
      }));
    }, 500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=26.8467&longitude=80.9462&current=temperature_2m,wind_speed_10m,weather_code")
   .then(r=>r.json()).then(d=>{
      if(d.current) setWeather({ temp: Math.round(d.current.temperature_2m), wind: Math.round(d.current.wind_speed_10m), text: d.current.weather_code > 50? "Rainy" : d.current.weather_code < 3? "Sun" : "Cloudy" })
    }).catch(()=>{});
  }, []);

 const handleWater = () => {
  const lastMoisture = chart.moisture[chart.moisture.length - 1];
  const lastTemp = chart.temp[chart.temp.length - 1];
  const lastHumidity = chart.humidity[chart.humidity.length - 1];

  // ML ka simple rule - Moisture < 40% to paani chahiye
  const mlPrediction = lastMoisture < 40 ? "Pump On" : "Pump Off";
  const rainProbability = weather.text === "Rainy" ? "80%" : "20%";
  const finalDecision = (mlPrediction === "Run" && rainProbability === "20%") ? "Run" : "Delay";

  const newEntry = {
    time: new Date().toLocaleTimeString(),
    duration: "30 sec",
    soilMoisture: lastMoisture.toFixed(0) + "%",
    temperature: lastTemp.toFixed(0) + "°C",
    airHumidity: lastHumidity.toFixed(0) + "%",
    mlPrediction: mlPrediction, // <-- Ye add hua
    rainProbability: rainProbability,
    finalDecision: finalDecision
  };
  

  setHistory([newEntry, ...history]);
  setPumpOn(!pumpOn);
}

  const data = {
    labels: chart.labels,
    datasets: [
      { label: "Moisture", data: chart.moisture, borderColor: "rgb(72, 156, 76)", borderWidth:4, tension:0.4, pointRadius:4, pointHoverRadius:5 },
      { label: "Temperature", data: chart.temp, borderColor: "#e74c3c", borderWidth:4, tension:0.4, pointRadius:4, pointHoverRadius:5 },
      { label: "Humidity", data: chart.humidity, borderColor: "#f39c12", borderWidth:4, tension:0.4, pointRadius:4, pointHoverRadius:5 },
    ],
  };
  
  const options = { responsive: true, maintainAspectRatio: false, animation:{ x:{duration:1000,easing:`linear`}, y:{duration:1000,easing:`linear`} }, plugins:{legend:{position:`top`}}, scales:{y:{min:0,max:100},x:{grid:{display:false}}} };

  return (
    <div className="dash-page dashboard-scroll">
      <div className="top-row-3">
        <div className="card"><div className="c-icon">💧</div><div><div className="c-title">Moisture</div><div className="c-val">{Math.round(chart.moisture[9])}%</div></div></div>
        <div className="card"><div className="c-icon">🌡️</div><div><div className="c-title">Temprature</div><div className="c-val">{Math.round(chart.temp[9])}°C</div></div></div>
        <div className="card"><div className="c-icon">💨</div><div><div className="c-title">Humidity</div><div className="c-val">{Math.round(chart.humidity[9])}%</div></div></div>
      </div>

      <div className="middle-row">
       
        <div className="right-col">
          <div className="card weather-card">
            <div className="c-icon">🌧️</div>
            <div><div className="c-title">Rainy / Weather</div><div className="c-val">{weather.temp}°C {weather.text}</div><div className="c-small">Wind {weather.wind} km/h - Lucknow</div></div>
          </div>
          <div className="box pump-box">
            <div className="box-head">💧 Pump Control</div>
            <label className="toggle-switch" >
            <input type="checKbox"checked={pumpOn}onChange={handleWater}/>
            <span className="slider">
            <span className="silder-text">{pumpOn?`ON`:`OFF`}</span>
              </span>
            </label>
            
            <div className="pump-center">
              <div className={`pump-icon-circle ${pumpOn?'active zoom':""}`}style={{background:pumpOn?`#dcfce`:`#e0f2fe`,color:pumpOn?`#15803d`:`black`}}>🚰</div>
              <div className="pump-text">{pumpOn?'Pump is Running':'Pump is Stopped'}</div>
            </div>
            <button className={`btn-water ${pumpOn? 'red' : 'green'}`} onClick={handleWater}>{pumpOn? '🔴 Turn Pump OFF' : '💧 Turn Pump ON'}</button>
            <button className="btn-blue" onClick={()=>setPumpOn(false)}>Stop Now</button>
          </div>
        </div>

        <div className="box chart-box">
          <div className="box-head">📈 Chart</div>
          <div className="chart-wrap"><Line options={options} data={data} /></div>
        </div>
      </div>
      <div className="box history-box">
        <div className="box-head">📜 Water History</div>
        <table className="history-table">
          <thead><tr><th>Time</th><th>Soil Moisture</th><th>Temperature</th><th>Air Humidity</th><th>ML Prediction</th><th>Rain Probability</th><th>Final Decision</th></tr></thead>
  <tbody>{history.map((h,i)=><tr key={i}><td>{h.time}</td><td>{h.soilMoisture}</td><td>{h.temperature}</td><td>{h.airHumidity}</td><td>{h.mlPrediction}</td><td>{h.rainProbability}</td><td>{h.finalDecision}</td></tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}