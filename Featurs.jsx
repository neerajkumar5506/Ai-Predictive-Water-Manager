const Featurs = () => {
  return (
    <div className="features-section">
      <h2 className="features-title">Features</h2>

      <div className="features-grid">
        <div className="feature-card">
          <h3>Moisture Detection</h3>
          <p>The system continuously monitors soil moisture using sensors. It detects whether the soil is dry or wet and sends real-time data to the website for monitoring.</p>
        </div>

        <div className="feature-card">
          <h3>Automatic Pump</h3>
          <p>When the soil becomes dry, the system automatically turns ON the pump. If the soil has enough moisture, the pump turns OFF to save water.</p>
        </div>

        <div className="feature-card border-orange">
          <h3>Smart Dashboard</h3>
          <p>A user-friendly dashboard displays real-time data like moisture, temperature, and humidity with graphs and live updates.</p>
        </div>

        <div className="feature-card border-orange">
          <h3>Wi-Fi Connectivity</h3>
          <p>The system uses ESP8266 Wi-Fi module to send data to Firebase, allowing remote monitoring and control from anywhere.</p>
        </div>
      </div>
    </div>
  );
};

export default Featurs;