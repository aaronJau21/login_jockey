import { createBrowserRouter} from "react-router-dom"
import Login from "./pages/Auth/Login/Login"
import Users from "./pages/Home/Users"
import DashboardTemplate from "./templates/DashboardTemplate"
import PrivateRoute from "./utils/PrivateRoute"

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
        element: <PrivateRoute element={<Users />} roles={['user']} />,
        index: true
      }
    ]
  }
])


export default router