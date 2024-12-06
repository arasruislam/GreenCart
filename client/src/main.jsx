import { ThemeProvider } from "@emotion/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import Router from "./router/Router.jsx";
import theme from "./theme.js";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <BrowserRouter>
         <ThemeProvider theme={theme}>
            <Router />
         </ThemeProvider>
      </BrowserRouter>
   </StrictMode>
);
