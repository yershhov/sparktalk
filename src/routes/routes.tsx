import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

export default function SparktalkRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* If no matching route is found, show the NotFound element */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
