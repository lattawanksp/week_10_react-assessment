import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Owner from "./pages/Owner";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/owner" element={<Owner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
