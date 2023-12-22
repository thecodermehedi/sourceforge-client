import {NavLink} from "react-router-dom";

const SideBar = ({SideNav, isSidebarOpen}) => {
  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 min-h-screen pt-14 transition-transform -translate-x-full sm:translate-x-0 bg-white ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-label="Sidebar"
    >
      <div className="h-screen px-3 pb-4 overflow-y-auto bg-gray-50 text-black pt-5">
        <ul className="space-y-2 font-medium">
          {SideNav?.map((item, index) => (
            <li key={index} className="group ">
              <NavLink
                to={item.path}
                end={true}
                className={({isActive}) =>
                  isActive
                    ? "flex items-center p-2 space-x-2 w-full bg-black text-white"
                    : "flex items-center p-2 space-x-2 w-full btn-hover"
                }
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
