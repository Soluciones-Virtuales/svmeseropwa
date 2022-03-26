import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { MyTextInput } from '../../components';

import dataMenu from '../fields-auth.json';
import useValidations from '../hooks/useValidations';

const formAuth = dataMenu.filter( item => item.form === 'formAuthLog');


export const LoginScreen = () => {

    const { initialValues, validationSchema } = useValidations({
        formulario: 'formAuthLog'
    });

    return (
        <div>
            <h1>Iniciar Sesión</h1>
                     
            <Formik
                initialValues={ initialValues }
                onSubmit={ ( values ) => {

                    console.log( values )

                }}
                validationSchema={ validationSchema }
            >

                {(formik) => (
                    <Form noValidate>
                        {
                            // formAuth.map( ({ type, name, placeholder, label, options }) => {
                            formAuth.map( ({ type, name, placeholder, label }) => {

                                if ( type === 'input' || type === 'password' || type === 'email' ) {
                                    return (
                                        <MyTextInput 
                                            key={ name }
                                            type={(type as any)}
                                            name={ name } 
                                            label={ label } 
                                            placeholder={ placeholder }
                                        />
                                    )
                                } 
                                // else if ( type === 'select' ) {
                                //     return (
                                //         <MySelect 
                                //             key={ name }
                                //             label={ label }
                                //             name={ name }
                                //         >
                                //             <option value="">Seleccione el país</option>
                                //             {
                                //                 options?.map(({ id, label }) => (
                                //                     <option key={ id } value={ id }>{ label }</option>
                                //                 ))
                                //             }
                                //         </MySelect>
                                //     )
                                // }

                            })
                        }

                        <button 
                            type="submit"
                            className="auth__boton"
                        >
                            Iniciar Sesión
                        </button>

                        <Link to="/auth/register" className="auth__link">Crear una cuenta</Link>

                    </Form>
                )
            }

            </Formik>
        </div>
    )
}

export default LoginScreen;