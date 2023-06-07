import React, { useState } from "react";

import ButtonsGrid from "./components/ButtonsGrid";

import "./App.css";

function App() {
  const [finalResult, setFinalResult] = useState("");

  return (
    <div id="mainContent">
      <ButtonsGrid didSomeoneWin={!!finalResult} onWinning={setFinalResult} />
      <h3>{finalResult}</h3>
    </div>
  );
}

export default App;
