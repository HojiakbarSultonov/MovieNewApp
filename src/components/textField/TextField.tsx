import React from 'react'
import { TextFieldProps } from './TextField.Props'
import { FieldHookConfig, useField, ErrorMessage } from 'formik'


function TextField({ ...props }: TextFieldProps & FieldHookConfig<string>) {
    const [field, meta,] = useField(props)

    return (

        <div className='inline-block w-full '>
            <label className={`inline-block w-full ${meta.touched && meta.error && 'border-red-500 border-2'}`} >
                <input type="text"  {...props} className='input' {...field} />
            </label>
            <p className='text-red-500'>
                <ErrorMessage name={field.name} />
            </p>
        </div>
    )
}

export default TextField