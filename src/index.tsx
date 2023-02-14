import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import "./setup";
import Table from "./pages/Table";
import Chart from "./pages/Chart";

const rootElement: any = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/table" element={<></>} />
        <Route path="/chart" element={<></>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
