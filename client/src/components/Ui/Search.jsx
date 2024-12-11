
import { FiSearch } from "react-icons/fi";

const Search = () => {
   return (
      <div className="flex-grow flex sm:justify-end md:justify-end lg:justify-center items-center transition-all duration-300">
         {/* For Desktop */}
         <div className="flex items-center w-full sm:w-64 bg-gray-100 rounded-lg md:focus-within:w-[25rem] sm:focus-within:w-[18rem] focus-within:ring-1 focus-within:ring-green-500 transition-all duration-300">
            <div className="px-2 flex items-center">
               <FiSearch className="text-gray-400" size={20} />
            </div>
            <input
               type="text"
               placeholder="Search"
               className="w-full bg-transparent py-2 md:py-3 px-3 text-sm focus:outline-none"
            />
            <button className="px-4 py-2 md:py-3 text-white bg-[#00B207] hover:bg-[#2C742F] rounded-r-lg text-sm">
               Search
            </button>
         </div>
      </div>
   );
};

export default Search;
