import React, { useState } from "react";
import { format, getYear, setMonth } from "date-fns";
import { SelectButton } from 'primereact/selectbutton';
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function ScheduleHeader() {
  const [monthIndex, setMonthIndex] = useState(new Date().getMonth());
  const [value, setValue] = useState('left');

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    const currentMonth = new Date().getMonth();
    setMonthIndex(
      monthIndex === currentMonth
        ? monthIndex + Math.random()
        : currentMonth
    );
  }

  const justifyOptions = [
    { value: 'Day'},
    {value: 'Week'},
    { value: 'Month'}
];


const justifyTemplate = (option: { value: string | undefined; }) => {
  return <p>{option.value}</p>
}

  return (
    <header className="px-4 py-2 flex justify-between items-center">
      <div className="flex items-center gap-2">
      <h2 className="w-1/2 text-lg text-gray-500 font-semibold ">
        {format(setMonth(new Date(getYear(new Date()), monthIndex), monthIndex), 'MMMM yyyy')}
      </h2>
      <div className=" flex items-center">
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
         <IoChevronBackOutline  />
        </span>
      </button>
      <button onClick={handleNextMonth}>
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
      <SelectButton className=" text-sm " value={value} options={justifyOptions} onChange={(e) => setValue(e.value)} itemTemplate={justifyTemplate} optionLabel="value" />
      </div>
   
    </header>
  );
}