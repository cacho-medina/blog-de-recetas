const api_recetas = import.meta.env.VITE_API_RECETAS;
const api_usuarios = import.meta.env.VITE_API_USUARIOS;

export const getRecetas = async () => {
    try {
        const res = await fetch(api_recetas);
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const getRecetaById = async (id) => {
    try {
        const res = await fetch(`${api_recetas}/${id}`);
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const crearReceta = async (receta) => {
    try {
        const res = await fetch(api_recetas, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(receta),
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const editarReceta = async (receta, id) => {
    try {
        const res = await fetch(`${api_recetas}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(receta),
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const deleteReceta = async (id) => {
    try {
        const res = await fetch(`${api_recetas}/${id}`, {
            method: "DELETE",
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const registrarUser = async (user) => {
    try {
        const res = await fetch(api_usuarios, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const login = async (credenciales) => {
    try {
        const res = await fetch(api_usuarios);
        const usuarios = await res.json();
        const userLogged = usuarios.find(
            (user) =>
                user.email === credenciales.email &&
                user.password === credenciales.password
        );
        if (userLogged) {
            sessionStorage.setItem(
                "loginAdmin",
                JSON.stringify(userLogged.email)
            );
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
    }
};

export const logout = () => {};
