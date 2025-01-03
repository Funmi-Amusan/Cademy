import React, { useEffect, useRef, useState, useTransition } from 'react'
import { MdOutlineMenu, MdClose, MdOutlineCalendarMonth } from "react-icons/md";
import { LuClock4, LuUsers } from "react-icons/lu";
import AddTime from './addTime';


interface EventPopoverProps {
    isOpen: boolean;
    onClose: () => void;
    date: string;
}

function EventPopover({ isOpen, onClose, date}: EventPopoverProps) {

const popoverRef = useRef<HTMLDivElement>(null)
const [selectedTime, setSelectedTime] = useState("00:00");
const [error, setError] = useState<string | null>(null);
const [success, setSuccess] = useState<boolean | null>(null);
const [isPending, startTransition] = useTransition();

useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if ( popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
            onClose()
        } 
    };
    if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
        document.removeEventListener("mousedown", handleClickOutside)
    }
}, [isOpen, onClose])

const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose()
}
const handlePopoverClick = (e: React.MouseEvent) => {
    e.stopPropagation();
}

// async function onSubmit(formData: FormData) {
//     setError(null);
//     setSuccess(null);
//     startTransition(async () => {
//       try {
//         const result = await createEvent(formData);
//         if ("error" in result) {
//           setError(result.error);
//         } else if (result.success) {
//           setSuccess(result.success);
//           setTimeout(() => {
//             onClose();
//           }, 2000);
//         }
//       } catch {
//         setError("An unexpected error occurred. Please try again.");
//       }
//     });
//   }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClose}
    >
      <div
        ref={popoverRef}
        className="w-full max-w-md rounded-lg bg-white shadow-lg"
        onClick={handlePopoverClick}
      >
        <div className="mb-2 flex items-center justify-between rounded-md bg-slate-100 p-1">
          <MdOutlineMenu />
          <button
            // variant="ghost"
            // size="icon"
            // type="button"
            onClick={handleClose}
          >
            <MdClose className="h-4 w-4" />
          </button>
        </div>
        <form className="space-y-4 p-6" action={() => console.log("action")}>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              className="my-4 rounded-none border-0 border-b text-2xl focus-visible:border-b-2 focus-visible:border-b-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-100 text-blue-700 hover:bg-blue-100 hover:text-blue-700">
              Event
            </button>
            <button >
              Task
            </button>
            <button >
              Appointmet Schedule <sup className="bg-blue-500">new</sup>
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <LuClock4 className="size-5 text-gray-600" />
            <div className="flex items-center space-x-3 text-sm">
              <p>{new Date(date).toLocaleDateString()}</p>
              <AddTime onTimeSelect={setSelectedTime} />
              <input type="hidden" name="date" value={date} />
              <input type="hidden" name="time" value={selectedTime} />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <LuUsers className="size-5 text-slate-600" />
            <input
              type="text"
              name="guests"
              placeholder="Add guests"
              className={
                `w-full rounded-lg border-0 bg-slate-100 pl-7 placeholder:text-slate-600
                focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 `
              }
            />
          </div>

          <div className="flex items-center space-x-3">
            <MdOutlineMenu className="size-5 text-slate-600" />
            <input
              type="text"
              name="description"
              placeholder="Add description"
              className={`w-full rounded-lg border-0 bg-slate-100 pl-7 placeholder:text-slate-600
                focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0`
              }
            />
          </div>

          <div className="flex items-center space-x-3">
            <MdOutlineCalendarMonth className="size-5 text-slate-600" />
            <div className="">
              <div className="flex items-center space-x-1 text-xs">
                <span>Busy</span>
                <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                <span>Default visibility</span>{" "}
                <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                <span>Notify 30 minutes before</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <button type="submit" disabled={isPending}>
              {isPending ? "Saving..." : "Save"}
            </button>
          </div>

          {error && <p className="mt-2 px-6 text-red-500">{error}</p>}
          {success && <p className="mt-2 px-6 text-green-500">Success</p>}
        </form>
      </div>
    </div>
  )

}
export default EventPopover