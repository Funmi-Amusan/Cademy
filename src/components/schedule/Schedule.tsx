import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import ScheduleHeader from "./Header";
import { getMonth } from "../../utils";
function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(1));
  }, [currenMonth]);

  return (
    <React.Fragment>

      <div className="h-screen flex flex-col">
        <ScheduleHeader />
        <div className="flex flex-1">
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;