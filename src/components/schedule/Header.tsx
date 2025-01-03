import React, { useState } from "react";
import { addDays, addWeeks } from "date-fns";
import { SelectButton } from 'primereact/selectbutton';
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useDateStore, useViewStore } from "../../store";
import { subDays, subWeeks } from 'date-fns';

export default function ScheduleHeader() {
  const { setViewType, selectedView} = useViewStore();
  const { selectedMonthIndex, setDate, setMonth, userSelectedDate } = useDateStore();
  const [value, setValue] = useState('left');


  function handlePrevDate() {
    switch (selectedView) {
      case 'month':
        setMonth(selectedMonthIndex - 1);
        break;
      case 'week':
        setDate(subWeeks(userSelectedDate, 1));
        break;
      case 'day':
        setDate(subDays(userSelectedDate, 1));
        break;
      default:
        break;
    }
  }
  

  function handleNextDate() {
    switch (selectedView) {
      case 'month':
        setMonth(selectedMonthIndex + 1);
        break;
      case 'week':
        setDate(addWeeks(userSelectedDate, 1));
        break;
      case 'day':
        setDate(addDays(userSelectedDate, 1));
        break;
      default:
        break;
    }
  }

  function handleReset() {
    const currentMonth = new Date().getMonth();
    switch (selectedView) {
      case 'month':
        setMonth(currentMonth);
        break;
      case 'week':
        setDate(new Date());
        break;
      case 'day':
        setDate(new Date());
        setMonth(currentMonth);
        break;
      default:
        break;
    }
    
  }

  const viewOptions = [
    { value: 'day'},
    {value: 'week'},
    { value: 'month'}
];


const justifyTemplate = (option: { value: string | undefined; }) => {
  return <p className=" capitalize ">{option.value}</p>
}

  return (
    <header className="px-4 py-2 flex justify-between items-center">
      <div className="flex items-center gap-2">
      <h2 className="w-1/2 text-lg text-gray-500 font-semibold ">
        {userSelectedDate.toLocaleDateString('en-NG', {month: 'long', year : 'numeric'})}
      </h2>
      <div className=" flex items-center">
      <button onClick={handlePrevDate}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
         <IoChevronBackOutline  />
        </span>
      </button>
      <button onClick={handleNextDate}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          <IoChevronForwardOutline />
        </span>
      </button>
      </div>
      <button
        onClick={handleReset}
        className="border rounded py-2 px-4 mr-5 hover:bg-stone-500"
      >
        Today
      </button>
      </div>

      <div className="">
          <SelectButton className="text-sm" value={value} options={viewOptions} itemTemplate={justifyTemplate} optionLabel="value" onChange={(e) => {
            setValue(e.value)
            setViewType(e.value)
          }} />
      </div>
   
    </header>
  );
}