import React, { useEffect, useState } from 'react';

const Instructors = () => {
    const [instructor, setInstructor] = useState([]);
    useEffect(() => {
        fetch('https://fashion-designer-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructor(data))
    }, [])
    console.log(instructor);
    return (
        <div className='w-full mb-3 mt-3'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructor.map((instructor, index) => <tr key={instructor._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={instructor.image} alt='' />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{instructor.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {instructor.email}
                                </td>
                               
                                  
                                
                            </tr>)
                        }


                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Instructors;