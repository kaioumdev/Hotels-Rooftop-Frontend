import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/home/Home"
import About from "../pages/miniPage/About"
import PrivacyPolicy from "../pages/miniPage/PrivacyPolicy"
import ContactUs from "../pages/miniPage/ContactUs"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about-us",
                element: <About></About>
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy></PrivacyPolicy>
            },
            {
                path: "/contact-us",
                element: <ContactUs></ContactUs>
            }
        ]
    }
])

export default router