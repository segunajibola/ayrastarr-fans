import { Route, Routes } from "react-router-dom";
import { Navbar, Hero } from "../src/sections";

function App() {
  return (
    <div className="underline">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
