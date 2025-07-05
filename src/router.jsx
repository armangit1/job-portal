import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import JobDetails from "./pages/JobDetails";
import PrivetRoute from "./pages/PrivetRoute";
import ApplyJob from "./pages/ApplyJob";
import MyApplication from "./pages/MyApplication";
import PrivetRoute2 from "./pages/PrivetRoute2";
import AddJobs from "./pages/AddJobs";
import MyPostjob from "./pages/MyPostjob";
import View from "./pages/View";
import Alljobs from "./pages/Alljobs";
import axios from "axios";





const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        errorElement: <h2>Error this page not fund</h2>,
        children: [
            {
                path: "/",
                element: <Home></Home>

            },

            {
                path: "/register",
                element: <PrivetRoute2><Register></Register></PrivetRoute2>
            },
            {
                path: "/login",
                element: <PrivetRoute2><Signin></Signin></PrivetRoute2>
            }, {
                path: "/JobDetails/:id",
                element: <PrivetRoute><JobDetails></JobDetails></PrivetRoute>,
                loader: async ({ params }) => {
                    const response = await axios.get(`https://job-portal-nu-seven-88.vercel.app/job/${params.id}`, {
                        withCredentials: true,
                    });
                    return response.data; // ✅ এটা ঠিক
                }
            },
            {
                path: "/apply-job/:id",
                element: <PrivetRoute><ApplyJob></ApplyJob></PrivetRoute>
            },
            {
                path: "/mypostedJobs",
                element: <PrivetRoute><MyPostjob></MyPostjob></PrivetRoute>
            },
            {
                path: `/viewJob/:id`,
                element: <PrivetRoute><View></View></PrivetRoute>,
            

            },
            {
                path: '/myApplications',
                element: <PrivetRoute><MyApplication></MyApplication></PrivetRoute>
            }, {
                path: '/addjob',
                element: <PrivetRoute><AddJobs></AddJobs></PrivetRoute>
            }
        ]
    },

])
export default router;