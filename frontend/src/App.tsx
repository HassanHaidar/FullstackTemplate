import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Logs from "./pages/LogTable";
import './App.css'
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/logs" element={<Logs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
