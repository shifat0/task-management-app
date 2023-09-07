import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/Auth/SIgnup/Signup";
import Login from "./Components/Auth/Login/Login";
import Home from "./Components/Home/Home";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoute";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
