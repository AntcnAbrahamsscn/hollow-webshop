import { createHashRouter } from "react-router-dom";
import Root from "./Root.jsx";
import FirstPage from '../components/FirstPage/FirstPage.jsx';
import AdminPage from '../components/AdminPage/AdminPage.jsx';
import LoginPage from '../components/LoginPage/LoginPage.jsx';
import CartPage from '../components/CartPage/CartPage.jsx';
import  "../mediaqueries.css"

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
            {
                path: "/Cart",
                element: <CartPage />,
            },
        ],
    },
]);

export { router };
