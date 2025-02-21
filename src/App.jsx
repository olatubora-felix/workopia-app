import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Navbar from "./components/layouts/Navbar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
