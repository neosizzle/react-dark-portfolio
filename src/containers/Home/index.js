import "./App.css";
import { useState } from "react";

import Mode from "../../components/Mode/Mode";
import Header from "../../components/Header/Header";
import { About } from "../../components/About/About";
import { Bio } from "../../components/Bio/Bio";
import { Footer } from "../../components/Footer/Footer";
import Project from "../../components/Project/Project";

function Home() {
  const [whiteMode, setQuietMode] = useState(true);

  const handleModeChange = () => {
    setQuietMode(!whiteMode);
  };

  return (
    <div className={whiteMode ? "white-mode" : "dark-mode"}>
      <Mode handleModeChange={handleModeChange} />
      <Header />
      <About whiteMode={whiteMode}/>
      <Bio />
      <Project whiteMode={whiteMode}/>
      <Footer />
    </div>
  );
}

export default Home;
