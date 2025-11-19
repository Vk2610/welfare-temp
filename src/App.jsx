import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// common imports
import Login from "./pages/common/Login";
import ResetPassword from "./pages/common/ResetPassword";
import HomePage from "./pages/common/HomePage";

// user imports
import UserProfile from "./pages/user/UserProfile";
import TrackApplication from "./pages/user/TrackApplication";
import UserHistory from "./pages/user/UserHistory";

// sub-admin imports
import SubAdminProfile from "./pages/sub-admin/SubAdminProfile";
import ManageApplications from "./pages/sub-admin/ManageApplications";
import FundStats from "./pages/sub-admin/FundStats";
import SubAdmHistory from "./pages/sub-admin/SubAdmHistory";

// admin imports
import AdminProfile from "./pages/admin/AdminProfile";
import ManageFunds from "./pages/admin/ManageFunds";
import DataEntry from "./pages/admin/DataEntry";
import SevakWelfarePage from "./wf-form/SevakWelfarePage";

// Protected Route component
const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

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
          {/* <Route path="wf-form" element={<WelfareForm />} /> */}
          <Route path="wf-form" element={<SevakWelfarePage />} />
          <Route path="track-application" element={<TrackApplication />} />
          <Route path="history" element={<UserHistory />} />
        </Route>
        {/* Sub-Admin Routes */}
        <Route
          path="/sub-admin/*"
          element={
            <ProtectedRoute allowedRoles={["sub-admin"]}>
              <HomePage />
            </ProtectedRoute>
          }
        >
          <Route path="profile" element={<SubAdminProfile />} />
          <Route path="manage-applications" element={<ManageApplications />} />
          <Route path="fund-stats" element={<FundStats />} />
          <Route path="history" element={<SubAdmHistory />} />
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
          <Route path="profile" element={<AdminProfile />} />
          <Route path="manage-funds" element={<ManageFunds />} />
          <Route path="data-entry" element={<DataEntry />} />
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
