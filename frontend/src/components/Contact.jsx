import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './Contact.css'

const Contact = () => {
    const [showForm, setShowForm] = useState(true)

    const validationSchema = Yup.object().shape({
        fname: Yup.string().required('First Name is required').matches(/^[a-zA-Z]+$/, 'First Name must contain only letters'),
        lname: Yup.string().required('Last Name is required').matches(/^[a-zA-Z]+$/, 'Last Name must contain only letters'),
        mail: Yup.string()
            .email('Invalid email')
            .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Must be a valid Gmail address')
            .required('Email is required'),
        phone: Yup.string().required('Phone number is required')
            .min(10, "Phone number must be 10 digits long")
            .max(10, "Phone number must be 10 digits long")
            .matches(/^[7-9]\d{9}$/, { message: 'Phone Number must start with 7, 8 or 9', excludeEmptyString: false }),
        service: Yup.string().required('Please select at least one item from the dropdown'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    // console.log('errors', errors)

    // const { mutate: mutateFormData } = usePostFormData()

    const onSubmit = async (data) => {
        console.log(data);
        try {
            // const response = await fetch('https://your-backend-api.herokuapp.com/contactFormForFreelanceProjhect', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(data)
            // })
            setShowForm(false)
            console.log('showForm', showForm)
            // if (!response.ok) {
            //     throw new Error('Network response was not ok')
            // }
            const responseData = await response.json();
        } catch (error) {
            console.log('error', error)
        }
    };
    return (
        <>
            {showForm &&
                <div className='contact'>
                    <h2>Hire Us</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="custom-form" noValidate>
                        <input type="text" name="fname" id="fname" placeholder='First Name' {...register('fname')} autoComplete='off' />
                        {!!errors?.fname && <p>{errors?.fname?.message}</p>}
                        <input type="text" name="lname" id="lname" placeholder='Last Name' {...register('lname')} autoComplete='off' />
                        {!!errors?.lname && <p>{errors?.lname?.message}</p>}
                        <input type="mail" name="mail" id="mail" placeholder='Gmail' {...register('mail')} autoComplete='off' />
                        {!!errors?.mail && <p>{errors?.mail?.message}</p>}
                        <input type="number" name="phone" id="phone" placeholder='Phone' {...register('phone')} autoComplete='off' min={10} maxlength="10" />
                        {!!errors?.phone && <p>{errors?.phone?.message}</p>}
                        <select {...register('service')} placeholder='Select Service' autoComplete='off'>
                            <option value="">Select Service</option>
                            <option value="CCTV-Installation">CCTV Installation</option>
                            <option value="FIRE-Equipment">Fire Equipments</option>
                            <option value="GAS-Pipeline">Gas Pipeline Installation</option>
                            <option value="ROAD-Construction">Road Construction</option>
                        </select>
                        {!!errors?.service && <p>{errors?.service?.message}</p>}
                        <button type='submit'>Submit</button>
                    </form>
                </div>}
            {!showForm && <div className='message'>
                <h2>Thank You!</h2>
                <p>Your submission has been received successfully.</p>
                <p>We appreciate your time and will get back to you as soon as possible.</p>
            </div>}
        </>
    )
}

export default Contact
