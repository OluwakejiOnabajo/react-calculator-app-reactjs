import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Calculator from "./Calculator";


function MyRoutes() {
  return (
    <BrowserRouter basename='/react-calculator-app-reactjs' >
    <Routes>
      <Route exact path="/" element={<Calculator />} />
    </Routes>
  </BrowserRouter>
  );
}

export default MyRoutes;
