const api_recetas = import.meta.env.VITE_API_RECETAS;

export const getRecetas = async () => {
    try {
        const res = await fetch(api_recetas);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getRecetaById = async (id, setReceta) => {
    try {
        const res = await getRecetas();
        const data = await res.json();
        const receta = data.find((receta) => receta.id === id);
        setReceta(receta);
        return receta;
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

export const deleteReceta = async (id) => {
    try {
        const res = await getRecetas();
        const data = await res.json();
        const recetasFiltered = data.filter((item) => item.id === id);
        return "Borrado exitoso";
    } catch (error) {}
};
