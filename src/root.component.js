import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./root.component.css";
import Home from "./pages/Home";

export default function Root(props) {
  return (
    <div className="ReactApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
