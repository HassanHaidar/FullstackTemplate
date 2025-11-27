import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import NotFound from "./pages/NotFound";
import Feedback from "./pages/feedback";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
