import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddTrip.css'

const AddTrip = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/booking', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('add service successfully !');
                    reset();
                }
            })
    }
    return (
        <div className='add-trip text-center my-5 py-5'>
            <h1>Add a Trip</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true, maxLength: 100 })} placeholder='Trip Title' />
                <textarea {...register("description",)} placeholder='Description' />
                <input {...register("img",)} placeholder='img-url' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddTrip;