
import "./About.css";

export default function About() {
  return (
    
    <div className="about-page">
      <h1 className="about-main-title"> <span className="title-icon"></span> About Project</h1>

      <div className="about-grid">
        
        <div className="about-card border-green">
          <h2>Problem Statement</h2>
          <p>Traditional plant watering requires manual effort and may lead to overwatering or underwatering. This causes poor plant growth and water wastage.</p>
        </div>

        <div className="about-card border-blue">
          <h2>Project Objective</h2>
          <p>To build an automatic plant watering system using real-time sensor data to ensure plants get proper water while reducing human effort.</p>
        </div>

        <div className="about-card border-orange">
          <h2>Components Used</h2>
          <ul>
            <li>ESP8266 (NodeMCU)</li>
            <li>Soil Moisture Sensor</li>
            <li>DHT11 Sensor</li>
            <li>Rain Sensor</li>
            <li>Relay Module</li>
            <li>Water Pump</li>
            <li>Firebase</li>
            <li>Website</li>
          </ul>
        </div>

        <div className="about-card border-red">
          <h2>System Architecture</h2>
          <p>Sensors collect data → ESP8266 sends to Firebase → Website displays data → System controls pump automatically.</p>
        </div>

        <div className="about-card border-purple">
          <h2>Working</h2>
          <p>Soil moisture sensor checks soil condition, DHT11 measures temperature & humidity. If moisture is low and no rain detected, ESP8266 turns ON the water pump via relay. All data is stored in Firebase and shown live on the AutoPlant dashboard.</p>
        </div>

        <div className="about-card border-teal">
          <h2>Features</h2>
          <ul>
            <li>Real-time soil moisture monitoring</li>
            <li>Automatic & Manual watering modes</li>
            <li>Live temperature & humidity tracking</li>
            <li>Water usage history & graphs</li>
            <li>Mobile-friendly dashboard</li>
          </ul>
        </div>

      </div>
    </div>
  );
}