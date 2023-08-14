import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authenticator from "../components/Authenticator";

export default function SparktalkRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:chatId?" element={<Authenticator />} />

        {/* If no matching route is found, show the NotFound element */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
