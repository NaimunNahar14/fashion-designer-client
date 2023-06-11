import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../Hooks/UseAxiosSecure';
import { AuthContext } from '../Providers/AuthProvider';

const Reviews = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data); // Handle form submission logic here
    };
    return (
        <div>
            <h2 className='text-3xl text-center'>Students Review Page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Student Name</label>
                    <input {...register('username', { required: true })} value={user?.displayName} />
                    {errors.username && <span>This field is required</span>}
                </div>
                <div>
                    <label>Student Email</label>
                    <input {...register('email', { required: true })} value={user?.email} readOnly />
                    {errors.email && <span>Please enter a valid email address</span>}
                </div>
                <div>
                    <label>Description</label>
                    <textarea {...register('description', { required: true })} className="textarea textarea-bordered h-24" />
                    {errors.description && <span>This field is required</span>}
                </div>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
};

export default Reviews;