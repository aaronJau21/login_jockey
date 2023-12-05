import { TextField } from "@mui/material"
import { http } from "../../../services/api.js";
import { useState } from "react";
import { getLocal } from "../../../utils/localStorage.js";


const CreateUsuarios = ({ showModal, setShowModal, setUsers, users }) => {
    const token = getLocal();
    const [input, setInput] = useState({
        nombres: "",
        apellidos: "",
        telefono: "",
        email: ""
      });
      const handleChange = (e) => {
        setInput((prevInput) => ({
            ...prevInput,
            [e.target.id]: e.target.value,
          }));
      };

      const handleSubmit = async (e)=> {
        e.preventDefault();

        try {
            const datos = {...input};
            const response = await http.post('/users/create', datos,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUsers([...users, response.data.users]);
            setShowModal(false);
            window.location.reload();
        } catch (error) {
            console.error('Error fetching users:', error);
        }
      }

    


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white w-full mx-[5%] md:mx-[30%] p-5">
                <h2 className="text-center">Crear Usuarios</h2>
                <form onSubmit={handleSubmit} className=" border border-black shadow-lg rounded-md py-5 mt-7">
                    <div className="flex justify-around">
                        <div className="m-2">
                        <TextField
                            onChange={handleChange}
                            id="nombres"
                            label="Nombre del usuario"
                            variant="outlined"
                        />
                        </div>
                        <div className="m-2">
                        <TextField
                            onChange={handleChange}
                            id="apellidos"
                            label="Apellidos del usuario"
                            variant="outlined"
                        />
                        </div>
                    </div>
                    <div className="flex justify-around mt-4">
                        <div className=" m-2">
                        <TextField
                            onChange={handleChange}
                            id="telefono"
                            label="Número del usuario"
                            variant="outlined"
                        />
                        </div>
                        <div className="m-2">
                        <TextField
                            onChange={handleChange}
                            id="email"
                            label="Correo del usuario"
                            variant="outlined"
                        />
                        </div>
                    </div>
                    <div className="flex justify-center mt-9 ">
                        <TextField
                            sx={{ width: '60%' }}
                            id="password"
                            label="Password del usuario"
                            variant="outlined"
                            disabled
                        />
                    </div>
                    <div className="flex justify-center gap-x-4 mt-9">
                        <button type="submit" className="bg-blue-500 px-3 py-1 rounded-md text-white shadow-md">
                            Agregar
                        </button>
                        <button
                            className="bg-red-500 px-3 py-1 rounded-md text-white shadow-md"
                            onClick={() => setShowModal(!showModal)}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateUsuarios