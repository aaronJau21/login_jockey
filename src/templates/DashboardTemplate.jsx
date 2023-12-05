import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardTemplate = () => {
    return (
        <div className="flex">
            <Sidebar />
            <Outlet />

        </div>
    )
}

export default DashboardTemplate