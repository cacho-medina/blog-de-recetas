import { Link } from "react-router-dom";
import ImgAnimation from "../ImgAnimation";
import RecetasContainer from "../Recetas/RecetasContainer";
import { getRecetas } from "../../helpers/queries";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

function Home() {
    const [recetas, setRecetas] = useState([]);
    const getData = async () => {
        const res = await getRecetas();
        if (res.ok) {
            const data = await res.json();
            setRecetas(data);
        } else {
            Swal.fire({
                title: "ERROR!",
                text: `No se pudo obtener informacion de recetas!`,
                icon: "error",
            });
        }
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <motion.div
            className="container-fluid px-0 grow bg-recetas"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 1 },
            }}
            exit={{
                opacity: 0,
            }}
        >
            <section className="bg-light-blue text-center py-3 px-1">
                <div className="my-4">
                    <h1 className="title">
                        ¡Cocina con pasión
                        <br />y creatividad!
                    </h1>
                    <p className="subtitle text-secondary">
                        ¡Comparte tus propias recetas y conecta con otros
                        amantes de la cocina! Descubre miles de recetas
                        deliciosas y fáciles de preparar
                    </p>
                </div>
                <ImgAnimation />
            </section>
            <section className="bg-orange text-light text-center py-4">
                <h2 className="ff-nunito medium fs-1 fw-bold">
                    Comparte tus recetas
                </h2>
                <Link
                    className="btn btn-dark-orange ff-nunito fw-medium px-4 fs-5"
                    to="/crearReceta"
                >
                    Aqui
                </Link>
            </section>
            <RecetasContainer recetas={recetas} />
        </motion.div>
    );
}

export default Home;
