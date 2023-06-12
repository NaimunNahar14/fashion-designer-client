
import { NavLink, Outlet } from 'react-router-dom';
import { FaWallet, FaHome, FaBookOpen, FaList, FaBook, FaRegEnvelope, FaUserFriends } from 'react-icons/fa';
import useCart from '../Hooks/UseCart';
import useAdmin from '../Hooks/UseAdmin';
import useInstructor from '../Hooks/UseInstructor';
import { motion } from 'framer-motion';

const Dashboard = () => {
    const [cart] = useCart();

    // const isAdmin = true;
    // const isInstructor = false;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const MenuItem = ({ to, icon, children }) => {
        return (
            <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <NavLink to={to} activeClassName="active">
                    {icon}
                    {children}
                </NavLink>
            </motion.li>
        );
    };
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
                    {isAdmin ? (
                        <>
                            <MenuItem to="/" icon={<FaHome />}>
                                Admin Home
                            </MenuItem>
                            <MenuItem to="/dashboard/manageclasses" icon={<FaBookOpen />}>
                                Manage Classes
                            </MenuItem>
                            <MenuItem to="/dashboard/manageusers" icon={<FaUserFriends />}>
                                Manage Users
                            </MenuItem>
                        </>
                    ) : isInstructor ? (
                        <>
                            <MenuItem to="/" icon={<FaHome />}>
                                Instructor Home
                            </MenuItem>
                            <MenuItem to="/dashboard/addedclass" icon={<FaBookOpen />}>
                                Add a Class
                            </MenuItem>
                            <MenuItem to="/dashboard/myclasses" icon={<FaBook />}>
                                My Classes
                            </MenuItem>
                            <MenuItem to="/dashboard/totalenrolledclasses" icon={<FaList />}>
                                Total Enrolled Classes
                            </MenuItem>
                            <MenuItem to="/dashboard/feedback" icon={<FaRegEnvelope />}>
                                Feedback
                            </MenuItem>
                        </>
                    ) : (
                        <>
                            <MenuItem to="/" icon={<FaHome />}>
                                User Home
                            </MenuItem>
                            <MenuItem to="/dashboard/selectedclasses" icon={<FaBookOpen />}>
                                My Selected Class
                                <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                            </MenuItem>
                            <MenuItem to="/dashboard/paymenthistory" icon={<FaWallet />}>
                                Payment History
                            </MenuItem>
                            <MenuItem to="/dashboard/myenrolledclasses" icon={<FaList />}>
                                My Enrolled Classes
                            </MenuItem>
                        </>
                    )}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;