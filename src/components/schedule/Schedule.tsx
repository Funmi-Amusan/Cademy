import React from "react";
import ScheduleHeader from "./Header";
import Sidebar from "./sidebar/Sidebar";
import Monthview from "./Month";
import { useViewStore } from "../../store";
import WeekView from "./WeekView";
import DayView from "./DayView";


function ScheduleIndex () {
  const { selectedView } = useViewStore();


  return (
    <React.Fragment>

      <div className="h-screen flex flex-col">
        <ScheduleHeader />
        <div className="flex flex-1">
        <Sidebar />
        {selectedView === 'month' ?  <Monthview /> : selectedView === 'week' ? <WeekView /> : <DayView /> }
        </div>
      </div>
    </React.Fragment>
  );
}

export default ScheduleIndex ;