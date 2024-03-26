import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../helpers/queries";
import Swal from "sweetalert2";
import { FaHome } from "react-icons/fa";

function Login({ setUserLogged }) {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const res = await login(data);
        if (res) {
            setUserLogged(data.email);
            Swal.fire({
                title: "Bienvenido",
                text: `Ingresaste correctamente`,
                icon: "success",
            });
            navigate("/administrador");
        } else {
            Swal.fire({
                title: "Error!",
                text: "Usuario no registrado",
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
                <p className="fs-4">Inicia sesion con tu cuenta</p>
                <Form.Group controlId="email">
                    <Form.Control
                        placeholder="correo"
                        type="email"
                        {...register("email", {
                            required: "ingrese su correo electronico",
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
                                message: "Ingrese como minimo 8 caracteres",
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
                    Ingresar
                </Button>
                <p>
                    Sos nuevo por aca?{" "}
                    <Link className="text-orange" to="/register">
                        Registrate
                    </Link>
                </p>
            </Form>
        </Container>
    );
}

export default Login;
