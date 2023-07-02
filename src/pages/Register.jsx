import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email:yup.string().email("Debe ingresar un email").required("Este Campo es Obligatorio"),
  password:yup.string().required("Este Campo es Obligatorio").min(8,"La Contraseña debe contener al menos 8 caracteres.").max(16, "La contraseña no puede contener mas de 16 caracteres").oneOf([yup.ref("repeatPassword")], "Las contraseñas ingresadas no coinciden"),
  repeatPassword:yup.string().required("Este Campo es Obligatorio").min(8,"La Contraseña debe contener al menos 8 caracteres.").max(16, "La contraseña no puede contener mas de 16 caracteres").oneOf([yup.ref("password")], "Las contraseñas ingresadas no coinciden"),
})

const Register = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm ({
    resolver: yupResolver(schema),
  });

const handleCreateUser = (dataForm) => {
console.log(dataForm);
}
  return (
    <Form className='p-5' onSubmit={handleSubmit(handleCreateUser)}>
    <Form.Group className="mb-3">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Ingrese su email" {...register("email")} />
       <Form.Text className="text-muted">{errors.email?.message}</Form.Text> 
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Ingrese una contraseña" {...register("password")}/>
      <Form.Text className="text-muted">{errors.password?.message}</Form.Text>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Confirmar Password</Form.Label>
      <Form.Control type="password" placeholder="Confirme la contraseña" {...register("repeatPassword")}/>
      <Form.Text className="text-muted">{errors.repeatPassword?.message}</Form.Text>
    </Form.Group>
    <Button variant="primary" type="submit">
      Registrarse
    </Button>
  </Form>
  )
}

export default Register