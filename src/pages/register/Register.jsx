  import React from "react";
  import Button from "react-bootstrap/Button";
  import Form from "react-bootstrap/Form";
  import { useForm } from "react-hook-form";
  import { yupResolver } from "@hookform/resolvers/yup";
  import * as yup from "yup";
  import fileUpLoad from "../../services/fileUpLoad";
  import { useDispatch } from "react-redux";
  import { registerActionAsync } from "../../redux/actions/userActions";
  import "./StyleRegister.scss";
  import { IoIosEye } from 'react-icons/io';


  const schema = yup.object({
    name: yup.string().required("Por favor ingresar su nombre"),
    email: yup
      .string()
      .email("Debe ingresar un email")
      .required("Este campo es obligatorio"),
    password: yup
      .string()
      .required("Este campo es obligatorio")
      .min(8, "La contraseña debe contener al menos 8 caracteres.")
      .max(16, "La contraseña no puede contener más de 16 caracteres")
      .oneOf(
        [yup.ref("repeatPassword")],
        "Las contraseñas ingresadas no coinciden"
      ),
    repeatPassword: yup
      .string()
      .required("Este campo es obligatorio")
      .min(8, "La contraseña debe contener al menos 8 caracteres.")
      .max(16, "La contraseña no puede contener más de 16 caracteres")
      .oneOf([yup.ref("password")], "Las contraseñas ingresadas no coinciden"),
    avatar: yup
      .mixed()
      //.required()
      // .file(
      //   ["image/jpeg", "image/png"],
      //   "Solo se permiten archivos JPEG y PNG"
      // )
      .test("file", "Por favor ingrese una imagen", (value) =>
        value.length > 0 ? true : false
      ),
    //.test('fileType', "Formato no válido", (value) => value && value.type === '')
  });

  const Register = () => {

    const dispatch = useDispatch();

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });

    const handleCreateUser = async(dataForm) => {
      
      const avatar = await fileUpLoad(dataForm.avatar[0]);
      const newUser = {
        ...dataForm,
        avatar: avatar
      }
      console.log(newUser);
      dispatch(registerActionAsync(newUser));
    };
    return (
      <Form className="p-5" onSubmit={handleSubmit(handleCreateUser)}>
        <Form.Group className="mb-3">
          <Form.Label>Create account</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            {...register("name")}
          />
          <Form.Text className="text-muted">{errors.name?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          {/* <Form.Label></Form.Label> */}
          <Form.Control
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <Form.Text className="text-muted">{errors.email?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          {/* <Form.Label></Form.Label> */}
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <div className='icono_ojo'>
              <IoIosEye />
            </div>
          <Form.Text className="text-muted">{errors.password?.message}</Form.Text>
        </Form.Group>
        

        <Form.Group className="mb-3">
          <Form.Label>Confirmar Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirme la contraseña"
            {...register("repeatPassword")}
          />
          <Form.Text className="text-muted">
            {errors.repeatPassword?.message}
          </Form.Text>
        </Form.Group>
      <div className="border_color">
      <Form.Group className="mb-3">
          {/* <Form.Label></Form.Label> */}
          <Form.Control type="file" {...register("avatar")} />
          <Form.Text className="text-muted">{errors.avatar?.message}</Form.Text>
        </Form.Group>
      </div>
        <div className="boton_register">
        <Button variant="" type="submit">
          Sing in
        </Button>
        </div>
        <div className="login_inicio">
        <Button variant="" type="submit">
          Login
        </Button>
        </div>
      </Form>
    );
  };

  export default Register;