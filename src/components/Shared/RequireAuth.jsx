import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // console.log(user);
  if (isLoading) {
    return (
      <div className="z-50 bg-white text-btnPrimary w-[100vw] h-[100vh] fixed top-0 left-0 right-0 bottom-0">
        Loading...
      </div>
    );
  }
  if (!isAuthenticated) {
    return <Navigate to="/"></Navigate>;
  }
  return children;
}

export default RequireAuth;
