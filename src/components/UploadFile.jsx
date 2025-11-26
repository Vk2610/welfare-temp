// import { useState } from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   Box,
//   Chip,
//   IconButton,
//   Alert,
//   Paper
// } from "@mui/material";
// import {
//   Upload as UploadIcon,
//   Add as AddIcon,
//   Delete as DeleteIcon,
//   CheckCircle as CheckCircleIcon,
//   Description as DescriptionIcon
// } from "@mui/icons-material";
// import axios from "axios";
// import { v4 as uuidv4 } from 'uuid';

// export default function UploadComponent({
//   maxFileSizeMB = 10,
//   accept = [
//     "image/*",
//     ".pdf",
//     ".doc",
//     ".docx",
//     ".txt",
//     ".zip",
//   ],
//   applicantSignature,
//   hrmsNo,
//   onUpload
// }) {
//   const [documents, setDocuments] = useState([
//     { id: 1, name: "dischargeCertificate", file: null, isMandatory: true },
//     { id: 2, name: "doctorPrescription", file: null, isMandatory: true },
//     { id: 3, name: "medicineBills", file: null, isMandatory: true },
//     { id: 4, name: "diagnosticReports", file: null, isMandatory: true },
//   ]);
//   const [dynamicRows, setDynamicRows] = useState([]);
//   const [alert, setAlert] = useState({ show: false, message: "", severity: "error" });

//   const handleFileUpload = (docId, event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     // Validate file size
//     const maxBytes = maxFileSizeMB * 1024 * 1024;
//     if (file.size > maxBytes) {
//       setAlert({ show: true, message: `File is larger than ${maxFileSizeMB} MB`, severity: "error" });
//       setTimeout(() => setAlert({ show: false, message: "", severity: "error" }), 3000);
//       return;
//     }

//     // Validate file type
//     const lower = file.name.toLowerCase();
//     const isAcceptable = accept.some((a) => {
//       if (a.endsWith("/*")) {
//         const prefix = a.replace("/*", "");
//         return file.type.startsWith(prefix);
//       }
//       return lower.endsWith(a.toLowerCase()) || file.type === a;
//     });

//     if (!isAcceptable) {
//       setAlert({ show: true, message: "File type is not accepted", severity: "error" });
//       setTimeout(() => setAlert({ show: false, message: "", severity: "error" }), 3000);
//       return;
//     }

//     // Update document with file
//     setDocuments(prev =>
//       prev.map(doc =>
//         doc.id === docId ? { ...doc, file: file } : doc
//       )
//     );

//     setDynamicRows(prev =>
//       prev.map(row =>
//         row.id === docId ? { ...row, file: file } : row
//       )
//     );
//   };

//   const addDynamicRow = () => {
//     if (dynamicRows.length >= 6) {
//       setAlert({ show: true, message: "Maximum 10 additional documents allowed", severity: "warning" });
//       setTimeout(() => setAlert({ show: false, message: "", severity: "warning" }), 3000);
//       return;
//     }
//     const newId = Math.max(...documents.map(d => d.id), ...dynamicRows.map(d => d.id)) + 1;
//     setDynamicRows(prev => [...prev, { id: newId, name: `Document ${dynamicRows.length + 1}`, file: null, isMandatory: false }]);
//   };

//   const removeDynamicRow = (id) => {
//     setDynamicRows(prev => prev.filter(row => row.id !== id));
//   };

//   const CLOUD_NAME = "dcnzddzni";
//   const UPLOAD_PRESET = "welfare_uploads";
//   const CLOUD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`;

//   const uploadToCloudinary = async (file, folderPath, publicId) => {
//     const preset = "welfare_uploads";  // old preset for images

//     const fd = new FormData();
//     fd.append("file", file);
//     fd.append("upload_preset", preset);
//     fd.append("folder", folderPath);
//     fd.append("public_id", publicId);

//     // IMPORTANT: use auto endpoint
//     const CLOUD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/raw/upload`;

//     const res = await axios.post(CLOUD_URL, fd);
//     return res.data.secure_url;
//   };


//   const handleSubmit = async () => {

//     let isRequiredUploaded = false;
//     documents.forEach(doc => {
//       if (doc.isMandatory && !doc.file) {
//         setAlert({ show: true, message: `Please upload ${doc.name}`, severity: "warning" });
//         setTimeout(() => setAlert({ show: false, message: "", severity: "warning" }), 3000);
//         return;
//       }
//       isRequiredUploaded = true;
//     });

//     if (!applicantSignature) {
//       alert('upload signature');
//       return;
//     }

//     if (!isRequiredUploaded) return;

//     let id = uuidv4();
//     let urls = {};

//     const allDocs = [...documents, ...dynamicRows];
//     const docsToUpload = allDocs.filter((doc) => doc.file);

//     if (docsToUpload.length < 0) {
//       setAlert({ show: true, message: "Please upload required documents", severity: "warning" });
//       return;
//     }

//     try {

//       let appSignUrl = '';
//       if (applicantSignature) {
//         const path = `welfare_uploads/${hrmsNo}/${id}`;
//         const publicId = "applicantSignature";

//         const url = await uploadToCloudinary(applicantSignature, path, publicId);
//         appSignUrl = url;
//       }

//       for (let doc of allDocs) {
//         const path = `welfare_uploads/${hrmsNo}/${id}`;
//         const publicId = doc.name.replace(/\s+/g, "_");

//         const url = await uploadToCloudinary(doc.file, path, publicId);
//         urls[doc.name] = url;
//       }

//       setAlert({ show: true, message: "Uploaded Successfully!", severity: "success" });

//       onUpload({
//         id,
//         isUploaded: true,
//         applicantSignature: appSignUrl,
//         urls,
//         length: docsToUpload.length
//       });

//     } catch (error) {
//       console.error("Upload error:", error);
//       setAlert({ show: true, message: "Upload failed", severity: "error" });
//     }
//   };

//   const DocumentCard = ({ doc, onFileUpload, onRemove }) => (
//     <Card sx={{ mb: 2, boxShadow: 2, borderRadius: 2 }}>
//       <CardContent>
//         <Box display="flex" alignItems="center" justifyContent="space-between">
//           <Box display="flex" alignItems="center" gap={2}>
//             <DescriptionIcon color="primary" />
//             <Box>
//               <Typography variant="h6" component="h3">
//                 {doc.name}
//                 {doc.isMandatory && (
//                   <Chip
//                     label="Required"
//                     color="error"
//                     size="small"
//                     sx={{ ml: 1, height: 20 }}
//                   />
//                 )}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Max size: {maxFileSizeMB}MB
//               </Typography>
//             </Box>
//           </Box>

//           <Box display="flex" alignItems="center" gap={2}>
//             {doc.file ? (
//               <Chip
//                 icon={<CheckCircleIcon />}
//                 label={doc.file.name}
//                 color="success"
//                 variant="outlined"
//               />
//             ) : (
//               <Button
//                 variant="contained"
//                 component="label"
//                 startIcon={<UploadIcon />}
//                 size="small"
//               >
//                 Upload
//                 <input
//                   type="file"
//                   accept={accept.join(",")}
//                   onChange={(e) => onFileUpload(doc.id, e)}
//                   hidden
//                 />
//               </Button>
//             )}

//             {!doc.isMandatory && onRemove && (
//               <IconButton
//                 onClick={onRemove}
//                 color="error"
//                 size="small"
//               >
//                 <DeleteIcon />
//               </IconButton>
//             )}
//           </Box>
//         </Box>
//       </CardContent>
//     </Card>
//   );

//   return (
//     <Box sx={{ maxWidth: 800, margin: "0 auto", p: 3 }}>
//       <Typography variant="h4" component="h1" gutterBottom align="center">
//         Document Upload
//       </Typography>

//       {alert.show && (
//         <Alert
//           severity={alert.severity}
//           sx={{ mb: 3 }}
//           onClose={() => setAlert({ show: false, message: "", severity: "error" })}
//         >
//           {alert.message}
//         </Alert>
//       )}

//       <Paper elevation={3} sx={{ p: 3, borderRadius: 3, backgroundColor: "#f8f9fa" }}>
//         <Typography variant="h6" gutterBottom color="primary">
//           Required Documents
//         </Typography>

//         {documents.map((doc) => (
//           <DocumentCard
//             key={doc.id}
//             doc={doc}
//             onFileUpload={handleFileUpload}
//           />
//         ))}

//         {dynamicRows.length > 0 && (
//           <>
//             <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 3 }}>
//               Additional Documents
//             </Typography>
//             {dynamicRows.map((doc) => (
//               <DocumentCard
//                 key={doc.id}
//                 doc={doc}
//                 onFileUpload={handleFileUpload}
//                 onRemove={() => removeDynamicRow(doc.id)}
//               />
//             ))}
//           </>
//         )}

//         <Box display="flex" justifyContent="center" gap={2} mt={4}>
//           <Button
//             variant="outlined"
//             startIcon={<AddIcon />}
//             onClick={addDynamicRow}
//             disabled={dynamicRows.length >= 5}
//             sx={{ borderRadius: 2 }}
//           >
//             Add Document ({dynamicRows.length}/5)
//           </Button>

//           <Button
//             variant="contained"
//             color="success"
//             onClick={handleSubmit}
//             sx={{ borderRadius: 2, px: 4 }}
//           >
//             Submit Documents
//           </Button>
//         </Box>
//       </Paper>
//     </Box>
//   );
// }



import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  IconButton,
  Alert,
  Paper
} from "@mui/material";
import {
  Upload as UploadIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  CheckCircle as CheckCircleIcon,
  Description as DescriptionIcon
} from "@mui/icons-material";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export default function UploadComponent({
  maxFileSizeMB = 10,
  accept = ["image/jpeg", "image/png", "image/jpg"],
  applicantSignature,
  hrmsNo,
  onUpload
}) {

  const [documents, setDocuments] = useState([
    { id: 1, name: "dischargeCertificate", file: null, isMandatory: true },
    { id: 2, name: "doctorPrescription", file: null, isMandatory: true },
    { id: 3, name: "medicineBills", file: null, isMandatory: true },
    { id: 4, name: "diagnosticReports", file: null, isMandatory: true },
  ]);

  const [dynamicRows, setDynamicRows] = useState([]);
  const [alert, setAlert] = useState({ show: false, message: "", severity: "error" });

  const showAlert = (message, severity = "error") => {
    setAlert({ show: true, message, severity });
    setTimeout(() => setAlert({ show: false, message: "", severity: "error" }), 3000);
  };

  // ------------------------ VALIDATION --------------------------
  const handleFileUpload = (docId, event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file size
    if (file.size > maxFileSizeMB * 1024 * 1024) {
      showAlert(`File is larger than ${maxFileSizeMB} MB`);
      return;
    }

    // Validate image type
    if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      showAlert("Only JPG, JPEG, PNG files are allowed");
      return;
    }

    // update state
    setDocuments(prev =>
      prev.map(doc => (doc.id === docId ? { ...doc, file } : doc))
    );

    setDynamicRows(prev =>
      prev.map(row => (row.id === docId ? { ...row, file } : row))
    );
  };

  // ------------------------ ADD/REMOVE ROWS --------------------------
  const addDynamicRow = () => {
    if (dynamicRows.length >= 5) {
      showAlert("Maximum 5 additional documents allowed", "warning");
      return;
    }

    const newId = Math.max(...documents.map(d => d.id), ...dynamicRows.map(d => d.id), 0) + 1;

    setDynamicRows(prev => [
      ...prev,
      { id: newId, name: `Document ${dynamicRows.length + 1}`, file: null, isMandatory: false }
    ]);
  };

  const removeDynamicRow = (id) => {
    setDynamicRows(prev => prev.filter(row => row.id !== id));
  };

  // ------------------------ CLOUDINARY UPLOAD --------------------------
  const CLOUD_NAME = "dcnzddzni";
  const UPLOAD_PRESET = "welfare_uploads";
  const CLOUD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

  const uploadToCloudinary = async (file, folderPath, publicId) => {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("upload_preset", UPLOAD_PRESET);
    fd.append("folder", folderPath);
    fd.append("public_id", publicId);

    const res = await axios.post(CLOUD_URL, fd);
    return res.data.secure_url;
  };

  // ------------------------ FORM SUBMIT --------------------------
  const handleSubmit = async () => {
    // ensure mandatory docs
    for (let doc of documents) {
      if (doc.isMandatory && !doc.file) {
        showAlert(`Please upload ${doc.name}`, "warning");
        return;
      }
    }

    if (!applicantSignature) {
      showAlert("Please upload applicant signature", "warning");
      return;
    }

    const id = uuidv4();
    let urls = {};

    const allDocs = [...documents, ...dynamicRows].filter(doc => doc.file);

    try {
      // upload signature
      const signPath = `welfare_uploads/${hrmsNo}/${id}`;
      const applicantSignatureUrl = await uploadToCloudinary(
        applicantSignature,
        signPath,
        "applicantSignature"
      );

      // upload other docs
      for (let doc of allDocs) {
        const path = `welfare_uploads/${hrmsNo}/${id}`;
        const publicId = doc.name.replace(/\s+/g, "_");

        const url = await uploadToCloudinary(doc.file, path, publicId);
        urls[doc.name] = url;
      }

      showAlert("Uploaded Successfully!", "success");

      onUpload({
        id,
        isUploaded: true,
        applicantSignature: applicantSignatureUrl,
        urls,
        length: allDocs.length
      });

    } catch (error) {
      console.error("Upload failed:", error);
      showAlert("Upload failed!", "error");
    }
  };

  // ------------------------ UI COMPONENT --------------------------
  const DocumentCard = ({ doc, onFileUpload, onRemove }) => (
    <Card sx={{ mb: 2, boxShadow: 2, borderRadius: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={2}>
            <DescriptionIcon color="primary" />
            <Box>
              <Typography variant="h6">{doc.name}</Typography>
              {doc.isMandatory && (
                <Chip label="Required" color="error" size="small" sx={{ ml: 1 }} />
              )}
              <Typography variant="body2" color="text.secondary">
                Allowed: JPG, JPEG, PNG
              </Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            {doc.file ? (
              <Chip
                icon={<CheckCircleIcon />}
                label={doc.file.name}
                color="success"
                variant="outlined"
              />
            ) : (
              <Button variant="contained" component="label" startIcon={<UploadIcon />}>
                Upload
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/jpg"
                  onChange={(e) => onFileUpload(doc.id, e)}
                  hidden
                />
              </Button>
            )}

            {!doc.isMandatory && (
              <IconButton color="error" size="small" onClick={onRemove}>
                <DeleteIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  // ------------------------ RENDER --------------------------
  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto", p: 3 }}>
      <Typography variant="h4" align="center">Document Upload</Typography>

      {alert.show && (
        <Alert severity={alert.severity} sx={{ mb: 2 }}>
          {alert.message}
        </Alert>
      )}

      <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h6" color="primary">Required Documents</Typography>

        {documents.map(doc => (
          <DocumentCard
            key={doc.id}
            doc={doc}
            onFileUpload={handleFileUpload}
          />
        ))}

        {dynamicRows.length > 0 && (
          <>
            <Typography variant="h6" color="primary" sx={{ mt: 3 }}>
              Additional Documents
            </Typography>

            {dynamicRows.map(doc => (
              <DocumentCard
                key={doc.id}
                doc={doc}
                onFileUpload={handleFileUpload}
                onRemove={() => removeDynamicRow(doc.id)}
              />
            ))}
          </>
        )}

        <Box display="flex" justifyContent="center" gap={2} mt={3}>
          <Button variant="outlined" startIcon={<AddIcon />} onClick={addDynamicRow}>
            Add Document ({dynamicRows.length}/5)
          </Button>

          <Button variant="contained" color="success" onClick={handleSubmit}>
            Submit Documents
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
