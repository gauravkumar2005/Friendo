import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Message from "./pages/Message";
import Following from "./pages/Following";
import Notification from "./pages/Notification";
import Help from "./pages/Help";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/message" element={<Message />} />
        <Route path="/following" element={<Following />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/help" element={<Help />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;