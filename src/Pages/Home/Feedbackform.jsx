import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Feedbackform = () => {
    const { user } = useContext(AuthContext);
    

    const handleAddReviews = event => {
        event.preventDefault();
        const form = event.target;
      
        const name = form.name.value;
        const email = form.email.value;
        const description =form.description.value;
        const addReview = {
            name,
            email, 
            description
        }
        console.log(addReview);

        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Review added successfully')
                }
            })



    }


    return (

        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Students a FeedBack</h2>
            <form onSubmit={handleAddReviews} className="space-y-4">
                <div>
                    <label htmlFor="username" className="block font-semibold mb-1">Student Name</label>
                    <input
                        id="name"
                        name="name"
                        value={user?.displayName}

                        className="w-full px-4 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block font-semibold mb-1">Student Email</label>
                    <input
                        id="email"
                        name="email"
                        value={user?.email}

                        className="w-full px-4 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block font-semibold mb-1">Description</label>
                    <textarea
                        id="description"
                        name="description"

                        className="w-full px-4 py-2 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Submit Review</button>
            </form>
        </div>
    );
};

export default Feedbackform;