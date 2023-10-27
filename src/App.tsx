import React from "react";

import "./App.css";
import Application from "./components/application/Application";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Skills skills={["React", "HTML"]} />
      <Application />
    </>
  );
}

export default App;
