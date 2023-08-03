import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./pages/Login";
import Aeps from "./pages/Aeps";
import Beps from "./pages/Beps";
import Profile from "./pages/Profile";
import Allservices from "./pages/Allservices";
import Status from "./pages/Documents";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/AEPS" element={<Aeps />} />
        <Route path="/BEPS" element={<Beps />} />
        <Route path="/allservices" element={<Allservices />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/documents" element={<Status />} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
