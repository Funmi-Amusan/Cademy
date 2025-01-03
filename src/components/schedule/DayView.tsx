import { useDateStore } from "../../store";
import { getHours } from "../../utils"

function DayView() {
const { userSelectedDate } = useDateStore();
  console.log("day", userSelectedDate)
  return (
<>
<div className=" flex flex-col w-full">

<div className="grid grid-cols-[auto_1fr] w-full items-end h-20 py-3">
<div className=" w-16 text-end flex ">
<p className="text-xs font-light">
  {`GMT${
    getHours[0].getTimezoneOffset() <= 0 
      ? '+' 
      : '-'
  }${String(Math.abs(getHours[0].getTimezoneOffset() / 60)).padStart(2, '0')}`}
</p>
</div>
<div className="px-4">
  <p className=" font-light"> {
    userSelectedDate.toLocaleString('en-NG', {weekday: 'short'})}</p>
      <p className=" font-normal text-xl"> {
    userSelectedDate.toLocaleString('en-NG', {day: '2-digit'})}</p>
</div>
</div>
<div className="grid grid-cols-[auto_1fr] w-full h-[70vh] overflow-scroll ">
    <div className="w-16 border-r border-gray-300">
        {getHours.map((hour, index) => (
            <div key={index} className={`flex items-start text-[8px] border-t border-gray-300 h-10`}>
                <p className="uppercase">{hour.toLocaleString('en-NG', { hour: 'numeric', hour12: true })}</p>
            </div>
        ))}
    </div>

    <div className="">
        {getHours.map((hour, index) => (
            <div key={index} className="h-10 flex items-center justify-center border-t border-gray-300">
            </div>
        ))}
    </div>
</div>
</div>

</>  
  )
}

export default DayView