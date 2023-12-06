import { createBrowserRouter} from "react-router-dom"
import Login from "./pages/Auth/Login/Login.jsx"
import Users from "./pages/Home/Users.jsx"
import DashboardTemplate from "./templates/DashboardTemplate.jsx"
import PrivateRoute from "./utils/PrivateRoute.jsx"
import { getUserLocal } from "./utils/localStorage.js";
const user = getUserLocal();
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/',
    element: <DashboardTemplate />,
    children: [
      {
        path: '/users',
        element: <PrivateRoute element={<Users />} roles={user?.role} />,
        index: true
      }
    ]
  }
])


export default router