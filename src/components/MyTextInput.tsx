import { useField, Field, ErrorMessage } from 'formik';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    [x: string]:any;
}


export const MyTextInput = ( { label, ...props }: Props ) => {
    const [ field, meta ] = useField( props );

    return (
        <div
            style={{
                display: 'flex', 
                flexDirection: 'column'

            }}
        >
            <label className="auth__label" htmlFor={ props.id || props.name } >{ label }</label>
            {
                (meta.touched && meta.error) ? (
                    <input className="auth__input_error" { ...field } { ...props } />
                ): (
                    <input className="auth__input" { ...field } { ...props } />
                )
            }

            <ErrorMessage name={ props.name } component="span" />
            {/* {
                meta.touched && meta.error && (
                    <span className="error">{ meta.error }</span>
                )
            } */}
        </div>
    )
}
