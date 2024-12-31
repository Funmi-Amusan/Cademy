import { useDateStore } from "../../store";
import { getWeekDays } from "../../utils";

function WeekView() {
  const { userSelectedDate } = useDateStore();
  const days = getWeekDays(userSelectedDate);
  const hours = [
    "12:00 AM",
    "1:00 AM",
    "2:00 AM",
    "3:00 AM",
    "4:00 AM",
    "5:00 AM",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
  ];
  return (
    <>
    <aside className=" w-1/12">
    <div className=" border-l pt-5 border-gray-300">
          { hours.map((hour, index) => (
            <div key={index} className="h-10 flex  text-[8px] border-b border-gray-300">
             {hour}
            </div>
          ))}
        </div>
    </aside>
    <div className="grid grid-cols-7 w-11/12">
    {days.map((day, index) => (
      <div key={index}>
        <div className=" h-10 text-center items-center flex flex-col gap-2">
        <p className="text-sm font-light uppercase">
        {day.currentDate.toLocaleDateString('en-NG', {weekday: 'short'})}
        </p>
         <p className=" text-xl">
         {day.currentDate.toLocaleDateString('en-NG', {day: 'numeric'})}
         </p>
        </div>
        <div className=" border-l border-gray-300">
          { hours.map((hour, index) => (
            <div key={index} className="h-10 flex items-center justify-center border-b border-gray-300">
             
            </div>
          ))}
        </div>
         </div>
    ))}
    </div>
    </>
  )
}

export default WeekView