import { createBrowserRouter, useNavigate } from "react-router-dom";
import HomePage from "../pages/home-page";
import ProfilePage from "../pages/profile-page";
import ErrorPage from "../pages/error-page";

const RedirectToNotFoundComponent = () => {
    const navigate = useNavigate();
    navigate("/errors/notfound");
    return <></>;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/profile/:address",
        element: <ProfilePage />,
    },
    {
        path: "/errors/:errorid",
        element: <ErrorPage />,
    },
    {
        path: "*",
        element: <RedirectToNotFoundComponent />,
    },
]);

export default router;
