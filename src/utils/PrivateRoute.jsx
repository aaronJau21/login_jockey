import { HookLogin } from "./toastify.js"
import { Navigate } from "react-router-dom"


const PrivateRoute = ({ element, roles }) => {
  const { handleNoAdmin } = HookLogin();
  const userRole = "admin";

  const hasPermission = roles.includes(userRole);

  if (!hasPermission) {
    handleNoAdmin();
    return <Navigate to="/" />;
  }

  return element;
};

export default PrivateRoute;
