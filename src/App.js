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
import Allservices from "./pages/Allservices";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/AEPS" element={<Aeps />} />
        <Route path="/BEPS" element={<Beps />} />
        <Route path="/allservices" element={<Allservices />} />


      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
