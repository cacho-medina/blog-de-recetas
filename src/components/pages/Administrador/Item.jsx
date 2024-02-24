import { deleteReceta, getRecetas } from "../../../helpers/queries";
import Options from "./Options";
import Swal from "sweetalert2";

function ItemProd({ receta, setRecetas }) {
    const { id, nombreAutor, nombreReceta, descripcion, ingredientes } = receta;
    const borrarReceta = () => {
        Swal.fire({
            title: "Estas seguro de eliminar la receta?",
            text: "Una vez hecho esto no se puede recuperar!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#b3c4c1",
            confirmButtonText: "Eliminar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await deleteReceta(id);
                if (res.status === 200) {
                    Swal.fire({
                        title: "Receta eliminada!",
                        text: `La receta "${nombreReceta}" fue eliminada correctamente`,
                        icon: "success",
                    });
                    const res = await getRecetas();
                    if (res.status === 200) {
                        const data = await res.json();
                        setRecetas(data);
                    }
                } else {
                    Swal.fire({
                        title: "ERROR!",
                        text: `La receta "${nombreReceta}" no se pudo eliminar`,
                        icon: "error",
                    });
                }
            }
        });
    };

    return (
        <>
            <tr>
                <td>{id}</td>
                <td style={{ maxWidth: 120 }}>{nombreReceta}</td>
                <td>{nombreAutor}</td>
                <td className="text-truncate" style={{ maxWidth: 150 }}>
                    {descripcion}
                </td>
                <td className="text-truncate" style={{ maxWidth: 150 }}>
                    {ingredientes}
                </td>
                <td className="d-flex align-items-center justify-content-center gap-1">
                    <Options borrarReceta={borrarReceta} id={id} />
                </td>
            </tr>
        </>
    );
}

export default ItemProd;
