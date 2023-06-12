import React, { useEffect, useState } from 'react';
import './popularInstructor.css';
import Title from '../../Components/Title';

const PopularInstructor = () => {
    const [instructors, setinstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setinstructors(data))
    }, [])
    console.log(instructors);
    return (
        <>
        <div>
            <Title heading={"Popular Instructor Information"}></Title>
        <div className="card-container mb-3 mt-4">
          
     
          {instructors.map((ins) => (
            <div className="card" key={ins._id}>
              <img src={ins.image} alt="Instructor" className="card-image" />
              <div className="card-info">
                <h3 className="title">Instructor Name: {ins.name}</h3>
                <p className="description">Instructor Email: {ins.email}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
        
        </>
    );
};

export default PopularInstructor;