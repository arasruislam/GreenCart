const Container = ({ children }) => {
   return (
      <div className="max-w-[2560px] mx-auto xl:px-24 lg:px-16 md:px-8 sm:px-4 px-2">
         {children}
      </div>
   );
};

export default Container;
