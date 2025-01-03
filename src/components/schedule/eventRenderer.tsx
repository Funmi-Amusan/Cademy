import { useEventStore } from "../../store";
import { CalenderEventType } from "../../store"

type EventRendererProps = {
  date: Date;
  view: "month" | "week" | "day";
  events: CalenderEventType[];
};

export function EventRenderer({ date, view, events }: EventRendererProps) {
  const { openEventSummary } = useEventStore();

  const filteredEvents = events.filter((event: CalenderEventType) => {
    if (view === "month") {
      return event.date.toLocaleDateString('en-NG', {year: 'numeric', month: 'long', day: '2-digit'}) === date.toLocaleDateString('en-NG', {year: 'numeric', month: 'long', day: '2-digit'});
    } else if (view === "week" || view === "day") {
      return event.date.toLocaleDateString('en-NG', {year: 'numeric', month: 'long', day: '2-digit', hour: 'numeric'})  === date.toLocaleDateString('en-NG', {year: 'numeric', month: 'long', day: '2-digit', hour: 'numeric'}) ;
    }
  });

  return (
    <>
      {filteredEvents.map((event) => (
        <div
          key={event.id}
          onClick={(e) => {
            e.stopPropagation();
            openEventSummary(event);
          }}
          className="line-clamp-1 w-[90%] cursor-pointer rounded-sm bg-green-700 p-1 text-sm text-white"
        >
          {event.title}
        </div>
      ))}
    </>
  );
}