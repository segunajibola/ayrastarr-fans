import { Route, Routes } from "react-router-dom";
import { Navbar, Home } from "../src/sections";

function App() {
  return (
    <div className="underline">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
