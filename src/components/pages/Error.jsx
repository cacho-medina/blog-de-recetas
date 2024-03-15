import { Link } from "react-router-dom";
import trash from "../../assets/trash.svg";
import { motion } from "framer-motion";

function Error() {
    return (
        <motion.div
            className="container grow pt-2 text-center py-2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <img src={trash} alt="imagen de basurero" className="max-img" />
            <h1 className="display-1 fw-bold text-danger mt-3 title">
                ERROR 404
            </h1>
            <Link className="btn btn-orange px-4" to="/">
                Volver a home
            </Link>
        </motion.div>
    );
}

export default Error;
