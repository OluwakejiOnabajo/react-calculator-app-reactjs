import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Calculator from "./Calculator";


function MyRoutes() {
  return (
    <BrowserRouter >
    <Routes>
      {/* Render calculator page */}
      <Route exact path="/" element={<Calculator />} />
    </Routes>
  </BrowserRouter>
  );
}

export default MyRoutes;
