import React, { useState, useEffect } from "react";
import ScheduleHeader from "./Header";
import { getMonth } from "../../utils";
import Sidebar from "./sidebar/Sidebar";
import Monthview from "./Month";
function ScheduleIndex () {
  const [currenMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(1));
  }, []);

  return (
    <React.Fragment>

      <div className="h-screen flex flex-col">
        <ScheduleHeader />
        <div className="flex flex-1">
        <Sidebar />
        <Monthview />
        </div>
      </div>
    </React.Fragment>
  );
}

export default ScheduleIndex ;