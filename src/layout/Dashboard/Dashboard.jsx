import { FaBook, FaHome, FaUsers} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
   

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#253a5a]">
                {/* admin dashboard */}
              
                <>
                     <ul className="user p-4 space-y-2">
                    
                    
                    <li>
                        <NavLink className='btn btn-block' to="/dashboard/users">
                            <FaUsers></FaUsers>
                            Ad Task</NavLink>
                    </li>
                    <li>
                        <NavLink className='btn btn-block' to="/dashboard/allClasses">
                            <FaBook></FaBook>
                            All Task</NavLink>
                    </li>
                    <li>
                        <NavLink className='btn btn-block' to="/dashboard/userprofile">
                            <FaUsers></FaUsers>
                            Profile</NavLink>
                    </li>

                </ul>
                </>
             

                {/* teacher dashboard */}

                {/* {rolChecker === 'teacher' && (
                    <>
                    <ul className="user p-4 space-y-2">
                            <li>
                                <NavLink className='btn btn-block' to="/dashboard/addclass">
                                    <FaBook></FaBook>
                                    Add class
                                </NavLink>
                            </li>

                            <li>
                                <NavLink className='btn btn-block' to="/dashboard/myclass">
                                    <FaBook></FaBook>
                                    My Class
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='btn btn-block' to="/dashboard/userProfile">
                                    <FaUsers></FaUsers>
                                    Profile</NavLink>
                            </li>
                            </ul>
                    </>
                )} */}
                {/* users dashboard */}
                {/* {rolChecker === 'user' && (
                    <>
                        <ul className="user p-4 space-y-2">
                        <li>
                            <NavLink className='btn btn-block' to="/dashboard/myEnrollclass">
                                <FaBook></FaBook>
                                My enroll class
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='btn btn-block' to="/dashboard/userProfile">
                                <FaUsers></FaUsers>
                                Profile</NavLink>
                        </li>
                        </ul>
                    </>
                )} */}

                {/* shared nav links */}
                <div className="divider"></div>
                 <>
                 <ul className="user p-4 space-y-2">
                    <li>
                    <NavLink className='btn btn-block' to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                 </ul>
                 </>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;