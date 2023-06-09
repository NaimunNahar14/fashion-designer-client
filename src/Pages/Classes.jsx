import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../Hooks/UseCart';



const Classes = () => {
    const [classes, setClasses] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    const handleAddToCart = classes => {
        if (user && user.email) {
            const select = {
                ClassId: classes._id,
                name: classes.name,
                image: classes.image,
                price: classes.price,
                instructorName: classes.instructorName,
                email: user.email
            };
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(select)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Classes added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
        } else {
            Swal.fire({
                title: 'Please login to Select Classes',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then(result => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };








    return (
        <div className='w-full mb-3 mt-3'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Instructor Name</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Button</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((classes, index) => <tr key={classes._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={classes.image} alt='' />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{classes.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {classes.instructorName}
                                </td>
                                <td>{classes.availableSeats}</td>
                                <td>$ {classes.price}</td>
                                <td>
                                    <button onClick={() => handleAddToCart(classes)} className="btn btn-primary btn-xs"
                                    >Select</button>
                                </td>




                            </tr>)
                        }


                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Classes;