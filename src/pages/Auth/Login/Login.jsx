
import bg from "../../../../image/portal2.jpeg";
import { useNavigate } from 'react-router-dom'
import Logo from "./components/Logo";
import Form from "./components/Form";

const Login = () => {
    const navigate = useNavigate()
    return (
        <div
            style={{ "--image-url": `url(${bg})` }}
            className="bg-center bg-cover bg-no-repeat bg-local h-screen overflow-x-hidden bg-[image:var(--image-url)]"
        >
            <Logo />
            <div className="col-md-6 text-center mb-16 flex justify-center items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-12 h-12"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    />
                </svg>

                <h1 className="font-sans text-white text-4xl">Mapa Comercial</h1>
            </div>
            <div>
                <Form navigate={navigate} />
            </div>
        </div>
    )
}

export default Login