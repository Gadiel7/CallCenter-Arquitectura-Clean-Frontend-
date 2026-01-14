import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CallCenter from "./pages/CallCenter";
import Marketing from "./pages/Marketing";
import Registro from "./pages/Registro";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/panel" element={<Dashboard />} />
          <Route path="/callcenter" element={<CallCenter />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/registro" element={<Registro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
