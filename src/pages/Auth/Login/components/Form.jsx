import { createRef } from "react";
import { http } from "../../../../services/api";
import { setLocal } from "../../../../utils/localStorage";

const Form = ({ navigate }) => {

    const emailRef = createRef()
    const passwordlRef = createRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const datos = {
                email: emailRef.current?.value,
                password: passwordlRef.current?.value
            }
            const { data } = await http.post('/users/login', datos);
            setLocal(data.token, data.user)
            navigate('/users')
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="row flex justify-center m-2">
            <div className="col-md-6 col-lg-4">
                <div className="login-wrap relative rounded-2xl  p-2 bg-gray-600/40">
                    <h2 className="mb-2 text-white text-center text-2xl font-light">
                        Ingrese Credenciales
                    </h2>

                    <form onSubmit={handleSubmit} className="block">
                        <div className="relative mb-8">
                            <input
                                className="text-white w-96 p-2 rounded-3xl bg-gray-500/50 hover:bg-transparent"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Correo Electrónico"
                                ref={emailRef}
                            />
                        </div>
                        <div className="relative mb-8 ">
                            <input
                                className="text-slate-50 w-96 p-2 rounded-3xl  bg-gray-500/50 hover:bg-transparent "
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Ingrese contraseña"
                                ref={passwordlRef}
                            />
                        </div>
                        <div className="relative mb-8">
                            <button
                                type="submit"
                                className="bg-red-300 submit text-slate-50 font-semibold text-xl w-96 p-2 rounded-3xl border hover:bg-red-500"
                            >
                                Ingresar
                            </button>
                        </div>
                        <div className="relative mb-8 ml-32 md:ml-0 md:flex justify-between items-center">
                            <div className="w-50">

                                <input
                                    className="bg-red-300 w-4 h-4"
                                    type="checkbox"
                                />
                                <label className="text-red-300 ml-2 text-xl font-medium checkbox-wrap checkbox-primary">
                                    Recordar
                                    <span className="checkmark"></span>
                                </label>

                            </div>
                            <div className="w-50 text-md-right">
                                <a
                                    className="text-xl text-white font-semibold hover:text-red-700"
                                >
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
