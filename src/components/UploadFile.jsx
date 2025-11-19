import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  IconButton,
  Alert,
  Grid,
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
import { jwtDecode } from "jwt-decode";

export default function UploadComponent({
  maxFileSizeMB = 10,
  accept = [
    "image/*",
    ".pdf",
    ".doc",
    ".docx",
    ".txt",
    ".zip",
  ],
  onUpload,
  userId
}) {
  const [documents, setDocuments] = useState([
    { id: 1, name: "discharge_certificate", file: null, isMandatory: true },
    { id: 2, name: "doctor_prescription", file: null, isMandatory: true },
    { id: 3, name: "medicine_bills", file: null, isMandatory: true },
    { id: 4, name: "diagnostic_reports", file: null, isMandatory: true },
  ]);
  const [dynamicRows, setDynamicRows] = useState([]);
  const [alert, setAlert] = useState({ show: false, message: "", severity: "error" });

  const handleFileUpload = (docId, event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file size
    const maxBytes = maxFileSizeMB * 1024 * 1024;
    if (file.size > maxBytes) {
      setAlert({ show: true, message: `File is larger than ${maxFileSizeMB} MB`, severity: "error" });
      setTimeout(() => setAlert({ show: false, message: "", severity: "error" }), 3000);
      return;
    }

    // Validate file type
    const lower = file.name.toLowerCase();
    const isAcceptable = accept.some((a) => {
      if (a.endsWith("/*")) {
        const prefix = a.replace("/*", "");
        return file.type.startsWith(prefix);
      }
      return lower.endsWith(a.toLowerCase()) || file.type === a;
    });

    if (!isAcceptable) {
      setAlert({ show: true, message: "File type is not accepted", severity: "error" });
      setTimeout(() => setAlert({ show: false, message: "", severity: "error" }), 3000);
      return;
    }

    // Update document with file
    setDocuments(prev => 
      prev.map(doc => 
        doc.id === docId ? { ...doc, file: file } : doc
      )
    );

    setDynamicRows(prev => 
      prev.map(row => 
        row.id === docId ? { ...row, file: file } : row
      )
    );
  };

  const addDynamicRow = () => {
    if (dynamicRows.length >= 6) {
      setAlert({ show: true, message: "Maximum 10 additional documents allowed", severity: "warning" });
      setTimeout(() => setAlert({ show: false, message: "", severity: "warning" }), 3000);
      return;
    }
    const newId = Math.max(...documents.map(d => d.id), ...dynamicRows.map(d => d.id)) + 1;
    setDynamicRows(prev => [...prev, { id: newId, name: `Document ${dynamicRows.length + 1}`, file: null, isMandatory: false }]);
  };

  const removeDynamicRow = (id) => {
    setDynamicRows(prev => prev.filter(row => row.id !== id));
  };

  const handleSubmit = async () => {

    let isRequiredUploaded = false;
    documents.forEach(doc => {
      if (doc.isMandatory && !doc.file) {
        setAlert({ show: true, message: `Please upload ${doc.name}`, severity: "warning" });
        setTimeout(() => setAlert({ show: false, message: "", severity: "warning" }), 3000);
        return;
      }
      isRequiredUploaded = true;
    });

    if (!isRequiredUploaded) return;

    const allDocuments = [...documents, ...dynamicRows];
    const filesWithData = allDocuments.filter(doc => doc.file).map(doc => ({
      name: doc.name,
      file: doc.file,
      uploaded: true
    }));

    setAlert({ show: true, message: "Documents uploaded successfully!", severity: "success" });
    // setTimeout(() => setAlert({ show: false, message: "", severity: "success" }), 3000);
    onUpload(filesWithData);

    // try {
    // const token = localStorage.getItem('token');
    // const decoded = jwtDecode(token);
    // const userId = decoded.id;
    // const formId = uuidv4();
    // const response = await axios.post('http://localhost:3000/user/upload-welfare-docs', {
    //   userId: userId,
    //   formId: formId,
    //   docs: filesWithData
    // });
    // if (response.status == 200) {
    //   setAlert({ show: true, message: "Documents uploaded and saved successfully!", severity: "success" });
    // }
    //  else {
    //   setAlert({ show: true, message: "Failed to save documents", severity: "error" });
    // }
    // } catch (error) {
    //   console.log(`Failed uploading docs ${error}`);
    // }
  };

  const DocumentCard = ({ doc, onFileUpload, onRemove }) => (
    <Card sx={{ mb: 2, boxShadow: 2, borderRadius: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={2}>
            <DescriptionIcon color="primary" />
            <Box>
              <Typography variant="h6" component="h3">
                {doc.name}
                {doc.isMandatory && (
                  <Chip 
                    label="Required" 
                    color="error" 
                    size="small" 
                    sx={{ ml: 1, height: 20 }}
                  />
                )}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Max size: {maxFileSizeMB}MB
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
              <Button
                variant="contained"
                component="label"
                startIcon={<UploadIcon />}
                size="small"
              >
                Upload
                <input
                  type="file"
                  accept={accept.join(",")}
                  onChange={(e) => onFileUpload(doc.id, e)}
                  hidden
                />
              </Button>
            )}
            
            {!doc.isMandatory && onRemove && (
              <IconButton 
                onClick={onRemove} 
                color="error" 
                size="small"
              >
                <DeleteIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto", p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Document Upload
      </Typography>
      
      {alert.show && (
        <Alert 
          severity={alert.severity} 
          sx={{ mb: 3 }}
          onClose={() => setAlert({ show: false, message: "", severity: "error" })}
        >
          {alert.message}
        </Alert>
      )}

      <Paper elevation={3} sx={{ p: 3, borderRadius: 3, backgroundColor: "#f8f9fa" }}>
        <Typography variant="h6" gutterBottom color="primary">
          Required Documents
        </Typography>
        
        {documents.map((doc) => (
          <DocumentCard
            key={doc.id}
            doc={doc}
            onFileUpload={handleFileUpload}
          />
        ))}

        {dynamicRows.length > 0 && (
          <>
            <Typography variant="h6" gutterBottom color="primary" sx={{ mt: 3 }}>
              Additional Documents
            </Typography>
            {dynamicRows.map((doc) => (
              <DocumentCard
                key={doc.id}
                doc={doc}
                onFileUpload={handleFileUpload}
                onRemove={() => removeDynamicRow(doc.id)}
              />
            ))}
          </>
        )}

        <Box display="flex" justifyContent="center" gap={2} mt={4}>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={addDynamicRow}
            disabled={dynamicRows.length >= 6}
            sx={{ borderRadius: 2 }}
          >
            Add Document ({dynamicRows.length}/6)
          </Button>
          
          <Button
            variant="contained"
            color="success"
            onClick={handleSubmit}
            sx={{ borderRadius: 2, px: 4 }}
          >
            Submit Documents
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
