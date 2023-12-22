import {useState} from "react";
import DashNav from "../components/Shared/DashNav";
import SideBar from "../components/Shared/SideBar";
import Container from "../components/Shared/Container";
import {Outlet} from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const navigation = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: (
        <svg
          className="size-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 21"
        >
          <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
          <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
        </svg>
      ),
    },
    {
      name: "Profile",
      path: "/dashboard/profile",
      icon: (
        <svg
          className="size-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Tasks",
      path: "/dashboard/tasks",
      icon: (
        <svg
          className="size-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <rect width="6" height="6" x="3" y="5" rx="1" />
            <path d="m3 17l2 2l4-4m4-9h8m-8 6h8m-8 6h8" />
          </g>
        </svg>
      ),
    },
    {
      name: "Create Task",
      path: "/dashboard/create-task",
      icon: (
        <svg
          className="size-5"
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38M399.34 90L218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0"
          />
          <path
            fill="currentColor"
            d="M386.34 193.66L264.45 315.79A41.08 41.08 0 0 1 247.58 326l-25.9 8.67a35.92 35.92 0 0 1-44.33-44.33l8.67-25.9a41.08 41.08 0 0 1 10.19-16.87l122.13-121.91a8 8 0 0 0-5.65-13.66H104a56 56 0 0 0-56 56v240a56 56 0 0 0 56 56h240a56 56 0 0 0 56-56V199.31a8 8 0 0 0-13.66-5.65"
          />
        </svg>
      ),
    },
  ];
  return (
    <>
      <DashNav toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <SideBar SideNav={navigation} isSidebarOpen={isSidebarOpen} />
      <Container className="sm:ml-64 min-h-screen rounded-lg mt-5">
        <Outlet />
      </Container>
    </>
  );
};

export default DashboardLayout;
