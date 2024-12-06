import { Route, Routes } from "react-router";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";

const Router = () => {
   return (
      <Routes>
         {/* Main Routes */}
         <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
         </Route>
      </Routes>
   );
};

export default Router;
