import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // ✅ App komponentini import qilish SHART!
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
