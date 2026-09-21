import { useState } from "react";
import "./App.css";
import Navebar from "./component/Navebar";
import HeroSection from "./component/HeroSection";
import Featurs from "./component/Featurs";
import Dashboard from "./component/Dashboard";
import History from "./component/History";
import About from "./component/About";
import Contact from "./component/Contact";

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <Navebar setPage={setPage} />
      <div>
        {page === 'home' && <HeroSection />}
        {page === 'features' && <Featurs />}
        {page === 'dashboard' && <Dashboard />}
        {page === 'history' && <History />}
        {page === 'about' && <About />}
        {page === 'contact' && <Contact />}
      </div>
    </>
  );
}

export default App;