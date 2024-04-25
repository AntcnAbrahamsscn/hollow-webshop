import { createHashRouter } from "react-router-dom";
import Root from "./Root.jsx";
import FirstPage from '../components/FirstPage.jsx';
import AdminPage from '../components/AdminPage.jsx';
import LoginPage from '../components/LoginPage.jsx';
import  "../stylesheets/mediaqueries.css"

const router = createHashRouter([
    {
        path: "/",

        element: <Root />,

        children: [
            {
                path: "/",
                element: <FirstPage />,
            },
            {
                path: "/Admin",
                element: <AdminPage />,
            },
            {
                path: "/Login",
                element: <LoginPage />,
            },
        ],
    },
]);

export { router };
