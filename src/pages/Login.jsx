import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { loginActionAsync } from '../redux/actions/userActions';
import { Link } from 'react-router-dom';
import "../components/login/Login.scss"
import { BsFill0CircleFill } from "react-icons/bs";




const schema = yup.object({

  email: yup
    .string()
    .email("Debe ingresar un email")
    .required("Este campo es obligatorio"),
  password: yup
    .string()
    .required("Este campo es obligatorio")
      
});

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Debes ingresar tu correo electronico")
    .required("Este campo es obligatorio"),
  password: yup.string().required("Este campo es obligatorio"),
});
   
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
          placeholder="Ingrese su email"
          {...register("email")}
        />
        <Form.Text className="text-muted">{errors.email?.message}</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        
        <Form.Control
          type="password"
          placeholder="Ingrese una contraseña"
          {...register("password")}
        />

         <div className='icono'>
        <BsFill0CircleFill/>
        </div> 
        
        <Form.Text className="text-muted">{errors.password?.message}</Form.Text>
      </Form.Group>

      <button type="submit" className= "button ">
        Iniciar Sesión
      </button>

      <p>¿No tines una cuenta? <Link to="/register">Haz click aquí!</Link></p>
      </Form>
      </main>

)
};

  export default Login;
