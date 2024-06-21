import { Route, Routes } from "react-router-dom";

import RootLayout from "./pages/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
