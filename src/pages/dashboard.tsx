import Calendar from "../components/calendar/Calendar";
import UpcomingClasses from "../components/calendar/UpcomingClasses";
import Course from "../components/course/Course";
import Header from "../components/layout/Header";
import Layout from "../components/layout/layout";
import Reminders from "../components/reminders/Reminders";

const Dashboard = () => {
 
    return (
      <Layout>
        <Header />
        <main className=" grid grid-cols-3 ">
            <div className=" col-span-2 gap-4" >
        {/* carousel of reminders, join class, upcoming events, announcements... */}
        <Reminders />
        {/* Enrolled courses */}
        <Course />
            </div>
            <div className=" col-span-1">
                 {/* Fancy calendar component */}
        <Calendar />
        {/* Tasks in timeline view */}
        <UpcomingClasses />
            </div>
        </main>
      </Layout>
    );
};
export default Dashboard;
