import { Paper, Table, TableBody, TableCell, Typography, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { http } from "../../services/api";
import { getLocal } from "../../utils/localStorage";
import CreateUsuarios from "./modal/CreateUsuarios";
import { HookLogin } from "../../utils/toastify";
const Users = () => {
    const {toastifyRestorePassword, toastifyRestorePasswordError, handleLogin, toastifyDeleteUser} = HookLogin();
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false)
    const token = getLocal();


    const getUsers = async () => {
        try {
            const response = await http.get('/users/getUsers', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUsers(response.data.users);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    const restorePassword = async (email) => {
        const token = getLocal();
        try {
            const response = await http.post(`users/reset-password/${email}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toastifyRestorePassword(response.data.msg)
            return response.data;
        } catch (error) {
            toastifyRestorePasswordError(error.response.data.msg)
        }
    };

    const deleteUser = async (email) => {
        const token = getLocal();
        try {
            const response = await http.delete(`users/delete/${email}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toastifyDeleteUser(response.data.msg)
            return response.data;
        } catch (error) {
            toastifyRestorePasswordError(error.data.msg)
        }
    };

    const handleModal = () => {
        setShowModal(!showModal)
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="w-screen relative mt-12">
            <div className="mx-9 mt-9">
                <div className="flex justify-end">
                    <button className="bg-blue-500 px-3 py-1 rounded-md text-white shadow-md" onClick={() => handleModal()}>Agregar Usuario</button>
                </div>
                {
                    showModal && <CreateUsuarios showModal={showModal} setShowModal={setShowModal} users={users} setUsers={setUsers} />
                }
                <div className="mt-9">
                    <TableContainer component={Paper}>
                        <Table sx={{ backgroundColor: "#a2a3ac" }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">
                                    <Typography variant="h6" style={{ color: "white", fontWeight: "normal" }}>Nombre</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                    <Typography variant="h6" style={{ color: "white", fontWeight: "normal" }}>Apellido</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                    <Typography variant="h6" style={{ color: "white", fontWeight: "normal" }}>Email</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                    <Typography variant="h6" style={{ color: "white", fontWeight: "normal" }}>Telefono</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                    <Typography variant="h6" style={{ color: "white", fontWeight: "normal" }}>Actions</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{ backgroundColor: "#e8eaf6" }}>
                                {users.map((user) => (
                                    <TableRow key={user?.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell align="center" component="th" scope="row">
                                            {user?.nombres}
                                        </TableCell>
                                        <TableCell align="center">{user?.apellidos}</TableCell>
                                        <TableCell align="center">{user?.email}</TableCell>
                                        <TableCell align="center">{user?.telefono}</TableCell>
                                        <TableCell align="center">
                                            <div className="flex justify-center gap-x-4">
                                                <button onClick={()=> deleteUser(user?.email)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </button>
                                                <button onClick={()=> restorePassword(user?.email) }>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                                    </svg>
                                                </button>

                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

            </div>
        </div>

    );
};

export default Users;
