import React, { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;


const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset} = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        try {
            const res = await fetch(img_hosting_url, {
                method: 'POST',
                body: formData,
            });

            const imgResponse = await res.json();

            if (imgResponse.success) {
                const imgURL = imgResponse.data.display_url;
                const { name, availableSeats, price } = data;
                const newClass = {
                    image: imgURL,
                    name,
                    instructorName: user?.displayName,
                    instructorEmail: user?.email,
                    availableSeats: parseFloat(availableSeats),
                    price: parseFloat(price),
                    status: 'pending',
                };

                const response = await axiosSecure.post('/classes', newClass);

                if (response.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Classes added successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="w-full px-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name*</span>
                    </label>
                    <input type="text" placeholder="Instructor Name" value={user?.displayName}
                        {...register("instructorName", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " readOnly />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email*</span>
                    </label>
                    <input type="text" placeholder="Instructor Email" value={user?.email}
                        {...register("instructorEmail", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " readOnly />
                </div>
                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Available Seats*</span>
                    </label>
                    <input type="number" {...register("availableSeats", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                </div>

                <input className="btn btn-sm mt-4 btn-error text-center" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;