import { useState } from "react";

const useValidation = () => {
    const [inputError, setInputError] = useState({
        user: "",
        password: "",
    });
    const EMAILREGEX = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
    const validateteInput = (name, ref) => {

        if (name === "email") {
            if (!ref.length) {
                setInputError((e) => ({ ...e, email: "Campo obligatorio" }));
            } else if (!EMAILREGEX.test(ref)) {
                setInputError((e) => ({
                    ...e,
                    email: "Debe ser una dirección de correo válida",
                }));
            } else {
                setInputError((e) => ({ ...e, email: "" }));
            }
        }

        else {
            if (!ref.length) {
                setInputError((e) => ({ ...e, password: "Campo obligatorio" }));
            } else {
                setInputError((e) => ({ ...e, password: "" }));
            }
        }
    };
    return {inputError, setInputError, validateteInput};
};

export default useValidation;