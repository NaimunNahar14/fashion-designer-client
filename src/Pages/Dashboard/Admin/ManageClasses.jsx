
import UseClasses from '../../../Hooks/UseClasses';



const ManageClasses = () => {
    const [classes] = UseClasses();
    const handleApprove = id => {
        fetch(`https://fashion-designer-server.vercel.app/classes/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                //   
                }
            })
    };

    const handleDeny = id => {
        fetch(`https://fashion-designer-server.vercel.app/classes/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'denied' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    //udate
                }
            })
    };
    return (
        <div className="w-full">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((cls, index) => (
                            <tr key={cls._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={cls.image} alt="Class" className="w-10 h-10" />
                                </td>
                                <td>{cls.name}</td>
                                <td>{cls.instructorName}</td>
                                <td>{cls.instructorEmail}</td>
                                <td>{cls.availableSeats}</td>
                                <td>${cls.price}</td>
                                <td>{cls?.status}</td>
                                <td>
                                    {cls.status === 'pending' && (
                                        <>
                                            <button className="btn btn-sm btn-primary" onClick={() => handleApprove(cls._id)}>
                                                Approve
                                            </button>
                                            <button className="btn btn-sm btn-secondary" onClick={() => handleDeny(cls._id)}>
                                                Deny
                                            </button>
                                        </>
                                    )}
                                    {cls.status == 'approved' && (
                                         <button className="btn btn-sm btn-primary">
                                            Send Feedback
                                        </button>

                                    )}
                                    {cls.status == 'denied' && (

                                        <button className="btn btn-sm btn-primary">
                                            Send Feedback
                                        </button>

                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;