import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registrarUser } from "../../helpers/queries";
import Swal from "sweetalert2";
import { FaHome } from "react-icons/fa";

function Signup() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const res = await registrarUser(data);
        if (res.ok) {
            Swal.fire({
                title: "Usuario registrado",
                text: `El registro fue completado con exito`,
                icon: "success",
            });
            navigate("/");
        } else {
            Swal.fire({
                title: "Error!",
                text: "No se pudo registrar el usuario",
                icon: "error",
            });
        }
    };

    return (
        <Container className="grow grid">
            <Link className="float btn btn-orange" to="/">
                <FaHome />
                Inicio
            </Link>
            <Form
                className="w-100 text-center form d-flex flex-column gap-2 borderOrange shadow p-2 px-md-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="title">Bienvenido</h1>
                <p className="fs-4">Registrate como nuevo usuario</p>
                <Form.Group controlId="nombre">
                    <Form.Control
                        placeholder="Nombre y apellido"
                        type="nombre"
                        {...register("nombre", {
                            required: "ingrese su nombre y apellido",
                            minLength: {
                                value: 3,
                                message:
                                    "Debe ingresar como minimo 2 caracteres",
                            },
                            maxLength: {
                                value: 40,
                                message:
                                    "Debe ingresar como maximo 40 caracteres",
                            },
                        })}
                    ></Form.Control>
                    {errors.nombre && (
                        <Form.Text className="text-danger">
                            {errors.nombre.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="username">
                    <Form.Control
                        placeholder="Nombre de usuario"
                        type="username"
                        {...register("username", {
                            required: "ingrese su nombre de usuario",
                            minLength: {
                                value: 3,
                                message:
                                    "Debe ingresar como minimo 2 caracteres",
                            },
                            maxLength: {
                                value: 20,
                                message:
                                    "Debe ingresar como maximo 20 caracteres",
                            },
                        })}
                    ></Form.Control>
                    {errors.username && (
                        <Form.Text className="text-danger">
                            {errors.username.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Control
                        placeholder="correo"
                        type="email"
                        {...register("email", {
                            required: "ingrese su correo electronico",
                            pattern: {
                                value: /.+\@.+\..+/,
                                message: "ingrese un correo valido",
                            },
                        })}
                    ></Form.Control>
                    {errors.email && (
                        <Form.Text className="text-danger">
                            {errors.email.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Control
                        placeholder="contraseña"
                        /* type="password" */
                        {...register("password", {
                            required: "ingrese su contraseña",
                            minLength: {
                                value: 8,
                                message: "ingrese al menos 8 caracteres",
                            },
                            maxLength: {
                                value: 16,
                                message: "ingrese un maximo de 16 caracteres",
                            },
                            pattern: {
                                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*.-]).{8,16}$/,
                                message:
                                    "la contraseña debe tener al menos una letra minuscula, una letra mayuscula, un numero y un caracter especial",
                            },
                        })}
                    ></Form.Control>
                    {errors.password && (
                        <Form.Text className="text-danger">
                            {errors.password.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Button
                    variant=""
                    className="align-self-stretch mt-3 btn-orange"
                    type="submit"
                >
                    Registrar
                </Button>
                <p>
                    Ya tienes cuenta?{" "}
                    <Link className="text-orange" to="/login">
                        Inicia sesion
                    </Link>
                </p>
            </Form>
        </Container>
    );
}

export default Signup;
