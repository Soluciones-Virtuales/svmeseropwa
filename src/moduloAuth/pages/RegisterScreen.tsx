import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MySelect, MyTextInput } from '../../components';

import formAuth from '../data-fields.json';
import useValidations from '../hooks/useValidations';


export const RegisterScreen = () => {

    const { initialValues, validationSchema} = useValidations();

    return (
        <div>
            <h1>RegisterScreen</h1>

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
                            formAuth.map( ({ type, name, placeholder, label, options }) => {

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
                                } else if ( type === 'select' ) {
                                    return (
                                        <MySelect 
                                            key={ name }
                                            label={ label }
                                            name={ name }
                                        >
                                            <option value="">Seleccione el país</option>
                                            {
                                                options?.map(({ id, label }) => (
                                                    <option key={ id } value={ id }>{ label }</option>
                                                ))
                                            }
                                        </MySelect>
                                    )
                                }

                            })
                        }

                        <button type="submit">Registrarse</button>

                    </Form>
                )
            }

            </Formik>
        </div>
    )
}

export default RegisterScreen;