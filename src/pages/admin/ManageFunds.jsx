// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   TextField,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   TableContainer,
//   TablePagination,
//   Button,
//   IconButton
// } from "@mui/material";
// import { FaSearch } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const ManageFunds = () => {
//   const navigate = useNavigate();

//   // Sample Users — later you can fetch from backend
//   const sampleUsers = [
//     { hrmsNo: "101", name: "Amit Sharma", department: "IT", status: "Active" },
//     { hrmsNo: "102", name: "Rohit Verma", department: "Accounts", status: "Retired" },
//     { hrmsNo: "103", name: "Sneha Patil", department: "HR", status: "Active" },
//     { hrmsNo: "104", name: "Meera Singh", department: "Library", status: "Active" },
//     { hrmsNo: "105", name: "Suresh Kumar", department: "Sports", status: "Active" },
//     { hrmsNo: "106", name: "Amit Sharma", department: "IT", status: "Active" },
//     { hrmsNo: "107", name: "Rohit Verma", department: "Accounts", status: "Retired" },
//     { hrmsNo: "108", name: "Sneha Patil", department: "HR", status: "Active" },
//     { hrmsNo: "109", name: "Meera Singh", department: "Library", status: "Active" },
//     { hrmsNo: "110", name: "Suresh Kumar", department: "Sports", status: "Active" },
//     { hrmsNo: "111", name: "Amit Sharma", department: "IT", status: "Active" },
//     { hrmsNo: "112", name: "Rohit Verma", department: "Accounts", status: "Retired" },
//     { hrmsNo: "113", name: "Sneha Patil", department: "HR", status: "Active" },
//     { hrmsNo: "114", name: "Meera Singh", department: "Library", status: "Active" },
//     { hrmsNo: "115", name: "Suresh Kumar", department: "Sports", status: "Active" },
//     { hrmsNo: "116", name: "Amit Sharma", department: "IT", status: "Active" },
//     { hrmsNo: "117", name: "Rohit Verma", department: "Accounts", status: "Retired" },
//     { hrmsNo: "118", name: "Sneha Patil", department: "HR", status: "Active" },
//     { hrmsNo: "119", name: "Meera Singh", department: "Library", status: "Active" },
//     { hrmsNo: "120", name: "Suresh Kumar", department: "Sports", status: "Active" },
//     { hrmsNo: "121", name: "Amit Sharma", department: "IT", status: "Active" },
//     { hrmsNo: "122", name: "Rohit Verma", department: "Accounts", status: "Retired" },
//     { hrmsNo: "123", name: "Sneha Patil", department: "HR", status: "Active" },
//     { hrmsNo: "134", name: "Meera Singh", department: "Library", status: "Active" },
//     { hrmsNo: "125", name: "Suresh Kumar", department: "Sports", status: "Active" },
//     { hrmsNo: "121", name: "Amit Sharma", department: "IT", status: "Active" },
//     { hrmsNo: "122", name: "Rohit Verma", department: "Accounts", status: "Retired" },
//     { hrmsNo: "123", name: "Sneha Patil", department: "HR", status: "Active" },
//     { hrmsNo: "124", name: "Meera Singh", department: "Library", status: "Active" },
//     { hrmsNo: "125", name: "Suresh Kumar", department: "Sports", status: "Active" },
//   ];

//   const [users, setUsers] = useState(sampleUsers);
//   const [search, setSearch] = useState("");

//   // Pagination states
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [page, setPage] = useState(0);

//   // Search Filter
//   const filteredUsers = users.filter(
//     (u) =>
//       u.name.toLowerCase().includes(search.toLowerCase()) ||
//       u.hrmsNo.includes(search)
//   );

//   return (
//     <Box sx={{ p: 4 }}>
//       {/* Title */}
//       <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 ,
//           maxWidth: 1000,
//           mx: "auto"
//       }}>
//         Manage Funds
//       </Typography>

//       <Card sx={{ p: 3, borderRadius: 3, boxShadow: 4,
//           maxWidth: 1000,
//           mx: "auto"
//        }}>
//         <CardContent>

//           {/* Search Bar */}
//           <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
//             <TextField
//               fullWidth
//               label="Search by Name or HRMS No"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <IconButton sx={{ background: "#16a34a", color: "white" }}>
//               <FaSearch />
//             </IconButton>
//           </Box>

//           {/* Users Table */}
//           <TableContainer>
//             <Table>
//               <TableHead>
//                 <TableRow sx={{ background: "#f3f4f6" }}>
//                   <TableCell><b>HRMS No</b></TableCell>
//                   <TableCell><b>Name</b></TableCell>
//                   <TableCell><b>Department</b></TableCell>
//                   <TableCell><b>Status</b></TableCell>
//                   <TableCell><b>Actions</b></TableCell>
//                 </TableRow>
//               </TableHead>

//               <TableBody>
//                 {filteredUsers
//                   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                   .map((user) => (
//                     <TableRow key={user.hrmsNo}>
//                       <TableCell>{user.hrmsNo}</TableCell>
//                       <TableCell>{user.name}</TableCell>
//                       <TableCell>{user.department}</TableCell>
//                       <TableCell>{user.status}</TableCell>

//                       <TableCell>
//                         <Button
//                           variant="contained"
//                           sx={{
//                             background: "#2563eb",
//                             "&:hover": { background: "#1d4ed8" },
//                           }}
//                           onClick={() => navigate(`/admin/view/${user.hrmsNo}`)}
//                         >
//                           View Profile
//                         </Button>
//                       </TableCell>
//                     </TableRow>
//                   ))}

//                 {filteredUsers.length === 0 && (
//                   <TableRow>
//                     <TableCell colSpan={5} align="center">
//                       No users found
//                     </TableCell>
//                   </TableRow>
//                 )}
//               </TableBody>
//             </Table>
//           </TableContainer>

//           {/* Pagination */}
//           <TablePagination
//             component="div"
//             count={filteredUsers.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={(e, newPage) => setPage(newPage)}
//             onRowsPerPageChange={(e) => {
//               setRowsPerPage(parseInt(e.target.value));
//               setPage(0);
//             }}
//             rowsPerPageOptions={[10, 25, 50]}
//           />

//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default ManageFunds;





import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TablePagination,
  Button,
  IconButton,
  ToggleButton,
  ToggleButtonGroup
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const ManageFunds = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);   // ← fetched users
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [filterType, setFilterType] = useState("all");

  // -------------------------------
  // 🔹 FETCH USERS FROM BACKEND
  // -------------------------------
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/employees");

        // 🔹 Process users after fetching
        const processed = res.data.map((u) => {
          const retirement = dayjs(u.retirementDate);
          const today = dayjs();

          return {
            ...u,
            // Convert date → DD/MM/YYYY
            retirementDateFormatted: retirement.format("DD/MM/YYYY"),

            // If retirementDate is FUTURE → Active
            // If retirementDate is PAST or TODAY → Retired
            status: retirement.isAfter(today) ? "Active" : "Retired",
          };
        });

        setUsers(processed);
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // -------------------------------
  // 🔹 Retiring in 60 Days Logic
  // -------------------------------
  const retiringIn60 = (date) => {
    const today = dayjs();
    const diff = dayjs(date).diff(today, "day");
    return diff >= 0 && diff <= 60;
  };

  // -------------------------------
  // 🔹 Search + Filter Logic
  // -------------------------------
  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.employeeName.toLowerCase().includes(search.toLowerCase()) ||
      u.hrmsNo.includes(search);

    if (filterType === "all") return matchesSearch;
    if (filterType === "retiring") return matchesSearch && retiringIn60(u.retirementDate);
    if (filterType === "claimed") return matchesSearch && u.claimedFullAmount;

    return matchesSearch;
  });

  if (loading) {
    return (
      <Typography variant="h5" sx={{ textAlign: "center", mt: 5 }}>
        Loading users...
      </Typography>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        sx={{ mb: 3, fontWeight: 600, maxWidth: 1000, mx: "auto" }}
      >
        Manage Funds
      </Typography>

      <Card sx={{ p: 3, borderRadius: 3, boxShadow: 4, maxWidth: 1000, mx: "auto" }}>
        <CardContent>

          {/* 🔹 TOP FILTER BUTTONS */}
          <ToggleButtonGroup
            value={filterType}
            exclusive
            onChange={(e, v) => v && setFilterType(v)}
            sx={{ mb: 3 }}
          >
            <ToggleButton value="all">All Users</ToggleButton>
            <ToggleButton value="retiring">Retiring in 60 Days</ToggleButton>
            <ToggleButton value="claimed">Claimed All Benefits</ToggleButton>
          </ToggleButtonGroup>

          {/* 🔹 SEARCH BAR */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
            <TextField
              fullWidth
              label="Search by Name or HRMS No"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <IconButton sx={{ background: "#16a34a", color: "white" }}>
              <FaSearch />
            </IconButton>
          </Box>

          {/* 🔹 USERS TABLE */}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ background: "#f3f4f6" }}>
                  <TableCell><b>HRMS No</b></TableCell>
                  <TableCell><b>Name</b></TableCell>
                  <TableCell><b>Department</b></TableCell>
                  <TableCell><b>Phone Number</b></TableCell>
                  <TableCell><b>Retirement Date</b></TableCell>
                  <TableCell><b>Full Benefits?</b></TableCell>
                  <TableCell><b>Actions</b></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filteredUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user) => (
                    <TableRow key={user.hrmsNo}>
                      <TableCell>{user.hrmsNo}</TableCell>
                      <TableCell>{user.employeeName}</TableCell>
                      <TableCell>{user.branchName}</TableCell>
                      {/* New status based on retirement date */}
                      <TableCell>{user.mobileNo}</TableCell>
                      {/* Converted date */}
                      <TableCell>{user.retirementDateFormatted}</TableCell>
                      <TableCell>{user.claimedFullAmount ? "Yes" : "No"}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          sx={{
                            background: "#2563eb",
                            "&:hover": { background: "#1d4ed8" },
                          }}
                          onClick={() =>
                            navigate(`/admin/view/${user.hrmsNo}`, {
                              state: { user }
                            })
                          }
                        >
                          View Profile
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}

                {filteredUsers.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} align="center">
                      No users found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          {/* 🔹 Pagination */}
          <TablePagination
            component="div"
            count={filteredUsers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(e, newPage) => setPage(newPage)}
            onRowsPerPageChange={(e) => {
              setRowsPerPage(parseInt(e.target.value));
              setPage(0);
            }}
            rowsPerPageOptions={[10, 25, 50]}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default ManageFunds;
