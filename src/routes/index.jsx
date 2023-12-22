import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Features from "../pages/Features";
import Pricing from "../pages/Pricing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Loading from "../components/Loading";
import BlockRoute from "./BlockRoute";
import PrivateRoute from "./PrivateRoute";
import Tasks from "../pages/Tasks";
import CreateTask from "../pages/CreateTask";

const router = createBrowserRouter([
  {
    path: "/auth/login",
    element: (
      <BlockRoute>
        <Login />
      </BlockRoute>
    ),
  },
  {
    path: "/auth/signup",
    element: (
      <BlockRoute>
        <Signup />
      </BlockRoute>
    ),
  },
  {path: "/loading", element: <Loading />},
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: (
          <BlockRoute>
            <Home />
          </BlockRoute>
        ),
      },
      {path: "/about", element: <About />},
      {path: "/features", element: <Features />},
      {path: "/pricing", element: <Pricing />},
      {path: "/contact", element: <Contact />},
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "tasks",
        element: (
          <PrivateRoute>
            <Tasks />
          </PrivateRoute>
        ),
      },
      {
        path: "create-task",
        element: (
          <PrivateRoute>
            <CreateTask />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
