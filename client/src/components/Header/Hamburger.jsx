import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { HeaderContext } from "../../Contexts/HeaderContext";

const Hamburger = () => {
   const { toggleDrawer } = useContext(HeaderContext);

   return (
      <div className="sm:hidden border rounded-full hover:border-green-500">
         <IconButton
            onClick={toggleDrawer}
            color="inherit"
            className="transition-all duration-200 ease-in-out"
         >
            <MenuIcon className="size-7  hover:text-green-500" />
         </IconButton>
      </div>
   );
};

export default Hamburger;
