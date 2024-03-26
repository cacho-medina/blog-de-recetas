import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
    crearReceta,
    getRecetaById,
    editarReceta,
} from "../../helpers/queries";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CrearReceta({ title, editar }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    const obtenerReceta = async () => {
        const res = await getRecetaById(id);
        if (res.ok) {
            const dataReceta = await res.json();
            setValue("nombreAutor", dataReceta.nombreAutor);
            setValue("nombreReceta", dataReceta.nombreReceta);
            setValue("ingredientes", dataReceta.ingredientes);
            setValue("descripcion", dataReceta.descripcion);
            setValue("imagen", dataReceta.imagen);
        }
    };

    const onSubmit = async (receta) => {
        if (editar) {
            const res = await editarReceta(receta, id);
            if (!res.ok) {
                Swal.fire({
                    title: "Error",
                    text: "Algo salio mal!",
                    icon: "error",
                });
            } else {
                Swal.fire({
                    title: "Listo!",
                    text: "La receta fue actualizada con exito!",
                    icon: "success",
                });
            }
        } else {
            const res = await crearReceta(receta);
            if (!res.ok) {
                Swal.fire({
                    title: "Error",
                    text: "Algo salio mal!",
                    icon: "error",
                });
            } else {
                Swal.fire({
                    title: "Listo!",
                    text: "La receta fue subida con exito!",
                    icon: "success",
                });
            }
        }
        navigate("/administrador");
    };

    useEffect(() => {
        if (editar) {
            obtenerReceta();
        }
    }, []);

    return (
        <motion.div
            className="container grow pt-3 pb-2"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.4 },
            }}
            exit={{
                opacity: 0,
            }}
        >
            <h1 className="display-1 ff-nunito fw-bold text-orange text-center">
                {title} Receta
            </h1>
            <hr />
            <Form
                className="d-flex flex-column gap-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Form.Group controlId="nombreAutor">
                    <Form.Label>Nombre completo del autor*</Form.Label>
                    <Form.Control
                        type="text"
                        {...register("nombreAutor", {
                            required: "Ingrese el nombre y apellido del autor",
                            minLength: {
                                value: 6,
                                message: "Ingrese un nombre valido",
                            },
                        })}
                    ></Form.Control>
                    {errors.nombreAutor && (
                        <Form.Text className="text-danger">
                            {errors.nombreAutor.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="nombreReceta">
                    <Form.Label>Nombre de la receta*</Form.Label>
                    <Form.Control
                        type="text"
                        {...register("nombreReceta", {
                            required: "Ingrese el titulo de receta",
                            minLength: {
                                value: 5,
                                message: "Ingrese un titulo valido",
                            },
                            maxLength: {
                                value: 50,
                                message:
                                    "Ingrese un titulo que tenga como maximo 50 caracteres",
                            },
                        })}
                    ></Form.Control>
                    {errors.nombreReceta && (
                        <Form.Text className="text-danger">
                            {errors.nombreReceta.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="ingredientes">
                    <Form.Label>Ingredientes*</Form.Label>
                    <Form.Control
                        type="text"
                        {...register("ingredientes", {
                            required:
                                "Introduzca los ingredientes utilizados separados por una coma",
                            minLength: {
                                value: 10,
                                message: "Ingrese todos los ingredientes",
                            },
                        })}
                    ></Form.Control>
                    {errors.ingredientes && (
                        <Form.Text className="text-danger">
                            {errors.ingredientes.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="descripcion">
                    <Form.Label>Descripcion del proceso*</Form.Label>
                    <Form.Control
                        as="textarea"
                        {...register("descripcion", {
                            required:
                                "Ingrese una explicacion detallada del proceso",
                            minLength: {
                                value: 10,
                                message: "Ingrese una descripcion valida",
                            },
                        })}
                    ></Form.Control>
                    {errors.descripcion && (
                        <Form.Text className="text-danger">
                            {errors.descripcion.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="imagen">
                    <Form.Label>Imagen URL*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: https://www.pexels.com/es-es/imagen.png"
                        name="url"
                        {...register("imagen", {
                            required: "ingrese una url de imagen",
                            pattern: {
                                value: /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
                                message: "ingrese una url válida",
                            },
                        })}
                    />
                    {errors.imagen && (
                        <Form.Text className="text-danger">
                            {errors.imagen.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Button
                    variant=""
                    className="btn-orange align-self-md-center w-150"
                    type="submit"
                >
                    Enviar
                </Button>
            </Form>
        </motion.div>
    );
}

export default CrearReceta;
