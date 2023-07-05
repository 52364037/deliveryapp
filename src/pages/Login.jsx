import React from "react";
import TextField from "@mui/material/TextField";
import {
  ContainerTextField,
  Image,
  Formulario,
  ButtonLogin,
  SpanLogin,
} from "../../src/components/login/Login";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Debes ingresar tu correo electronico")
    .required("Este campo es obligatorio"),
  password: yup.string().required("Este campo es obligatorio"),
});
const Login = () => {
  // const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // const login = (data) => {
  //   console.log(data)
  //   dispatch(actionLoginAsync(data.email, data.password))
  // }

  // const handleTogglePassword = () => {
  //   setShowPassword(!showPassword);
  // };

  // const handleLoginGoogle = (provider) => {
  //   dispatch(actionLoginGoogle(provider));
  // };

  return (
    <section>
      <figure>
        <Image
          src="https://sprint-final-23fa8.web.app/static/media/logo.d35a45a3abc1c9b520c842d9997b03c5.svg"
          alt=""
        />
      </figure>
      <div>
        <SpanLogin>
          Login or create an account with your phone number to start ordering
        </SpanLogin>
      </div>
      <Formulario
      // onSubmit={handleSubmit(login)}
      >
        <ContainerTextField>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            type="email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </ContainerTextField>
        <ContainerTextField>
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </ContainerTextField>
        <div>
          <ButtonLogin>Login</ButtonLogin>
        </div>
        <p>
          ¿No tienes una cuenta? <Link to="/register">Haz click aquí</Link>
        </p>
      </Formulario>
    </section>
  );
};

export default Login;
