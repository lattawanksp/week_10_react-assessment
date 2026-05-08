import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Owner from "./pages/Owner";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/owner" element={<Owner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
