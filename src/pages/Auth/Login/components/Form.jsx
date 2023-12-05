import { createRef, useState } from "react";
import { http } from "../../../../services/api";
import { setLocal } from "../../../../utils/localStorage";
import useValidation from "../../../../utils/validation";
import { HookLogin } from "../../../../utils/toastify";
const Form = ({ navigate }) => {
    const {handleNoLogin, handleLogin} = HookLogin();
    const { inputError, validateteInput } = useValidation();
    const [visiblePass, setVisiblePass] = useState(false);
    const emailRef = createRef()
    const passwordlRef = createRef()

    const handleSubmit = async (e) => {
        e.preventDefault()

        validateteInput("email", emailRef.current?.value);
        validateteInput("password", passwordlRef.current?.value);
        if (inputError.email || inputError.password) {
            handleNoLogin()
            return;
        }


        try {
            const datos = {
                email: emailRef.current?.value,
                password: passwordlRef.current?.value
            }
            const { data } = await http.post('/users/login', datos);
            setLocal(data.token, data.user)
            navigate('/users')
            handleLogin()
        } catch (error) {
            handleNoLogin()
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
                            {inputError.email && (
                            <p className="text-red-700">{inputError.email}</p>
                            )}
                        </div>
                        <div className="relative mb-8 ">
                            <input
                                className="text-slate-50 w-96 p-2 rounded-3xl  bg-gray-500/50 hover:bg-transparent "
                                type={visiblePass ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="Ingrese contraseña"
                                ref={passwordlRef}
                            />
                            <span
                            onClick={() => setVisiblePass(!visiblePass)}
                            className="absolute right-3 top-2 w-6 h-6 cursor-pointer"
                            >
                            {visiblePass ? (
                            <img
                            style={{
                            filter:
                            "invert(1) sepia(1) saturate(0) hue-rotate(0deg)",
                            }}
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACSUlEQVR4nO2WS0hVURSGv0ui4aNQIwKzRMEbXKhZTmweRFCDBqmRQTiyRlJUsyZBDcIg0pm9BIPEQYOaVJQOemiTiDILzYFGYm+RLG8c+LXFdp/jKS/cQfeHxT177bX3/vd67Qs55LAU24BeoJgsIAEMAWngQbZIbAbeikQ/UPLfkqgGxjzh2AG8A2YlU8AzoAc4CiQzRaAAOCsCgTw0nmgCfpo5Vx4De5VT/4R9wLhn437jiXxgLVAHnAE+e+yfAPV/c3AhcN1sMGO+vxpP+KpjPXDPYz8HnIjjjXLgkTn4JPBC404nJ8JI5Ctf0uol7cAvjbuBVWGHFytuabk+BTRoPKx8ICaJSl0gOLgW2Al805qrYZ64JoMRYJN0t6U77NhuNbcKK9EOzZ/WuM7kyHHX+KAmPgJbpEsY1usc+xuexHRJ7NLcXaPbLeJzusQi3su40ejKpAtYW5SY21txw5E04bM47yHGZASBT84Gq4EfIbVvm9VG9YnXzvqLsr1vlc0mBMkYIVjIFyvfPSQOAHfMuj3AvC8ECeCmNngFVDhJeMgThiDJPgATwCmgJqQ6Nui33pA8hgdrgKcyGJUn9mv8EshjedgStYkZNKgv0l+JakhlwKDpYm3Ac40vEA8pudj1RPB2dEU1ogUUAZc97TSQS0rCMFTo0KjqiI0m404rY/JMSu9GqZrMOYdsRkgUAEeANxHPbpgMAC3637AiEihptutx6tMDNa1Yz6gShpRgrUAVf1CTKRIrgSURvKpki8QtT1PLIQd+A6sH9XldevQeAAAAAElFTkSuQmCC"
                            ></img>
                            ) : (
                            <img
                            style={{
                            filter:
                            "invert(1) sepia(1) saturate(0) hue-rotate(0deg)",
                            }}
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAByklEQVR4nO2VSS4EYRTHfx3DhnYJYtpghZhdQVgZbiDWtJX5ChxAaCfgBKZg0QlbtIQgJDbElC/5l7x8qlpXE6v6J29Rr970vRESJEiQoDg0A1NAFjgB7oEX0b14Wck08UdIASPAIfARkw6AYdkoCf0y4hu+BmaAVqBK1AZk9M+X3wd64756FniVgQtjbBNIF9BNS+bD031V0D9mowLYktIDMArsGOfFpDOlXnA628A48KjvrHyEoswoXgINQI9Je6GXh2UiKEc30Cib7ntDvr5hWQLnQK14a+K59FlUAivAFZCXruNZZKS7qu86U5IF3/kg8K6Rajf8Mym0RARryfEsWsU/NbwO+XhXk38hJ+F5z8iT+H768yEBOJ5FWnxnw2Je/JwtRe4fA1gIC2DAlMClKcBpjBIsFVGCTvl4A/o8eRbN7LqGsU3oGsqiUkHkCzThbIEmnCMEZRqRYAwbfzGGNcCNdLt0G4KyrUeNob+I3PIY+4NFNOEtovJiDMxErOKsXheFGuPcX8XTcQ9TD7AXcYwyOkDVojbVPEi7pV1tw5KQAoZ00eKe4z3plnyOfbjbMKlGPQbugGfRLXCkf06m/pt2ggQJiMYnTVLZiMOUIEkAAAAASUVORK5CYII="
                            />
                            )}
                            </span>
                            {inputError.password && (
                            <p className="text-red-700">{inputError.password}</p>
                            )}
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
