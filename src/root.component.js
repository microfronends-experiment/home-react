import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./root.component.css";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";

export default function Root(props) {
  return (
    <div className="ReactApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/reactPage2" element={<Page2 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
