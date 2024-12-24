import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { Provider } from "react-redux";
import Dashboard from "./pages/dashboard";
import Schedule from "./pages/schedule";
import Courses from "./pages/courses";
import Discussion from "./pages/discussion";
import Settings from "./pages/settings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "/schedule",
        element: <Schedule />
    },
    {
        path: "/courses",
        element: <Courses />
    },
    {
        path: "/discussion",
        element: <Discussion />
    },
    {
        path: "/settings",
        element: <Settings />
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    // <Provider 
    // // store={store}
    // >
     
        <RouterProvider router={router} />
    // </Provider>
);
