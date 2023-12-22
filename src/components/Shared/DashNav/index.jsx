import {Link} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const DashNav = ({toggleSidebar, isSidebarOpen}) => {
  const {user, logOut} = useAuth();
  console.log(user);
  return (
    <>
      <div className="h-14"></div>
      <nav className="fixed top-0 z-50 w-full bg-gray-50">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center justify-start">
              <button
                onClick={toggleSidebar}
                type="button"
                className="inline-flex items-center p-2 text-sm text-primary rounded-lg sm:hidden hover:bg-black hover:bg-opacity-5 focus:outline-none"
              >
                {isSidebarOpen && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <path d="M5 5L12 5L19 5">
                        <animate
                          fill="freeze"
                          attributeName="d"
                          dur="0.4s"
                          values="M5 5L12 5L19 5;M5 5L12 12L19 5"
                        />
                      </path>
                      <path d="M5 12H19">
                        <animate
                          fill="freeze"
                          attributeName="d"
                          dur="0.4s"
                          values="M5 12H19;M12 12H12"
                        />
                      </path>
                      <path d="M5 19L12 19L19 19">
                        <animate
                          fill="freeze"
                          attributeName="d"
                          dur="0.4s"
                          values="M5 19L12 19L19 19;M5 19L12 12L19 19"
                        />
                      </path>
                    </g>
                  </svg>
                )}
                {!isSidebarOpen && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                    >
                      <path d="M5 5L12 12L19 5">
                        <animate
                          fill="freeze"
                          attributeName="d"
                          dur="0.4s"
                          values="M5 5L12 12L19 5;M5 5L12 5L19 5"
                        />
                      </path>
                      <path d="M12 12H12">
                        <animate
                          fill="freeze"
                          attributeName="d"
                          dur="0.4s"
                          values="M12 12H12;M5 12H19"
                        />
                      </path>
                      <path d="M5 19L12 12L19 19">
                        <animate
                          fill="freeze"
                          attributeName="d"
                          dur="0.4s"
                          values="M5 19L12 12L19 19;M5 19L12 19L19 19"
                        />
                      </path>
                    </g>
                  </svg>
                )}
              </button>
              <Link to="/" className="font-bold text-2xl">
                Soloforge
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <p className="hidden md:block text-sm font-medium">
                {user?.displayName}
              </p>
              <img
                src={user?.photoURL || "https://via.placeholder.com/150"}
                className="rounded-full h-8 hidden sm:block"
                alt={user?.displayName.split(" ")[0].charAt(0)}
              />
              <button
                onClick={logOut}
                className="py-2 px-4 bg-black hover:rounded-lg text-white"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashNav;
