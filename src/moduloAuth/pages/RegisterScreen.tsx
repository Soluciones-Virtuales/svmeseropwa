import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../../components';


export const RegisterScreen = () => {
    return (
        <div>
            <h1>RegisterScreen</h1>

            <Formik
                initialValues={{
                    name: '', 
                    email: '' 
                }}
                onSubmit={ ( values ) => {
                    console.log( values )
                }}
                validationSchema={ Yup.object({
                    name: Yup.string()
                            .max(40, 'No debe tener mas de 40 caracteres')
                            .required('Obligatorio'), 
                    email: Yup.string()
                            .email('El correo no tiene un formato válido')
                            .required('Requerido')
                    })
            }>

                {(formik) => (
                    <Form>

                        <MyTextInput 
                            label="Nombre" 
                            name="name" 
                            placeholder="Escriba el nombre completo"
                        />
                        <MyTextInput 
                            label="Correo" 
                            name="email" 
                            placeholder="Escriba su correo electrónico"
                        />
    
                        <button type="submit">Registrarse</button>

                    </Form>
                )
            }

            </Formik>
        </div>
    )
}

export default RegisterScreen;