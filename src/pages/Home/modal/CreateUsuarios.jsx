import { TextField } from "@mui/material"

const CreateUsuarios = ({ showModal, setShowModal }) => {



    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white w-full mx-[5%] md:mx-[30%] p-5">
                <h2 className="text-center">Crear Usuarios</h2>
                <form className=" border border-black shadow-lg rounded-md py-5 mt-7">
                    <div className="flex justify-around ">
                        <TextField
                            id="nombres"
                            label="Nombre del usuario"
                            variant="outlined"
                        />
                        <TextField
                            id="apellidos"
                            label="Apellidos del usuario"
                            variant="outlined"
                        />
                    </div>
                    <div className="flex justify-around mt-9">
                        <TextField
                            id="telefono"
                            label="Número del usuario"
                            variant="outlined"
                        />
                        <TextField
                            id="email"
                            label="Correo del usuario"
                            variant="outlined"
                        />
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
                        <button className="bg-blue-500 px-3 py-1 rounded-md text-white shadow-md">
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