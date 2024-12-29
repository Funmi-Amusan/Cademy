import React, { useState } from 'react'
import { Calendar } from 'primereact/calendar';

function SidebarCalendar() {
    const [date14, setDate14] = useState<Date | null>(null);
  return (
    <div>
         <Calendar value={date14} onChange={(e) => setDate14(e.value as Date)} inline showWeek />
    </div>
  )
}

export default SidebarCalendar