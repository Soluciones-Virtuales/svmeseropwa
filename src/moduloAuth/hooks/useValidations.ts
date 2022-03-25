import formAuth from '../data-fields.json';
import * as Yup from 'yup';

const useValidations = () => {
            
    const initialValues: { [key: string]: any } = {};
    const requiredFields: { [key: string]: any } = {};

    for (const input of formAuth) {
        initialValues[ input.name ] = input.value;

        if ( !input.validations ) continue;

        let schema = Yup.string()

        for ( const rule of input.validations ) {
            if ( rule.type === 'required' ) {
                schema = schema.required( rule.description )
            }

            if ( rule.type === "minLength" ) {
                schema = schema.min( (rule as any).value || 2, rule.description )
            }

            if ( rule.type === "maxLength" ) {
                schema = schema.max( (rule as any).value || 40, rule.description )
            }

            if ( rule.type === "email" ) {
                schema = schema.email( rule.description )
            }

            if ( rule.type === "password" ) {
                schema = schema.min( (rule as any).value || 6, rule.description )
            }

            if ( rule.type === "comparePassword" ) {
                schema = schema.oneOf([ Yup.ref('password1') ], rule.description )
            }
        }

        requiredFields[input.name] = schema;
    }

    const validationSchema = Yup.object({ ...requiredFields });

    
    return {
        initialValues, 
        requiredFields, 
        validationSchema
    }
}

export default useValidations;