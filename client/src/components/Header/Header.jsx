import Center_Bar from "./Center_Bar";
import Top_Bar from "./Top_Bar";

const Header = () => {
   return (
      <header>
         {/* Top */}
         <Top_Bar />
         {/* Center */}
         <Center_Bar />
         {/* Bottom */}
      </header>
   );
};

export default Header;
