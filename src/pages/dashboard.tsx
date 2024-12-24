import Header from "../components/layout/Header";
import Layout from "../components/layout/layout";

const Dashboard = () => {
 
    return (
      <Layout>
        <Header />
        <main className=" grid grid-cols-3 ">
            <div className=" col-span-2 bg-purple-500" >
        {/* Conditional reminder if task is in less than 3 hours */}
        <h1>reminder</h1>
        {/* Enrolled courses */}
        <h1>Courses</h1>
            </div>
            <div className=" col-span-1 bg-blue-400">
                 {/* Fancy calendar component */}
        <h1>calendar</h1>
        {/* Tasks in timeline view */}
        <h1>tasks</h1>
            </div>
        </main>
      </Layout>
    );
};
export default Dashboard;
