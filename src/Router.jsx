import { createBrowserRouter } from "react-router-dom"
import Login from "./pages/Auth/Login/Login"

import Users from "./pages/Home/Users"
import DashboardTemplate from "./templates/DashboardTemplate"

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
        element: <Users />,
        index: true
      }
    ]
  }
])


export default router