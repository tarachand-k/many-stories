import { Route, Routes } from "react-router-dom";

import RootLayout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
