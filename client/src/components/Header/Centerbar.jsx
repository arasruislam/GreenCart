import Badge from "@mui/material/Badge";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import logo from "../../assets/logos/Logo.svg";
import mobileLogo from "../../assets/logos/icon.svg"
import Container from "../Ui/Container";
import Search from "../Ui/Search";

const Centerbar = () => {
   return (
      <div className=" bg-white border-b shadow-sm">
         <Container>
            <nav>
               <div className="flex flex-wrap justify-between items-center py-4">
                  {/* Logo Section */}
                  <div className="flex items-center">
                     {/* Medium to large view */}
                     <img
                        src={logo}
                        alt="GreenCart Logo"
                        className="sm:w-5/6 lg:w-full hidden sm:block"
                     />
                     {/* Mobile view */}
                     <img
                        src={mobileLogo}
                        alt="GreenCart Logo"
                        className="sm:w-5/6 lg:w-full flex sm:hidden"
                     />
                  </div>

                  {/* Search Section */}
                  <div className="hidden sm:block">
                     <Search />
                  </div>

                  {/* Icons Section */}
                  <div className="flex items-center space-x-2 mr-3 md:mr-0 ">
                     {/* Favorite Icon */}
                     <div className="text-gray-600 hover:text-green-600 cursor-pointer transition-all border-r pr-2">
                        <AiOutlineHeart className="size-7" />
                     </div>

                     {/* Cart Icon */}
                     <div className="flex items-center text-gray-600 hover:text-green-600 cursor-pointer transition-all">
                        <Badge badgeContent={400} color="success">
                           <BsBag color="action" className="size-7" />
                        </Badge>
                        <p className="text-sm hidden lg:block ml-5">
                           Shopping cart: <p className="font-bold">$57.00</p>
                        </p>
                     </div>
                  </div>

                  {/* mobile view search */}
                  <div className="flex sm:hidden mt-4 w-full">
                     <Search />
                  </div>
               </div>
            </nav>
         </Container>
      </div>
   );
};

export default Centerbar;
