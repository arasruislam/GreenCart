import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { HeaderContext } from "../../Contexts/HeaderContext";
import Container from "../Ui/Container";
import NavItems from "./NavItems";

const Bottom_Bar = () => {
   const { toggleDrawer, isDrawerOpen } = useContext(HeaderContext);

   return (
      <div className="bg-gray-800">
         <Container>
            <nav>
               <div className="container mx-auto flex justify-between items-center sm:py-4">
                  {/* Left: Logo, Avatar, and Links */}
                  <div className="flex items-center space-x-4">
                     <ul className="hidden sm:flex space-x-4">
                        <NavItems />
                     </ul>
                  </div>

                  {/* Right: Phone Number */}
                  <div className="hidden sm:flex items-center space-x-2 text-gray-200">
                     <PhoneIcon />
                     <span>(219) 555-0114</span>
                  </div>

                  {/* Hamburger Menu */}
                  {/* <div className="sm:hidden">
                     <IconButton onClick={toggleDrawer} color="inherit">
                        <MenuIcon />
                     </IconButton>
                  </div> */}
               </div>

               {/* Mobile Drawer */}
               <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
                  <div className="w-64 bg-gray-800 h-full text-white flex flex-col">
                     <div className="flex justify-end p-4">
                        <IconButton onClick={toggleDrawer} color="inherit">
                           <CloseIcon className="size-7  hover:text-green-500" />
                        </IconButton>
                     </div>
                     <ul className="flex flex-col space-y-4 px-4">
                        <NavItems />
                     </ul>
                     <div className="flex items-center space-x-2 p-4 mt-auto text-gray-200">
                        <PhoneIcon />
                        <span>(219) 555-0114</span>
                     </div>
                  </div>
               </Drawer>
            </nav>
         </Container>
      </div>
   );
};

export default Bottom_Bar;
