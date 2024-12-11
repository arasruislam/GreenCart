import { useState } from "react";
import { HeaderContext } from "../../Contexts/HeaderContext";
import Bottom_Bar from "./Bottom_Bar";
import Center_Bar from "./Center_Bar";
import Top_bar from "./Top_Bar";

const Header = () => {
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

   const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
   };

   const headerFunctions = {
      toggleDrawer,
      setIsDrawerOpen,
      isDrawerOpen,
   };
   return (
      <HeaderContext.Provider value={headerFunctions}>
         <header>
            {/* Top */}
            <Top_bar />
            {/* Center */}
            <Center_Bar />
            {/* Bottom */}
            <Bottom_Bar />
         </header>
      </HeaderContext.Provider>
   );
};

export default Header;
