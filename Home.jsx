
import "./home.css";

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-content">

        <h1>Automatic Plant Watering System</h1>

        <p>
          An intelligent irrigation solution designed to maintain optimal
          soil health. This system leverages real-time sensor data to
          automate hydration, ensuring your plants thrive while
          minimizing water waste and manual effort.
        </p>

        <button
          className="dashboard-btn"
          onClick={() => (window.location.href = "/dashboard")}
        >
          Go to Dashboard
        </button>

      </div>
    </section>
  );
}

export default Home;