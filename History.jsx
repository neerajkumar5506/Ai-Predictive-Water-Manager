

import "./History.css";
const data = [
  { date: "9/11/2026", time: "9:22:27 AM", moisture: 57, temp: 35, humidity: 59, pump: "ON", water: "6L" },
  { date: "9/11/2026", time: "9:22:27 AM", moisture: 57, temp: 35, humidity: 59, pump: "ON", water: "3L" },
  { date: "9/11/2026", time: "9:23:02 AM", moisture: 58, temp: 35, humidity: 72, pump: "ON", water: "11L" },
  { date: "9/11/2026", time: "9:23:02 AM", moisture: 58, temp: 35, humidity: 72, pump: "ON", water: "1L" },
  { date: "9/11/2026", time: "9:23:32 AM", moisture: 49, temp: 33, humidity: 50, pump: "ON", water: "4L" },
  { date: "9/11/2026", time: "9:23:37 AM", moisture: 78, temp: 31, humidity: 65, pump: "ON", water: "8L" },
  { date: "9/11/2026", time: "9:24:11 AM", moisture: 51, temp: 29, humidity: 71, pump: "ON", water: "13L" },
  
  
];

export default function History() {
  return (
    <div className="history-page">
      <h1 className="history-title">💧 Watering History</h1>
      
      <div className="history-card">
        <h2 className="history-subtitle">📊 Recent Watering Activity</h2>
        <div className="table-wrapper">
          <table className="history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Moisture</th>
                <th>Temperature</th>
                <th>Humidity</th>
                <th>Pump Status</th>
                <th>Water Used</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  <td>{row.date}</td>
                  <td>{row.time}</td>
                  <td>{row.moisture}</td>
                  <td>{row.temp}</td>
                  <td>{row.humidity}</td>
                  <td>{row.pump}</td>
                  <td>{row.water}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  );
}