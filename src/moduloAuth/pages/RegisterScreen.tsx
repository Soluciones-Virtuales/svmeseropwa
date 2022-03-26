import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { MySelect, MyTextInput } from '../../components';

import dataMenu from '../fields-auth.json';
import useValidations from '../hooks/useValidations';

const formAuth = dataMenu.filter( item => item.form === 'formAuthReg');


export const RegisterScreen = () => {

    const { initialValues, validationSchema } = useValidations({
        formulario: 'formAuthReg'
    });

    return (
        <div>
            <h1>Registrarse</h1>
                     
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
                            Registrarse
                        </button>

                        <Link to="/auth/login" className="auth__link">¿Ya estoy registrado?</Link>
                        
                    </Form>
                )
            }

            </Formik>
        </div>
    )
}

export default RegisterScreen;