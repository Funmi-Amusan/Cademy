import { GoClock, GoDotFill } from "react-icons/go";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
function UpcomingClasses() {

  
  return (
    <div className='flex flex-col items-center gap-2 bg-zinc-200 p-4 rounded-lg w-full'>
 <h1>Upcoming Events</h1>

 <div className="  w-full flex flex-col gap-4">
    <div className=" bg-white p-4 rounded-xl">
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <GoDotFill />
            <p>12:30pm - 2:00pm</p>   
        </div>
        <PiDotsThreeVerticalBold />

    </div>
    <div className="flex items-center justify-between">

    <h2>Fundamentals of Physics</h2>
    <p className=" px-4 py-1 bg-teal-100 text-teal-700 font-bold rounded-md">Lecture</p>
    </div>
    <div className=" flex items-center gap-2">
    <GoClock />
    <p>90 mins</p>
    </div>
    </div>

    <div className=" bg-white p-4 rounded-xl">
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <GoDotFill />
            <p>3:30pm - 5:00pm</p>   
        </div>
        <PiDotsThreeVerticalBold />

    </div>
    <div className="flex items-center justify-between">

    <h2>Practicals of Physics</h2>
    <p className=" px-2 py-1 bg-rose-400 rounded-sm">Practical</p>
    </div>
    <div className=" flex items-center gap-2">
    <GoClock />
    <p>90 mins</p>
    </div>
    </div>
 </div>
    </div>
  )
}

export default UpcomingClasses 