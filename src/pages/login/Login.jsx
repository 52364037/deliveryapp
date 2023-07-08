import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { loginActionAsync, actionLoginGoogle } from '../../redux/actions/userActions';
import { Link } from 'react-router-dom';
import "./Login.scss";
import { IoIosMail } from 'react-icons/io';
import { IoIosLock } from 'react-icons/io';
import { IoIosEye } from 'react-icons/io';
import google from '../../assets/google-logo.png';
import '../../assets/logo-facebook.png';

const schema = yup.object({

  email: yup
    .string()
    .email("Debe ingresar un email")
    .required("Este campo es obligatorio"),
  password: yup
    .string()
    .required("Este campo es obligatorio")

});

// const validationSchema = yup.object({
//   email: yup
//     .string()
//     .email("Debes ingresar tu correo electronico")
//     .required("Este campo es obligatorio"),
//   password: yup.string().required("Este campo es obligatorio"),
// });

const Login = () => {

  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const logIn = (dataForm) => {
    console.log(dataForm);
    dispatch(loginActionAsync(dataForm.email, dataForm.password));
  }

  const handleGoogleLogin = () => dispatch(actionLoginGoogle());

  return (
    <main className="main">
      <figure className='imagen_login'>
        <img src="https://sprint-final-23fa8.web.app/static/media/logo.d35a45a3abc1c9b520c842d9997b03c5.svg" alt="" />
      </figure>
      <div>
        <span className='span'>
          Login or create an account with your phone number to start ordering
        </span>
      </div>
      <Form className="p-5" onSubmit={handleSubmit(logIn)}>
        <Form.Group className="mb-3">

          <Form.Control
            type="email"
            placeholder=""
            {...register("email")}
          />
          <Form.Text className="text-muted">{errors.email?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">

          <Form.Control
            type="password"
            placeholder=""
            {...register("password")}
          />
          <div className='icono_sobre'>
            <IoIosMail />
          </div>
          <div className='icono_candado'>
            <IoIosLock />
          </div>
          <div className='icono_ojo'>
            <IoIosEye />
          </div>
          <Form.Text className="text-muted">{errors.password?.message}</Form.Text>
        </Form.Group>


        <button type="submit" className="button ">
          Login
        </button>
        


        <div className='crear_usuario'>
          <p> <Link to="/register">Create account</Link></p>
        </div>
      </Form>
     <div className='Login_google'>
     <figure onClick={handleGoogleLogin}>
        <img src={google} alt="google" />
        <p>LOGIN WITH GOOGLE</p>
      </figure>
     </div>
     {/* <div>
      <figure className='logo_face'>
        <img src="../../assets/logo-facebook.png" alt="" />
      </figure>
     </div> */}
     
    </main>

  )
};

export default Login;
