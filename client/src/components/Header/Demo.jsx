import Badge from "@mui/material/Badge";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import logo from "../../assets/logos/Logo.svg";
import Container from "../Ui/Container";

const Centerbar = () => {
   return (
      <div className="font-thin bg-white">
         <Container>
            <nav>
               <div className="flex flex-wrap justify-between items-center py-4">
                  {/* Logo Section */}
                  <div className="flex items-center space-x-2">
                     <img src={logo} alt="GreenCart Logo" />
                  </div>

                  {/* Search Section */}
                  {/* <div className="flex-grow flex items-center justify-center sm:justify-start w-full sm:max-w-lg bg-gray-100 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-green-500 transition-all duration-300">
                     <div className="px-3 flex items-center">
                        <FiSearch className="text-gray-500" size={20} />
                     </div>
                     <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-transparent py-3 px-3 text-sm focus:outline-none"
                     />
                     <button className="px-6 py-3 text-white bg-[#00B207] hover:bg-[#2C742F] rounded-r-lg text-sm">
                        Search
                     </button>
                  </div> */}
                  <div className="flex-grow flex items-center justify-center transition-all duration-300">
                     <div className="flex items-center w-full sm:w-64 lg:w-80 max-w-lg bg-gray-100 rounded-lg focus-within:w-[30rem] shadow-sm focus-within:ring-2 focus-within:ring-green-500 transition-all duration-300">
                        <div className="px-3 flex items-center">
                           <FiSearch className="text-gray-400" size={20} />
                        </div>
                        <input
                           type="text"
                           placeholder="Search"
                           className="w-full bg-transparent py-3 px-3 text-sm focus:outline-none"
                        />
                        <button className="px-6 py-3 text-white bg-[#00B207] hover:bg-[#2C742F] rounded-r-lg text-sm">
                           Search
                        </button>
                     </div>
                  </div>

                  {/* Icons Section */}
                  <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                     {/* Favorite Icon */}
                     <div className="text-gray-600 hover:text-green-600 cursor-pointer transition-all border-r pr-2">
                        <AiOutlineHeart size={30} />
                     </div>

                     {/* Cart Icon */}
                     <div className="flex items-center text-gray-600 hover:text-green-600 cursor-pointer transition-all ">
                        {/* <div className="relative">
                           <BsBag size={24} />
                           <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                              190
                           </span>
                        </div> */}
                        <Badge badgeContent={400} color="success">
                           <BsBag color="action" size={30} />
                        </Badge>
                        <p className="text-sm hidden lg:block ml-6">
                           Shopping cart: <p className="font-bold">$57.00</p>
                        </p>
                     </div>
                  </div>
               </div>
            </nav>
         </Container>
      </div>
   );
};

export default Centerbar;
