
import { NavLink, Outlet } from 'react-router-dom';
import { FaWallet, FaHome, FaBookOpen, FaList,FaBook, FaRegEnvelope,FaUserFriends } from 'react-icons/fa';
import useCart from '../Hooks/UseCart';
import useAdmin from '../Hooks/UseAdmin';
import useInstructor from '../Hooks/UseInstructor';

const Dashboard = () => {
    const [cart] = useCart();

    // const isAdmin = true;
    // const isInstructor = false;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-70">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/selectedclasses"><FaBookOpen></FaBookOpen>Manage Classes
                                
                            </NavLink></li>
                            <li><NavLink to="/dashboard/manageusers"><FaUserFriends></FaUserFriends> Manage Users</NavLink></li>

                        </> : isInstructor ? <>
                            <li><NavLink to="/"><FaHome></FaHome> Instructor Home</NavLink></li>
                            <li><NavLink to="/dashboard/selectedclasses"><FaBookOpen></FaBookOpen>Add a Class
                               
                            </NavLink></li>
                            <li><NavLink to="/dashboard/paymenthistory"><FaBook></FaBook> My Classes</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/myenrolledclasses"><FaList></FaList>Total Enrolled Classes
                                </NavLink>
                            </li>

                        </> : <><li><NavLink to="/"><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/selectedclasses"><FaBookOpen></FaBookOpen>My Selected Class
                                <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                            </NavLink></li>
                            <li><NavLink to="/dashboard/paymenthistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/myenrolledclasses"><FaList></FaList> My Enrolled Classes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/myenrolledclasses"><FaRegEnvelope></FaRegEnvelope>FeedBack
                                </NavLink>
                            </li>
                            
                            </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/classes">Classes</NavLink></li>
                    <li><NavLink to="/instructors">Instructor</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;