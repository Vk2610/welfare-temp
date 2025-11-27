import { FaUser, FaWpforms, FaMoneyCheckAlt, FaHome, FaUsers, FaSearchLocation } from "react-icons/fa";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { MdHistory, MdQueryStats} from "react-icons/md";
import { SiGoogleforms } from "react-icons/si";
import { IoReceiptOutline } from "react-icons/io5"; // Import the icon you want to use
import { GiReceiveMoney } from "react-icons/gi";
import { LuFileSpreadsheet, LuPlus, LuSettings } from "react-icons/lu";

// export const USER_LINKS = [
//     {
//         key: "Profile",
//         label: "Profile",
//         Path: "/user/profile",
//         icon: FaUser, // Pass the icon as a component
//     },
//     {
//         key: "Form",
//         label: "Welfare Form",
//         Path: "/user/wf-form",
//         icon: FaWpforms, // Pass the icon as a component
//     },
//     {
//         key: "TrackApplication",
//         label: "Track Application",
//         Path: "/user/track-application",
//         icon: FaSearchLocation
//         , // Pass the icon as a component
//     },
//     {
//         key: "History",
//         label: "History",
//         Path: "/user/history",
//         icon :MdHistory
//     },
//     // {
//     //     key: "Transactions",
//     //     label: "Transactions",
//     //     Path: "/user/transactions",
//     //     icon: RiMoneyRupeeCircleLine, // Pass the icon as a component
//     // },
// ];

// export const SUBADMIN_LINKS = [
//     {
//         key: "Profile",
//         label: "Profile",
//         Path: "/sub-admin/profile",
//         icon: FaUser,
//     },
//     // {
//     //     key: "ViewUsers",
//     //     label: "View Users",
//     //     Path: "/sub-admin/view-users",
//     //     icon: FaUsers,
//     // },
//     // Manage applications
//     {
//         key: "ManageApplications",
//         label: "Manage Applications",
//         Path: "/sub-admin/manage-applications",
//         icon: SiGoogleforms,
//     },
//     {
//         key: "FundStats",
//         label: "Fund Stats",
//         Path: "/sub-admin/fund-stats",
//         icon: MdQueryStats,
//     },
//     {
//         key: "History",
//         label: "History",
//         Path: "/sub-admin/history",
//         icon :MdHistory
//     },
// ];

export const ADMIN_LINKS = [
    {
        key: "Profile",
        label: "Profile",
        Path: "/admin/profile",
        icon: FaUser,
    },
    {
        key: "ManageFunds",
        label: "Manage Funds",
        Path: "/admin/manage-funds",
        icon: GiReceiveMoney,
    },
    {
        key: "Add New User",
        label: "New User",
        Path: "/admin/new-user",
        icon: LuPlus,
    },
    {
        key: "Update User",
        label: "Update User",
        Path: "/admin/update-user",
        icon: LuSettings,
    },
];

export const handleLogout = () => {
    localStorage.clear(); // Clear all localStorage items (token, role, etc)
    window.location.href = '/login'; // Redirect to login page
};