import React from "react";
import ScheduleHeader from "./Header";
import Sidebar from "./sidebar/Sidebar";
import Monthview from "./Month";
import { useDateStore, useEventStore, useViewStore } from "../../store";
import WeekView from "./WeekView";
import DayView from "./DayView";
import EventPopover from "./eventPopover";
import { EventSummaryPopover } from "./event-summary-popover";


function ScheduleIndex () {
  const { selectedView } = useViewStore();
  const { userSelectedDate } = useDateStore();
  const { isPopoverOpen, closePopover, isEventSummaryOpen, closeEventSummary, selectedEvent, } = useEventStore();


  return (
    <React.Fragment>

      <div className="h-screen flex flex-col">
        <ScheduleHeader />
        <div className="flex flex-1">
        <Sidebar />
        {selectedView === 'month' ?  <Monthview /> : selectedView === 'week' ? <WeekView /> : <DayView /> }
        </div>
        { isPopoverOpen && (
          <EventPopover isOpen={isPopoverOpen} onClose={closePopover} date={userSelectedDate.toLocaleDateString('en-NG', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })} />
        )}
            {isEventSummaryOpen && selectedEvent && (
        <EventSummaryPopover
          isOpen={isEventSummaryOpen}
          onClose={closeEventSummary}
          event={selectedEvent}
        />
      )}
      </div>
    </React.Fragment>
  );
}

export default ScheduleIndex ;