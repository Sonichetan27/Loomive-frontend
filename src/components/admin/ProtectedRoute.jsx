import { Navigate } from "react-router-dom";
import { useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated] = useState(() => Boolean(localStorage.getItem("adminToken")));

  if (!isAuthenticated) {
    return <Navigate to="/secure-panel-7f3a2c9e/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
