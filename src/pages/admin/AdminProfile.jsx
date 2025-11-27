// import React from "react";
// import { Card, CardContent, Typography, Box, Grid } from "@mui/material";

// const AdminProfile = () => {

//   // TEMPORARY DUMMY DATA (replace with API later)
//   const admin = {
//     name: "Admin User",
//     hrmsNo: "HRMS12345",
//     email: "admin@rayat.com",
//     department: "Welfare Management",
//     role: "Administrator",
//     joined: "12 Feb 2020"
//   };

//   const stats = {
//     totalUsers: 1280,
//     retiringSoon: 34,
//     fullyBenefited: 620
//   };

//   return (
//     <Box
//       sx={{
//         p: 4,
//         minHeight: "80vh",
//         backgroundColor: "#ffffffff",
//       }}
//     >

//       {/* Admin Profile Section */}
//       <Card
//         sx={{
//           backgroundColor: "rgba(255, 255, 255, 1)",
//           backdropFilter: "blur(10px)",
//           borderRadius: 3,
//           boxShadow: 3,
//           mb: 4,
//           maxWidth: 1000,
//           mx:"auto"
//         }}
//       >
//         <CardContent sx={{ p: 4 }}>
//           <Typography 
//             variant="h5" 
//             sx={{ fontWeight: 600, mb: 3 }}
//           >
//             Admin Profile
//           </Typography>

//           <Grid container spacing={3}>

//             <Grid item xs={12} md={6}>
//               <Typography variant="body1"><strong>Name:</strong> {admin.name}</Typography>
//               <Typography variant="body1"><strong>HRMS No:</strong> {admin.hrmsNo}</Typography>
//               <Typography variant="body1"><strong>Email:</strong> {admin.email}</Typography>
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <Typography variant="body1"><strong>Role:</strong> {admin.role}</Typography>
//               <Typography variant="body1"><strong>Department:</strong> {admin.department}</Typography>
//               <Typography variant="body1"><strong>Joined On:</strong> {admin.joined}</Typography>
//             </Grid>

//           </Grid>
//         </CardContent>
//       </Card>


//       {/* User Statistics Section */}
//       <Typography 
//         variant="h5" 
//         sx={{ fontWeight: 600, mb: 2 ,maxWidth: 1000, mx:"auto"}}
//       >
//         User Summary
//       </Typography>

//       <Grid container spacing={4} sx={{
//           maxWidth: 1000,
//           mx:"auto"}}>

//         {/* Total Users */}
//         <Grid item xs={12} md={4} >
//           <Card
//             sx={{
//               backgroundColor: "rgba(255,255,255,0.9)",
//               backdropFilter: "blur(10px)",
//               borderRadius: 3,
//               boxShadow: 2,

//             }}
//           >
//             <CardContent sx={{ p: 3, textAlign: "center" }}>
//               <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                 Total Users
//               </Typography>
//               <Typography variant="h4" sx={{ mt: 1, color: "#1565C0" }}>
//                 {stats.totalUsers}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Retiring in 60 Days */}
//         <Grid item xs={12} md={4}>
//           <Card
//             sx={{
//               backgroundColor: "rgba(255,255,255,0.9)",
//               backdropFilter: "blur(10px)",
//               borderRadius: 3,
//               boxShadow: 2,
//             }}
//           >
//             <CardContent sx={{ p: 3, textAlign: "center" }}>
//               <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                 Retiring in 60 Days
//               </Typography>
//               <Typography variant="h4" sx={{ mt: 1, color: "#B71C1C" }}>
//                 {stats.retiringSoon}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Fully Benefited Users */}
//         <Grid item xs={12} md={4}>
//           <Card
//             sx={{
//               backgroundColor: "rgba(255,255,255,0.9)",
//               backdropFilter: "blur(10px)",
//               borderRadius: 3,
//               boxShadow: 2,
//             }}
//           >
//             <CardContent sx={{ p: 3, textAlign: "center" }}>
//               <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                 Fully Benefited Users
//               </Typography>
//               <Typography variant="h4" sx={{ mt: 1, color: "#2E7D32" }}>
//                 {stats.fullyBenefited}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//       </Grid>

//     </Box>
//   );
// };

// export default AdminProfile;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [stats, setStats] = useState({
    totalUsers: 0,
    retiringSoon: 0,
    fullyBenefited: 0
  });

  const hrmsNo = localStorage.getItem("hrmsNo"); // stored at login

  // Fetch admin profile
  const fetchAdminProfile = async () => {
    try {
      console.log(hrmsNo);
      const res = await axios.get(`http://localhost:5000/api/employees/${hrmsNo}`);
      console.log(res.data);

      // FIXED: set actual admin object
      setAdmin(res.data);

      // Store role in local storage for later use
      localStorage.setItem("role", res.data.role);

    } catch (err) {
      console.error("Failed to load admin profile", err);
    }
  };


  // Fetch user summary stats
  const fetchStats = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/employees/stats");
      setStats(res.data);
    } catch (err) {
      console.error("Failed to load stats", err);
    }
  };

  useEffect(() => {
    fetchAdminProfile();
    fetchStats();
  }, []);

  if (!admin) {
    return (
      <Typography sx={{ p: 4, textAlign: "center" }}>
        Loading admin profile...
      </Typography>
    );
  }

  return (
    <Box sx={{ p: 4, minHeight: "80vh" }}>

      {/* Admin Profile Section */}
      <Card
        sx={{
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderRadius: 3,
          boxShadow: 3,
          mb: 4,
          maxWidth: 1000,
          mx: "auto"
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
            Admin Profile
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography><strong>Name:</strong> {admin.employeeName}</Typography>
              <Typography><strong>HRMS No:</strong> {admin.hrmsNo}</Typography>
              <Typography><strong>Email:</strong> {admin.emailId}</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography><strong>Role:</strong> {admin.role}</Typography>
              <Typography><strong>Branch:</strong> {admin.branchName}</Typography>
              <Typography><strong>Joined On:</strong> {admin.branchJoiningDate}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Stats Section */}
      <Typography
        variant="h5"
        sx={{ fontWeight: 600, mb: 2, maxWidth: 1000, mx: "auto" }}
      >
        User Summary
      </Typography>

      <Grid container spacing={4} sx={{ maxWidth: 1000, mx: "auto" }}>

        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6"><b>Total Users</b></Typography>
              <Typography variant="h4" sx={{ mt: 1, color: "#1565C0" }}>
                {stats.totalUsers}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6"><b>Retiring in 60 Days</b></Typography>
              <Typography variant="h4" sx={{ mt: 1, color: "#B71C1C" }}>
                {stats.retiringSoon}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6"><b>Fully Benefited Users</b></Typography>
              <Typography variant="h4" sx={{ mt: 1, color: "#2E7D32" }}>
                {stats.fullyBenefited}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
};

export default AdminProfile;
