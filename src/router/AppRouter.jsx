import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Certifications from "../pages/Certifications";
import Admin from "../pages/Admin";
import Dashboard from "../pages/Dashboard";
import AddProject from "../pages/Addproject";
import EditProject from "../pages/Editproject";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import AddCertificate from "../pages/Addcertificate";
import EditCertificate from "../pages/Editcertificate";
import NotFound from "../pages/NotFound";
      


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>    
        <Route path="/" element={<Home />} />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/certifications"
          element={<Certifications />}
        />

        <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  }
/>
        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

        <Route
  path="/admin/edit/:id"
  element={
    <ProtectedRoute>
      <EditProject />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/add"
  element={
    <ProtectedRoute>
      <AddProject />
    </ProtectedRoute>
  }
/>

<Route
  path="/login"
  element={<Login />}
/>

<Route
  path="/admin/certificate/add"
  element={
    <ProtectedRoute>
      <AddCertificate />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/certificate/edit/:id"
  element={
    <ProtectedRoute>
      <EditCertificate />
    </ProtectedRoute>
  }
/>
<Route path="*" element={<NotFound />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default AppRouter;