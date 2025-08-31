import React from 'react'
import { useForm } from "react-hook-form"

function ReactForm() {
    const { register, handleSubmit,  formState: { errors,isSubmitting } } = useForm()
    async function onSubmit(data) {

        await new Promise((resolve)=>setTimeout(resolve,5000));
        console.log("submitting the form", data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>First Name:</label>
                <input {...register('firstName',
                    {
                        required: true,
                        minLength: { value: 3, message: 'Min Length atleast 3' },
                        maxLength: { value: 6, message: 'Max Length atmost 6' }
                    })} />
                {errors.firstName && <p>{errors.firstName.message}</p>}

            </div>
            <br />
            <div>
                <label>Middle Name:</label>
                <input {...register('middleName')} />
            </div>
            <br />
            <div>
                <label>Last Name:</label>
                <input {...register('lastName',{
                pattern:{
                    value:/^[A-Za-z]+$/i,
                    message: "Last name is not as per the rules"
                }

})} />
{errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
            <br />
            <input type='submit' disable={isSubmitting} value={isSubmitting ?"Submitting":"Submit"}/>
        </form>
    )
}

export default ReactForm