import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { Provider } from "react-redux";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
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
