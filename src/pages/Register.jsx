import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import fileUpLoad from '../services/fileUpLoad';
import { useDispatch } from 'react-redux';
// import { registerActionAsync } from "../redux/actions/userActions";
import TextField from "@mui/material/TextField";
import { StyledTextField } from "../../src/components/register/StyleRegister";
import { Formulario } from "../components/register/StyleRegister";
import { Button } from "../components/register/StyleRegister";
import { Title } from "../components/register/StyleRegister";
const schema = yup.object({
  email:yup.string().email("Debe ingresar un email").required("Este Campo es Obligatorio"),
  password:yup.string().required("Este Campo es Obligatorio").min(8,"La Contraseña debe contener al menos 8 caracteres.").max(16, "La contraseña no puede contener mas de 16 caracteres").oneOf([yup.ref("repeatPassword")], "Las contraseñas ingresadas no coinciden"),
  repeatPassword:yup.string().required("Este Campo es Obligatorio").min(8,"La Contraseña debe contener al menos 8 caracteres.").max(16, "La contraseña no puede contener mas de 16 caracteres").oneOf([yup.ref("password")], "Las contraseñas ingresadas no coinciden"),
})

const Register = () => {

const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm ({
    resolver: yupResolver(schema),
  });

//  const handleCreateUser = async(dataForm) => {

//  const avatar = await fileUpLoad(dataForm.avatar[0]);
//  const newUser = {
//    ...dataForm,
//    avatar: avatar
//  }
//  console.log(newUser);
//  dispatch(registerActionAsync(newUser));
//  }
  return (
    <section>
      <div>
        <Title>Create account</Title>
      </div>
    <Formulario className='p-5' 
    // onSubmit={handleSubmit(handleCreateUser)}
    >
    <StyledTextField>

      <TextField
       id="standard-basic"
       label="Email"
       variant="standard"
       type="text"      
       {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
      />
    </StyledTextField>
    <StyledTextField>
      <TextField
       id="standard-basic"
       label="Contraseña"
       variant="standard"
       type="text"      
       {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
      />
    </StyledTextField>
    <StyledTextField>
      <TextField
       id="standard-basic"
       label="Repetir Contraseña"
       variant="standard"
       type="text"      
       {...register("repeatPassword")}
            error={!!errors.repeatPassword}
            helperText={errors.repeatPassword?.message}
      />
    </StyledTextField>
    <div>
          <Button>Sing in</Button>
        </div>

  </Formulario>
  </section>
  )
}

export default Register