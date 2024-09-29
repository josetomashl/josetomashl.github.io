import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./context/languageContext";
import CustomContextMenu from "./context/rightClickMenuContext";
import "./globals.css";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
    <CustomContextMenu />
  </StrictMode>
);
