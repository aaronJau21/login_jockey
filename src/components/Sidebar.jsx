
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
    const location = useLocation().pathname;
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/";
      };


    
    return (
        <div className="relative">
            <button
                className="md:hidden bg-gray-400 p-2 text-white absolute top-0 left-0"
                onClick={() => {
                    toggleSidebar();
                }}
            >
                ☰
            </button>
            <div className={`sidebar bg-gray-400 ${sidebarOpen ? 'flex-initial' : 'hidden'} w-40 md:w-44 min-h-screen`}>
                <hr className="h-0 border-1 border-slate-400" />
                <div className="list-none m-left-5">
                    <ul className="ml-2.5 mt-2.5">
                        <p className="flex ml-6 mt-3.5 font-bold">Principal</p>

                        <Link to={"/users"} >
                            <li className={`flex items-center mt-1.5 cursor-pointer hover:bg-gray-500 ${location === "/users" ? "bg-gray-500" : ""}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" color="#8b0000" height="1em" viewBox="0 0 448 512"><path fill="currentColor" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
                                <span className="ml-6">Usuarios</span>
                            </li>
                        </Link>
                        <Link to={"https://geojson.io/#map=12.05/-12.03411/-77.06902"} >
                            <li className={`flex items-center mt-1.5 cursor-pointer hover:bg-gray-500 ${location === "/" ? "bg-gray-500" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" color="#8b0000" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                            </svg>
                                <span className="ml-5   ">Mapa</span>
                            </li>
                        </Link>
                        <Link to={"/"} >
                            <li className={`flex items-center mt-1.5 cursor-pointer hover:bg-gray-500 ${location === "/" ? "bg-gray-500" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" color="#8b0000" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                                <span className="ml-5">Inicio</span>
                            </li>
                        </Link>
                        <Link
                            to="/"
                            onClick={() =>handleLogout()}
                            role="menuitem"
                            tabIndex="-1"
                            id="user-menu-item-1"
                        >
                            <li className="flex items-center mt-1.5 cursor-pointer hover:bg-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" color="#8b0000" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" /></svg>
                                <span className="ml-5">Cerrar sesión</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Sidebar;