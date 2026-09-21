
const HeroSection = () => {
  return(
  <div className="hero-section">
  <img src="/plant3.jpeg" 
  style={{ width: '100%', height: '99.65vh', objectFit: 'cover', }} alt="plant" className="hero-image"/>
  
   <div className="hero-overlay"></div>
   <div className="hero-content">
    <h1>Automatic Plant Watering System</h1>
    <div className="para-box"></div>
    <p className="line1">An intelligent irrigation solution designed to maintain optimal soil</p>
    <p className="line2">health.This system leverages real-time sensor data to automate</p>
    <p className="line3">hydration,ensuring your plants thrive while minimizing</p>
    <p className="line3">water waste and manual effort.</p>
    <p>
      <button>Go to Dashboard</button>
    </p>
   </div>
  </div>
  
  )
}
export default HeroSection;
