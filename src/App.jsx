import { Route, Routes } from "react-router";
import Home from "./pages/home";
import NavBar from "./components/layouts/NavBar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AllJobPage from "./pages/jobs";
import JobDetails from "./pages/jobs/JobDetails";
import Dashboard from "./pages/dashboard";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/">
          {/* Unprotected Pages/Routes */}
          <Route path="auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route index element={<Home />} />
          <Route path="dashboard">
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="jobs">
            <Route index element={<AllJobPage />} />
            <Route path=":jobId" element={<JobDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
