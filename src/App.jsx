import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/common/Login.jsx";
import ResetPassword from "./pages/common/ResetPassword.jsx";
import HomePage from "./pages/common/HomePage.jsx";

import UserProfile from "./pages/user/UserProfile.jsx";
import WelfareForm from "./pages/user/WelfareForm.jsx";

import AdminProfile from "./pages/admin/AdminProfile.jsx";
import DataEntry from "./pages/admin/DataEntry.jsx";
import History from "./pages/admin/History.jsx";
import FormApproval from "./pages/admin/FormApproval.jsx";
import FormDetails from "./pages/admin/FormDetails.jsx";
import FormHistory from "./pages/admin/FormHistory.jsx";
import SevakWelfareForm from "./pages/user/WelfareForm.jsx";

// Protected Route component
const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // if (!token) {
  //   return <Navigate to="/login" replace />;
  // }
  
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to={`/${role}`} replace />;
  }

  return children;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        {/* <Route path="wf-form" element={<SevakWelfarePage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/resetPassword" element={<ResetPassword />} />z{" "}
        <Route path="wf-form" element={<SevakWelfareForm />} />
        {/* Protected Routes */}
        {/* User Routes */}
        <Route
          path="/user/*"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <HomePage />
              {/* <UserRoutes /> */}
            </ProtectedRoute>
          }
        >
          <Route path="profile" element={<UserProfile />} />
          <Route path="wf-form" element={<SevakWelfareForm />} />
        </Route>
        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <HomePage />
            </ProtectedRoute>
          }
        >
          {/* <Route path="wf-form" element={<SevakWelfarePage />} /> */}
          <Route path="wf-form" element={<SevakWelfareForm />} />
          <Route path="history" element={<History />} />
          <Route path="form-approval" element={<FormApproval />} />
          <Route path="form-approval-details" element={<FormDetails />} />
          <Route path="form-history" element={<FormHistory />} />
        </Route>
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Catch all - redirect to role-based home or login */}
        <Route
          path="*"
          element={
            <Navigate
              to={
                localStorage.getItem("role")
                  ? `/${localStorage.getItem("role")}`
                  : "/login"
              }
              replace
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;





// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import Login from "./pages/common/Login.jsx";
// import ResetPassword from "./pages/common/ResetPassword.jsx";
// import HomePage from "./pages/common/HomePage.jsx";

// import UserProfile from "./pages/user/UserProfile.jsx";
// import WelfareForm from "./pages/user/WelfareForm.jsx";

// import AdminProfile from "./pages/admin/AdminProfile.jsx";
// import DataEntry from "./pages/admin/DataEntry.jsx";
// import History from "./pages/admin/History.jsx";
// import FormApproval from "./pages/admin/FormApproval.jsx";
// import FormDetails from "./pages/admin/FormDetails.jsx";
// import FormHistory from "./pages/admin/FormHistory.jsx";

// // Protected Route component
// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role");

//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   if (allowedRoles && !allowedRoles.includes(role)) {
//     return <Navigate to={`/${role}`} replace />;
//   }

//   return children;
// };

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         {/* <Route path="wf-form" element={<SevakWelfarePage />} /> */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/resetPassword" element={<ResetPassword />} />z{" "}
//         {/* Protected Routes */}
//         {/* User Routes */}
//         <Route
//           path="/user/*"
//           element={
//             <ProtectedRoute allowedRoles={["user"]}>
//               <HomePage />
//               {/* <UserRoutes /> */}
//             </ProtectedRoute>
//           }
//         >
//           <Route path="profile" element={<UserProfile />} />
//           <Route path="wf-form" element={<WelfareForm />} />
//           {/* <Route path="wf-form" element={<SevakWelfarePage />} /> */}
//         </Route>
//         {/* Admin Routes */}
//         <Route
//           path="/admin/*"
//           element={
//             <ProtectedRoute allowedRoles={["admin"]}>
//               <HomePage />
//             </ProtectedRoute>
//           }
//         >
//           {/* <Route path="wf-form" element={<SevakWelfarePage />} /> */}
//           <Route path="wf-form" element={<WelfareForm />} />
//           <Route path="profile" element={<AdminProfile />} />
//           <Route path="data-entry" element={<DataEntry />} />
//           <Route path="history" element={<History />} />
//           <Route path="form-approval" element={<FormApproval />} />
//           <Route path="form-approval-details" element={<FormDetails />} />
//           <Route path="form-history" element={<FormHistory />} />
//         </Route>
//         {/* Default Route */}
//         <Route path="/" element={<Navigate to="/login" replace />} />
//         {/* Catch all - redirect to role-based home or login */}
//         <Route
//           path="*"
//           element={
//             <Navigate
//               to={
//                 localStorage.getItem("role")
//                   ? `/${localStorage.getItem("role")}`
//                   : "/login"
//               }
//               replace
//             />
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;