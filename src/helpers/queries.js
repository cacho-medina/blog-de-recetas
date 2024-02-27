const api_recetas = import.meta.env.VITE_API_RECETAS;

console.log(api_recetas);

export const getRecetas = async () => {
    try {
        const res = await fetch(api_recetas);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getRecetaById = async (id) => {
    try {
        const res = await fetch(`${api_recetas}/${id}`);
        return res;
    } catch (error) {
        console.log(error);
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
        console.log(error);
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
        console.log(error);
    }
};

export const deleteReceta = async (id) => {
    try {
        const res = await fetch(`${api_recetas}/${id}`, {
            method: "DELETE",
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
