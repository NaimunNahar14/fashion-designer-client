import React, { useEffect, useState } from 'react';


const Classes = () => {
    const[classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
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
                                    <button className="btn btn-ghost btn-xs">Select</button>
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