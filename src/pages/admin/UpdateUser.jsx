// import React, { useState } from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   TextField,
//   Typography,
//   Grid,
//   Button,
//   MenuItem
// } from "@mui/material";

// export default function UpdateUser() {
//   const [search, setSearch] = useState({
//     hrmsNo: "",
//     name: "",
//   });

//   const [formData, setFormData] = useState({
//     hrmsNo: "",
//     name: "",
//     gender: "",
//     dob: "",
//     doj: "",
//     email: "",
//     phone: "",
//     department: "",
//     designation: "",
//     address: "",
//     status: "",
//     bankName: "",
//     accountNo: "",
//     ifsc: "",
//     nomineeName: "",
//     nomineeRelation: "",
//   });

//   const handleSearchChange = (e) => {
//     setSearch({
//       ...search,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // 🔥 TEMPORARY — Dummy search result
//   const handleSearch = () => {
//     console.log("Searching user...");

//     // Set dummy data
//     setFormData({
//       hrmsNo: "12345",
//       name: "John Doe",
//       gender: "Male",
//       dob: "1990-01-01",
//       doj: "2015-06-10",
//       email: "john@example.com",
//       phone: "9876543210",
//       department: "IT",
//       designation: "Software Engineer",
//       address: "Pune, Maharashtra",
//       status: "Active",
//       bankName: "SBI",
//       accountNo: "987654321",
//       ifsc: "SBIN0001234",
//       nomineeName: "Jane Doe",
//       nomineeRelation: "Wife",
//     });
//   };

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     console.log("Updated Data:", formData);
//     alert("User updated successfully!");
//   };

//   return (
//     <Box sx={{ p: 4 }}>

//       {/* Page Title */}
//       <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 ,
//         maxWidth: 1000,
//         mx: "auto"
//       }}>
//         Update User
//       </Typography>

//       {/* Search Box */}
//       <Card sx={{ p: 3, mb: 4, borderRadius: 3, boxShadow: 4 , maxWidth: 1000,
//         mx: "auto"}}>
//         <CardContent>
//           <Typography variant="h6" sx={{ mb: 3 }}>Search User</Typography>

//           <Grid container spacing={3}>

//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 name="hrmsNo"
//                 label="Search by HRMS Number"
//                 value={search.hrmsNo}
//                 onChange={handleSearchChange}
//               />
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 name="name"
//                 label="Search by Name"
//                 value={search.name}
//                 onChange={handleSearchChange}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <Button
//                 variant="contained"
//                 sx={{ background: "#16a34a", px: 4, py: 1.2 }}
//                 onClick={handleSearch}
//               >
//                 Search User
//               </Button>
//             </Grid>

//           </Grid>
//         </CardContent>
//       </Card>

//       {/* Update Form */}
//       <Card sx={{ p: 3, borderRadius: 3, boxShadow: 4,
//         maxWidth: 1000,
//         mx: "auto"
//       }}>
//         <CardContent>

//           <Typography variant="h6" sx={{ mb: 3 }}>
//             User Details
//           </Typography>

//           <Box component="form" onSubmit={handleUpdate}>

//             <Grid container spacing={3}>

//               {/* HRMS */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   name="hrmsNo"
//                   label="HRMS Number"
//                   value={formData.hrmsNo}
//                   onChange={handleChange}
//                 />
//               </Grid>

//               {/* Name */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   name="name"
//                   label="Full Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </Grid>

//               {/* Gender */}
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   select
//                   name="gender"
//                   label="Gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   SelectProps={{
//                     displayEmpty: true,
//                   }}
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                 >
//                   <MenuItem value="">
//                     <p>Select Gender</p>
//                   </MenuItem>
//                   <MenuItem value="Male">Male</MenuItem>
//                   <MenuItem value="Female">Female</MenuItem>
//                   <MenuItem value="Other">Other</MenuItem>
//                 </TextField>
//               </Grid>

//               {/* DOB */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   type="date"
//                   name="dob"
//                   label="Date of Birth"
//                   InputLabelProps={{ shrink: true }}
//                   value={formData.dob}
//                   onChange={handleChange}
//                 />
//               </Grid>

//               {/* DOJ */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   type="date"
//                   name="doj"
//                   label="Date of Joining"
//                   InputLabelProps={{ shrink: true }}
//                   value={formData.doj}
//                   onChange={handleChange}
//                 />
//               </Grid>

//               {/* Phone */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   name="phone"
//                   label="Phone Number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </Grid>

//               {/* Email */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   name="email"
//                   label="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </Grid>

//               {/* Department */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   name="department"
//                   label="Department"
//                   value={formData.department}
//                   onChange={handleChange}
//                 />
//               </Grid>

//               {/* Designation */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   name="designation"
//                   label="Designation"
//                   value={formData.designation}
//                   onChange={handleChange}
//                 />
//               </Grid>

//               {/* Address */}
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   name="address"
//                   label="Address"
//                   multiline
//                   rows={3}
//                   value={formData.address}
//                   onChange={handleChange}
//                 />
//               </Grid>

//               {/* Status */}
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   select
//                   name="status"
//                   label="Employment Status"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   SelectProps={{
//                     displayEmpty: true,
//                   }}
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                 >
//                   <MenuItem value="">
//                     <p>Select Gender</p>
//                   </MenuItem>
//                   <MenuItem value="Active">Active</MenuItem>
//                   <MenuItem value="Retired">Retired</MenuItem>
//                   <MenuItem value="On Leave">On Leave</MenuItem>
//                 </TextField>
//               </Grid>

//               {/* Bank Name */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   name="bankName"
//                   label="Bank Name"
//                   value={formData.bankName}
//                   onChange={handleChange}
//                 />
//               </Grid>

//               {/* Account No */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   name="accountNo"
//                   label="Account Number"
//                   value={formData.accountNo}
//                   onChange={handleChange}
//                 />
//               </Grid>

//               {/* IFSC */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   name="ifsc"
//                   label="IFSC Code"
//                   value={formData.ifsc}
//                   onChange={handleChange}
//                 />
//               </Grid>

//               {/* Nominee Name */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   name="nomineeName"
//                   label="Nominee Name"
//                   value={formData.nomineeName}
//                   onChange={handleChange}
//                 />
//               </Grid>

//               {/* Nominee Relation */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   name="nomineeRelation"
//                   label="Nominee Relation"
//                   value={formData.nomineeRelation}
//                   onChange={handleChange}
//                 />
//               </Grid>

//               {/* Update Button */}
//               <Grid item xs={12}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   fullWidth
//                   sx={{ background: "#1565C0", py: 1.2 }}
//                 >
//                   Update User
//                 </Button>
//               </Grid>

//             </Grid>

//           </Box>
//         </CardContent>
//       </Card>

//     </Box>
//   );
// }




import React, { useState } from "react";
import axios from "axios";
import { Save, Search } from "lucide-react";
import dayjs from "dayjs";

/* -------------------------------- Components -------------------------------- */

const toInputDate = (date) => {
  if (!date) return "";
  return dayjs(date).format("YYYY-MM-DD");
};


const FormSection = ({ title, children }) => (
  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-slate-200 mb-10">
    <h3 className="text-lg font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200">
      {title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
  </div>
);

const InputField = ({ name, label, type = "text", value, onChange }) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-slate-700">{label}</label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl outline-none 
      focus:border-green-600 focus:ring-1 focus:ring-green-500/30 transition-all text-sm"
      required
    />
  </div>
);

const SelectField = ({ name, label, value, onChange, options }) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-slate-700">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl outline-none 
      focus:border-green-600 focus:ring-1 focus:ring-green-500/30 transition-all text-sm"
      required
    >
      <option value="">Select {label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const TextAreaField = ({ name, label, value, onChange }) => (
  <div className="space-y-2 md:col-span-2">
    <label className="text-sm font-medium text-slate-700">{label}</label>
    <textarea
      rows={3}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl outline-none 
      focus:border-green-600 focus:ring-1 focus:ring-green-500/30 transition-all text-sm resize-none"
      required
    ></textarea>
  </div>
);

/* -------------------------------- Main Page -------------------------------- */

export default function UpdateUser() {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Full unified model (36 fields)
  const [form, setForm] = useState({
    id: "",
    hrmsNo: "",
    employeeName: "",
    profileType: "",
    gender: "",
    maritalStatus: "",
    panNo: "",
    emailId: "",
    mobileNo: "",
    currentAppointmentDate: "",
    currentAppointmentType: "",
    firstAppointmentDate: "",
    firstJoiningDate: "",
    firstAppointmentType: "",
    employeeType: "",
    appointmentNature: "",
    approvalRefNo: "",
    approvalLetterDate: "",
    retirementDate: "",
    qualifications: "",
    designation: "",
    role: "",
    presentAddress: "",
    permanentAddress: "",
    branchName: "",
    branchRegionName: "",
    branchType: "",
    branchJoiningDate: "",
    bankName: "",
    accountNo: "",
    ifsc: "",
    nomineeName: "",
    nomineeRelation: "",
    status: "",
    department: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  /* ------------------------------ Fetch User API ------------------------------ */
  const handleSearch = async () => {
    if (!searchInput) return alert("Enter HRMS No");

    setLoading(true);
    setError("");

    try {
      const res = await axios.get(`http://localhost:5000/api/employees/${searchInput}`);

      if (!res.data) {
        setError("User not found");
        return;
      }

      setForm({
        ...res.data,
        currentAppointmentDate: toInputDate(res.data.currentAppointmentDate),
        firstAppointmentDate: toInputDate(res.data.firstAppointmentDate),
        firstJoiningDate: toInputDate(res.data.firstJoiningDate),
        approvalLetterDate: toInputDate(res.data.approvalLetterDate),
        retirementDate: toInputDate(res.data.retirementDate),
        branchJoiningDate: toInputDate(res.data.branchJoiningDate),
      });

    } catch (err) {
      console.error(err);
      setError("User not found");
    } finally {
      setLoading(false);
    }
  };

  /* ------------------------------- Update API -------------------------------- */
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:5000/api/employees/${form.hrmsNo}`,
        form
      );

      alert("User updated successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Error updating user!");
    }
  };

  return (
    <div className="px-10 py-10 max-w-6xl mx-auto">

      <h1 className="text-3xl font-bold text-slate-800 mb-10">Update User</h1>

      {/* ----------------------------- Search Section ---------------------------- */}
      <FormSection title="Search User">
        <InputField
          name="search"
          label="Enter HRMS Number"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <div className="flex items-center md:col-span-2 mt-3">
          <button
            type="button"
            onClick={handleSearch}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md flex items-center gap-2"
          >
            <Search size={18} /> Search
          </button>
        </div>

        {loading && <p className="mt-2 text-blue-600">Searching user...</p>}
        {error && <p className="mt-2 text-red-600">{error}</p>}
      </FormSection>

      {/* ----------------------------- Update Form ------------------------------ */}
      <form onSubmit={handleUpdate}>

        {/* Basic Info */}
        <FormSection title="Basic Information">
          <InputField name="hrmsNo" label="HRMS Number" value={form.hrmsNo} onChange={handleChange} />
          <InputField name="employeeName" label="Employee Name" value={form.employeeName} onChange={handleChange} />

          <SelectField name="profileType" label="Profile Type" value={form.profileType} onChange={handleChange}
            options={["Permanent", "Teaching", "Contract"]} />

          <SelectField name="gender" label="Gender" value={form.gender} onChange={handleChange}
            options={["Male", "Female", "Other"]} />

          <SelectField name="maritalStatus" label="Marital Status" value={form.maritalStatus} onChange={handleChange}
            options={["Single", "Married", "Divorced", "Widowed"]} />

          <InputField name="panNo" label="PAN Number" value={form.panNo} onChange={handleChange} />
          <InputField name="emailId" label="Email ID" value={form.emailId} onChange={handleChange} />
          <InputField name="mobileNo" label="Mobile Number" value={form.mobileNo} onChange={handleChange} />
        </FormSection>

        {/* Appointment */}
        <FormSection title="Appointment Details">
          <InputField name="currentAppointmentDate" label="Current Appointment Date" type="date" value={form.currentAppointmentDate} onChange={handleChange} />
          <InputField name="currentAppointmentType" label="Current Appointment Type" value={form.currentAppointmentType} onChange={handleChange} />

          <InputField name="firstAppointmentDate" label="First Appointment Date" type="date" value={form.firstAppointmentDate} onChange={handleChange} />
          <InputField name="firstJoiningDate" label="First Joining Date" type="date" value={form.firstJoiningDate} onChange={handleChange} />

          <InputField name="firstAppointmentType" label="First Appointment Type" value={form.firstAppointmentType} onChange={handleChange} />
          <InputField name="employeeType" label="Employee Type" value={form.employeeType} onChange={handleChange} />
          <InputField name="appointmentNature" label="Appointment Nature" value={form.appointmentNature} onChange={handleChange} />
        </FormSection>

        {/* Administrative */}
        <FormSection title="Administrative">
          <InputField name="approvalRefNo" label="Approval Reference No" value={form.approvalRefNo} onChange={handleChange} />
          <InputField name="approvalLetterDate" label="Approval Letter Date" type="date" value={form.approvalLetterDate} onChange={handleChange} />

          <InputField name="retirementDate" label="Retirement Date" type="date" value={form.retirementDate} onChange={handleChange} />
          <InputField name="qualifications" label="Qualifications" value={form.qualifications} onChange={handleChange} />
          <InputField name="role" label="Role" value={form.role} onChange={handleChange} />
        </FormSection>

        {/* Address */}
        <FormSection title="Address">
          <TextAreaField name="presentAddress" label="Present Address" value={form.presentAddress} onChange={handleChange} />
          <TextAreaField name="permanentAddress" label="Permanent Address" value={form.permanentAddress} onChange={handleChange} />
        </FormSection>

        {/* Branch */}
        <FormSection title="Branch Information">
          <InputField name="branchName" label="Branch Name" value={form.branchName} onChange={handleChange} />
          <InputField name="branchRegionName" label="Branch Region Name" value={form.branchRegionName} onChange={handleChange} />

          <InputField name="branchType" label="Branch Type" value={form.branchType} onChange={handleChange} />
          <InputField name="branchJoiningDate" label="Branch Joining Date" type="date" value={form.branchJoiningDate} onChange={handleChange} />
        </FormSection>

        {/* Bank */}
        <FormSection title="Bank Details">
          <InputField name="bankName" label="Bank Name" value={form.bankName} onChange={handleChange} />
          <InputField name="accountNo" label="Account Number" value={form.accountNo} onChange={handleChange} />
          <InputField name="ifsc" label="IFSC Code" value={form.ifsc} onChange={handleChange} />
        </FormSection>

        {/* Nominee */}
        <FormSection title="Nominee Details">
          <InputField name="nomineeName" label="Nominee Name" value={form.nomineeName} onChange={handleChange} />
          <InputField name="nomineeRelation" label="Nominee Relation" value={form.nomineeRelation} onChange={handleChange} />
        </FormSection>

        {/* Status & Dept */}
        <FormSection title="Employment Status">
          <InputField name="status" label="Employment Status" value={form.status} onChange={handleChange} />
          <InputField name="department" label="Department" value={form.department} onChange={handleChange} />
        </FormSection>

        {/* Submit */}
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-green-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl 
            shadow-lg shadow-blue-500/40 flex items-center gap-3 font-bold transition-all hover:scale-105"
          >
            <Save size={20} />
            Update User
          </button>
        </div>
      </form>

    </div>
  );
}
