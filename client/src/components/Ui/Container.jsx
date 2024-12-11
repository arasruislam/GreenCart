import PropTypes from "prop-types";

const Container = ({ children }) => {
   return (
      <div className="max-w-[2560px] mx-auto xl:px-24 lg:px-12 md:px-8 sm:px-4 px-2">
         {children}
      </div>
   );
};

Container.propTypes = {
   children: PropTypes.node,
};

export default Container;
