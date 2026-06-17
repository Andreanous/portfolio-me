import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Certifications from "../pages/Certifications";
import Admin from "../pages/Admin";
import Dashboard from "../pages/Dashboard";
import AddProject from "../pages/AddProject";
import EditProject from "../pages/EditProject";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import AddCertificate from "../pages/AddCertificate";
import EditCertificate from "../pages/Editcertificate";
      


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
          element={<Admin />}
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
          path="/admin/add"
        element={<AddProject />}
        />
        <Route
  path="/admin/edit/:id"
  element={<EditProject />}
/>

<Route
  path="/login"
  element={<Login />}
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
      </Routes>
      
    </BrowserRouter>
  );
}

export default AppRouter;