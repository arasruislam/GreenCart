import { useState } from "react";
import { PiMapPinLight } from "react-icons/pi";
import { Link } from "react-router";
import Container from "../Ui/Container";

const Top_bar = () => {
   // currency
   const currencies = ["USD", "EUR", "GBP", "JPY", "INR", "BDT"];
   const [selectedCurrency, setSelectedCurrency] = useState("USD");

   // language
   const languages = ["EN", "ES", "FR", "DE", "JP", "BN"];
   const [selectedLanguage, setSelectedLanguage] = useState("EN");

   const handleChange = (event) => {
      if (languages.includes(event.target.value)) {
         const language = event.target.value;
         setSelectedLanguage(language);
         console.log(`Selected Language: ${language}`);
      } else {
         const currency = event.target.value;
         setSelectedCurrency(currency);
         console.log(`Selected Currency: ${currency}`);
      }
   };

   return (
      <div className="font-thin bg-[#EDF2EE] text-[#2C742F]">
         <Container>
            <div className="flex flex-col md:flex-row items-center justify-between ">
               {/* left side (location) */}
               <div className="flex items-center gap-1">
                  <PiMapPinLight size={20} />
                  <p className="">Location: Dhaka, Bangladesh</p>
               </div>

               {/* right side (select currency, select language, login, singup) */}
               <div className="flex items-center">
                  {/* Currency & Language */}
                  <div className="flex items-center gap-2">
                     {/* Currency */}
                     <div className="flex items-center space-x-2">
                        <select
                           id="currency-dropdown"
                           value={selectedCurrency}
                           onChange={handleChange}
                           className="block w-18 px-3 py-2 bg-transparent text-sm focus:outline-none focus:ring-0"
                        >
                           {currencies.map((currency, index) => (
                              <option key={index} value={currency}>
                                 {currency}
                              </option>
                           ))}
                        </select>
                     </div>
                     {/* Language */}
                     <div className="flex items-center space-x-2 ">
                        <select
                           id="language-dropdown"
                           value={selectedLanguage}
                           onChange={handleChange}
                           className="block w-16 px-3 py-2 text-sm bg-transparent focus:outline-none focus:ring-0"
                        >
                           {languages.map((language, index) => (
                              <option key={index} value={language}>
                                 {language}
                              </option>
                           ))}
                        </select>
                     </div>
                  </div>

                  {/* bar */}
                  <span className="mx-4">|</span>
                  {/* Account Item */}
                  <div>
                     <Link to={"sign_in"} className="hover:underline">
                        Sign in
                     </Link>
                     <span className="mx-2">/</span>
                     <Link to={"sign_up"} className="hover:underline">
                        Sign Up
                     </Link>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Top_bar;
