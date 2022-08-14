import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/about/About";
import Calculator from "./pages/calculator/Calculator";


function MyRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Calculator />} />
      <Route exact path="/OluwakejiOnabajo" element={<About />} />
    </Routes>
  </BrowserRouter>
  );
}

export default MyRoutes;
