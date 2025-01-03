import { addDays, addHours, subHours } from 'date-fns';

// Dummy event data for demonstration
export const monthEvents = [
    { id: "ascx34", date: addDays(new Date(), 3), title: "Meeting with team", description: "We are meeting" },
    { id: "ascx35", date: addDays(new Date(), 10), title: "Code review", description: "We are meeting for code review" },
    { id: "ascx36", date: new Date(), title: "Project deadline", description: "We are meeting" },
    // More events
];


export const weekEvents = [
    { id: "ascx34", date: new Date(), title: "Meeting with team", description: "We are meeting" },
    { id: "ascx35", date: new Date(), title: "Project deadline", description: "We are meeting" },
];


export const dayEvents = [
    { id: "ascx34", date: addHours(new Date(), 1), title: "Meeting with team", description: "We are meeting" },
    { id: "ascx35", date: subHours(new Date(), 2), title: "Project deadline", description: "We are meeting" },
];