import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/home/Home"
import About from "../pages/miniPage/About"
import PrivacyPolicy from "../pages/miniPage/PrivacyPolicy"
import ContactUs from "../pages/miniPage/ContactUs"
import SingleBlog from "../pages/blogs/singleBlog/SingleBlog"
import Login from "../pages/user/Login"
import Register from "../pages/user/Register"
import AdminLayout from "../pages/admin/AdminLayout"
import Dashboard from "../pages/admin/dashboard/Dashboard"
import AddPost from "../pages/admin/post/AddPost"
import ManagePosts from "../pages/admin/post/ManagePosts"
import ManageUser from "../pages/admin/users/ManageUser"
import PrivateRouter from "./PrivateRouter"
import UpdatePost from "../pages/admin/post/UpdatePost"

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
            },
            {
                path: "/blogs/:id",
                element: <SingleBlog></SingleBlog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "dashboard",
                element: <PrivateRouter><AdminLayout></AdminLayout></PrivateRouter>,
                children: [
                    {
                        path: "",
                        element: <Dashboard></Dashboard>
                    },
                    {
                        path: "add-new-post",
                        element: <AddPost></AddPost>
                    },
                    {
                        path: "manage-items",
                        element: <ManagePosts></ManagePosts>
                    },
                    {
                        path: "users",
                        element: <ManageUser></ManageUser>
                    },
                    {
                        path: "update-items/:id",
                        element: <UpdatePost></UpdatePost>
                    }
                ]
            }
        ]
    }
])

export default router