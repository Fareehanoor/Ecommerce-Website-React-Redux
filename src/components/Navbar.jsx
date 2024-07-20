// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// import {NavLink} from 'react-router-dom';
// import {useSelector} from 'react-redux';

// const Navbar = () => {
//   const state = useSelector((state) => state.handleCart)
//     return (
//       <div>
//         <nav className="bg-white border-gray-200 dark:bg-gray-900 py-3 shadow-sm">
//           <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//             <NavLink
//               to="/"
//               className="flex items-center space-x-3 rtl:space-x-reverse"
//             >
//               <img
//                 src="src\assets\logo1.webp"
//                 className="h-8"
//                 alt="FA store Logo"
//               />
//               <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//                 FA Store
//               </span>
//             </NavLink>
//             <div className="flex md:order-2 space-x-4 rtl:space-x-reverse">
//               <button
//                 type="button"
//                 className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
//               >
//                 <NavLink to="/login">
//                   <i></i>Login
//                 </NavLink>
//               </button>
//               <button
//                 type="button"
//                 className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
//               >
//                 <NavLink to="/register">
//                   <i></i>Register
//                 </NavLink>
//               </button>
//               <button
//                 type="button"
//                 className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
//               >
//                 <NavLink to="/cart">
//                 <FontAwesomeIcon icon={faCartShopping} /> Cart ({state.length})
//                 </NavLink>
//               </button>
//               <button
//                 data-collapse-toggle="navbar-cta"
//                 type="button"
//                 className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//                 aria-controls="navbar-cta"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 <svg
//                   className="w-5 h-5"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 17 14"
//                 >
//                   <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
//                 </svg>
//               </button>
//             </div>
//             <div
//               className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//               id="navbar-cta"
//             >
//               <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                 <li>
//                   <NavLink
//                     to="/"
//                     className="block py-2 px-3 md:p-0 text-white bg-gray-900 rounded md:bg-transparent md:text-gray-900 md:dark:text-blue-500 md:hover:text-gray-500"
//                     aria-current="page"
//                   >
//                     Home
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/products"
//                     className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-500 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                   >
//                     Products
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/about"
//                     className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-500 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                   >
//                     About
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/contact"
//                     className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-500 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                   >
//                     Contact
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   };
  
//   export default Navbar;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 py-3 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="src/assets/logo1.webp"
            className="h-8"
            alt="FA store Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            FA Store
          </span>
        </NavLink>

        <button
          data-collapse-toggle="navbar-cta"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-cta"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:space-y-0 space-y-4 md:space-y-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:bg-transparent md:text-gray-900 md:dark:text-blue-500 md:hover:text-gray-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:bg-transparent md:text-gray-900 md:dark:text-blue-500 md:hover:text-gray-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:bg-transparent md:text-gray-900 md:dark:text-blue-500 md:hover:text-gray-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:bg-transparent md:text-gray-900 md:dark:text-blue-500 md:hover:text-gray-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex md:order-2 space-x-4 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            <NavLink to="/login">
              <i></i>Login
            </NavLink>
          </button>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            <NavLink to="/register">
              <i></i>Register
            </NavLink>
          </button>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            <NavLink to="/cart">
              <FontAwesomeIcon icon={faCartShopping} /> Cart ({state.length})
            </NavLink>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden"
        id="navbar-cta"
      >
        <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <li>
            <NavLink
              to="/"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-current="page"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
