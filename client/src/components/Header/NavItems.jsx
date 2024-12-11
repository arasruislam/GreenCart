import { NavLink } from "react-router";

const NavItems = () => {
   return (
      <>
         <li>
            <NavLink
               to="/"
               className={({ isActive }) =>
                  isActive
                     ? "text-green-500"
                     : "text-gray-400 hover:text-green-600 transition-colors duration-150"
               }
            >
               Home
            </NavLink>
         </li>
         <li>
            <NavLink
               to="/shop"
               className={({ isActive }) =>
                  isActive
                     ? "text-green-500"
                     : "text-gray-400 hover:text-green-600 transition-colors duration-150"
               }
            >
               Shop
            </NavLink>
         </li>
         <li>
            <NavLink
               to="/blog"
               className={({ isActive }) =>
                  isActive
                     ? "text-green-500"
                     : "text-gray-400 hover:text-green-600 transition-colors duration-150"
               }
            >
               Blog
            </NavLink>
         </li>
         <li>
            <NavLink
               to="/about"
               className={({ isActive }) =>
                  isActive
                     ? "text-green-500"
                     : "text-gray-400 hover:text-green-600 transition-colors duration-150"
               }
            >
               About Us
            </NavLink>
         </li>
         <li>
            <NavLink
               to="/contact"
               className={({ isActive }) =>
                  isActive
                     ? "text-green-500"
                     : "text-gray-400 hover:text-green-600 transition-colors duration-150"
               }
            >
               Contact Us
            </NavLink>
         </li>
      </>
   );
};

export default NavItems;
