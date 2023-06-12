import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const MyClass = () => {
    const [items, setitems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/carts')
            .then(res => res.json())
            .then(data => setitems(data))
    }, [])
    // console.log(instructors);
    return (
        <div className="w-full">
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Classes Image</th>
                            <th>Classes Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Button </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                                <td>
                                    
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={items.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {items.name}
                                </td>
                                <td className="text-end">${items.price}</td>
                                <td>
                                    <button className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>
                        


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyClass;
