import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {" "}
          &copy; {new Date().getFullYear()} FA Store. All rights reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <NavLink to="/" className="hover:text-gray-400 ml-4">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="hover:text-gray-400 ml-4">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="hover:text-gray-400 ml-4">
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-gray-400 ml-4">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
