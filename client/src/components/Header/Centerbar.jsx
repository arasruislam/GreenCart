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
                     <img src={logo} alt="GreenCart Logo" className="md:w-5/6 lg:w-full" />
                  </div>

                  {/* Search Section */}
                  <div className="flex-grow flex sm:justify-end md:justify-end lg:justify-center items-center transition-all duration-300">
                     {/* For Desktop */}
                     <div className="flex items-center w-full sm:w-64 bg-gray-100 rounded-lg md:focus-within:w-[25rem] sm:focus-within:w-[18rem] focus-within:ring-1 focus-within:ring-green-500 transition-all duration-300 mr-2">
                        <div className="px-2 flex items-center">
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
                     <div className="flex items-center text-gray-600 hover:text-green-600 cursor-pointer transition-all">
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
