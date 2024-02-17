import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function CrearReceta() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (receta) => {
        alert("Receta creada!");
        console.log(receta);
    };

    return (
        <Container className="grow py-3">
            <h1 className="display-1 ff-nunito fw-bold text-orange text-center">
                Cargar Receta
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
                <Button variant="" className="btn-orange" type="submit">
                    Enviar
                </Button>
            </Form>
        </Container>
    );
}

export default CrearReceta;
