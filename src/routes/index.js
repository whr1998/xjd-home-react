import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Contact from "@/pages/Contact/Contact";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>

      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
};

export default RoutesConfig;
