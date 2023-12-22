import {useState} from "react";
import Container from "../Container";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState(false);
  const navigation = [
    {title: "About Us", link: "/about"},
    {title: "Features", link: "/features"},
    {title: "Pricing", link: "/pricing"},
    {title: "Contact", link: "/contact"},
  ];
  return (
    <nav className="bg-white w-full border-b border-gray-900 md:static">
      <Container className="md:flex items-center justify-between">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <h1 className="font-bold text-2xl">Soloforge</h1>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center  text-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-600 hover:text-black">
                  <a href={item.link}>{item.title}</a>
                </li>
              );
            })}
            <Link
              to="/auth/login"
              className="py-3 text-white bg-black duration-300 hover:rounded-lg shadow hover:shadow-none md:hidden block"
            >
              Login
            </Link>
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <Link
            to="/auth/login"
            className="py-3 px-4 border border-black duration-300 hover:bg-black hover:text-white shadow hover:shadow-none mr-2"
          >
            Login
          </Link>
          <Link
            to="/auth/signup"
            className="py-3 px-4 text-white bg-black duration-300 hover:rounded-lg shadow hover:shadow-none"
          >
            Sign Up
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
