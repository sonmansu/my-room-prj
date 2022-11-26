import "./App.scss";
import { Routes, Route } from "react-router-dom";
import RoomPage from "./pages/RoomPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RoomPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
