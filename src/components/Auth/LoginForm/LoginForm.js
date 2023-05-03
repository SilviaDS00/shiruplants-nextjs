import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { initialValues, validationSchema } from "./LoginForm.form";
import { useAuth } from "@/hooks";
import { Auth } from "@/api";

const authCtrl = new Auth();

export function LoginForm() {
  const router = useRouter();

  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await authCtrl.login(formValue);
        login(response.jwt);
        //router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        fluid
        name="identifier"
        type="text"
        placeholder="Correo electronico o nombre de usuario"
        value={formik.values.identifier}
        onChange={formik.handleChange}
        error={formik.errors.identifier}
      />
      <Form.Input
        fluid
        name="password"
        type="password"
        placeholder="Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Entrar
      </Form.Button>
    </Form>
  );
}