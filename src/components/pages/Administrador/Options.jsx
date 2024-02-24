import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Options({ borrarReceta, id }) {
    return (
        <div className="d-flex gap-1">
            <Button variant="danger" onClick={borrarReceta}>
                <FaTrashAlt />
            </Button>
            <Link
                to={`/administrador/editarReceta/${id}`}
                className="btn bg-light-blue border"
            >
                <FiEdit />
            </Link>
        </div>
    );
}

export default Options;
