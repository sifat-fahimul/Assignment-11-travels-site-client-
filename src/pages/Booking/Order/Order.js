import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Order = () => {
    const history = useHistory()
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch(`http://localhost:5000/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order place Successfully');
                    reset()
                    history.push('/')
                }
            })
    };
    return (
        <div className='container'>
            <div className="row py-5 my-5 ">
                <div className="col-2"></div>
                <div className="col-8 my-4 border p-4">
                    <h1 className='text-center'>Give your Details For Booking</h1>
                    <div>
                        <form className='shipping-form text-center' onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder='Name' defaultValue={user.displayName} {...register("name")} /> <br /><br />
                            <input placeholder='Email' defaultValue={user.email} {...register("email", { required: true })} /><br /><br />
                            {errors.email && <span className='error'>This field is required</span>}
                            <input placeholder='Address' defaultValue="" {...register("address")} /><br /><br />
                            <input placeholder='City' defaultValue="" {...register("city")} /><br /><br />
                            <input placeholder='Phone' defaultValue="" {...register("phone")} /><br /><br />

                            <input type="submit" />
                        </form>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );
};

export default Order;