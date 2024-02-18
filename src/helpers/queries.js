const api_recetas = import.meta.env.VITE_API_RECETAS;

export const getRecetas = async (setRecetas) => {
    const res = await fetch(api_recetas);
    const data = await res.json();
    setRecetas(data);
    return data;
};

export const getRecetaById = async (id) => {
    
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
