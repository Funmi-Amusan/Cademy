import { useEffect, useState } from "react";
import { useDateStore } from "../../store";
import { getHours, getWeekDays } from "../../utils";

function WeekView() {

  const { userSelectedDate } = useDateStore();
  const days = getWeekDays(userSelectedDate);
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); 
    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <div className="grid grid-cols-8 w-full">
    <div className="w-12 border-gray-300">
    {getHours.map((hour, index) => (
        <div key={index} className={`flex items-end text-[8px] border-b border-gray-300 ${index === 0 ? 'h-20' : 'h-10'}`}>
            <p className=" uppercase">{hour.toLocaleString('en-NG', { hour: 'numeric', hour12: true })}</p>
        </div>
    ))}
</div>

    {days.map((day, index) => (
      <div key={index}>
        <div className=" h-10 text-center items-center flex flex-col gap-2">
        <p className="text-sm font-light uppercase">
        {day.currentDate.toLocaleDateString('en-NG', {weekday: 'short'})}
        </p>
         <button className={` text-xl hover:bg-slate-200 p-2 rounded-full aspect-square ${day.today && 'bg-emerald-600'}`}  >
         {day.currentDate.toLocaleDateString('en-NG', {day: 'numeric'})}
         </button>
        </div>
        <div className=" border-l border-gray-300">
          { getHours.map((hour, index) => (
            <div key={index} className="h-10 flex items-center justify-center border-b border-gray-300">
             
            </div>
          ))}
          {day.today && (
                    <div
                      className={`absolute h-0.5 !w-14 bg-red-500`}
                      style={{
                        top: `${(currentTime.getHours() / 24) * 100}%`,
                      }}
                    />
                  )}
        </div>
         </div>
    ))}
    </div>
    </>
  )
}

export default WeekView