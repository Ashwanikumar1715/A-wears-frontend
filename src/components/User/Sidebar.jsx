import { useDispatch, useSelector } from 'react-redux';
import FolderIcon from '@mui/icons-material/Folder';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ChatIcon from '@mui/icons-material/Chat';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { logoutUser } from '../../actions/userAction';

const Sidebar = ({ activeTab }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const { user } = useSelector(state => state.user);
    console.log(user)
    const handleLogout = () => {
        dispatch(logoutUser());
        enqueueSnackbar("Logout Successfully", { variant: "success" });
        navigate("/login");
    }

    return (
        <div className="flex flex-col  sm:flex flex-col gap-4 w-1/4 px-1">

            {/* <!-- profile card --> */}
            <div className="flex items-center gap-4 p-3 bg-white rounded-md shadow">
                {/* <!-- user icon --> */}
                <div className="w-12 h-12 rounded-full hidden  sm:block ">
                    <img draggable="false" className=" h-full w-full object-cover rounded-full" src={user.avatar.url} alt="Avatar" />
                </div>
                {/* <!-- user icon --> */}
                <div className="flex flex-col gap-1">
                    <p className="text-xs">Hello,</p>
                    <h2 className="font-medium">{user.name}</h2>
                </div>
            </div>
            {/* <!-- profile card --> */}

            {/* <!-- nav tiles --> */}
            <div className="flex flex-col bg-white rounded-sm shadow">

                {/* <!-- my orders tab --> */}
                <div className="flex items-center gap-5 px-4 py-4 border-b">
                    <span className=" md:block text-primary-blue "><Link  to="/orders "><FolderIcon /></Link></span>
                    <Link className="hidden sm:block sm:flex  w-full justify-between font-medium text-gray-500 hover:text-primary-blue" to="/orders">
                        MY ORDERS
                        <span className='hidden md:block'><ChevronRightIcon /></span>
                    </Link>
                </div>
                {/* <!-- my orders tab --> */}




                {/* <!-- my stuff tab --> */}
                <div className="flex items-center gap-5 px-4 py-4">
                    <span className=" text-primary-blue"><FolderSharedIcon /></span>
                    <p className="hidden sm:block flex w-full justify-between font-medium text-gray-500">MY STUFF</p>
                </div>
                <div className="hidden md:block md:flex flex-col pb-3 border-b text-sm">
                   
                    <Link className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue" to="/">My Reviews & Ratings</Link>
                  
                    <Link to="/wishlist" className={`${activeTab === "wishlist" ? "bg-blue-50 text-primary-blue font-medium" : "hover:bg-blue-50 hover:text-primary-blue"} p-3 pl-14`}>My Wishlist</Link>
                </div>
                {/* <!-- my stuff tab --> */}

                {/* <!-- logout tab --> */}
                <div className="flex items-center gap-5 px-4 py-4 border-b">
                    <span className=" text-primary-blue"><PowerSettingsNewIcon /></span>
                    <div className="hidden sm:block sm:flex w-full justify-between font-medium text-gray-500 hover:text-primary-blue cursor-pointer" onClick={handleLogout}>
                        Logout
                        <span className='hidden md:block'><ChevronRightIcon /></span>
                    </div>
                </div>
                {/* <!-- logout tab --> */}

            </div>
            {/* <!-- nav tiles --> */}

            {/* <!-- frequenty visited tab --> */}
            <div className="invisible md:visible  flex flex-col items-start gap-2 p-4 bg-white rounded-sm shadow">
                <span className="text-xs font-medium">Frequently Visited:</span>
                <div className="flex gap-2.5 text-xs text-gray-500 flex-row"> 
                    <Link to="/password/update">Change Password</Link>
                    <Link to="/orders">Track Order</Link>
                    <Link to="/">Help Center</Link>
                </div>
            </div>
            {/* <!-- frequenty visited tab --> */}
        </div>
    );
};

export default Sidebar;
