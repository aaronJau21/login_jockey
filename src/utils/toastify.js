import { toast } from 'react-toastify';

const commonOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
};

export const HookLogin = () => {
    const handleLogin = () => {
        toast.success('Bienvenido', {
            ...commonOptions,
        });
    };

    const handleNoLogin = () => {
        toast.warning('Clave o Usuario incorrecto', {
            ...commonOptions,
        });
    };
    const handleNoAdmin = () => {
        toast.error('No tiene acceso de Admin', {
            ...commonOptions,
        });
    };

    const toastifyRestorePassword = (response) => {
        toast.success(response, {
            ...commonOptions,
        });
    }
    const toastifyRestorePasswordError = (response) => {
        toast.error(response, {
            ...commonOptions,
        });
    }

    const toastifyForgotPassword = (response) => {
        toast.success(response, {
            ...commonOptions,
        });
    }

    const toastifyDeleteUser = (response) => {
        toast.success(response, {
            ...commonOptions,
        });
    }


    return { handleLogin,toastifyDeleteUser, handleNoLogin, handleNoAdmin, toastifyRestorePassword, toastifyRestorePasswordError, toastifyForgotPassword };
};