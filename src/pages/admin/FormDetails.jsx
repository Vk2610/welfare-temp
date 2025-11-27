// import { Box, Typography, Stack, Divider, Button, Dialog, CircularProgress } from "@mui/material";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { updateFormStatus } from "../../services/form_services";
// import axios from "axios";
// import { Document, Page } from "react-pdf";
// import { pdfjs } from "react-pdf";

// // Configure PDF worker
// pdfjs.GlobalWorkerOptions.workerSrc =
//     `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// export default function FormDetails() {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const {
//         requestId,
//         username,
//         formDate,
//         disease,
//         patientName,
//         relation,
//         requestedAmount
//     } = location.state || {};

//     const [docs, setDocs] = useState({});
//     const [previewUrl, setPreviewUrl] = useState(null);
//     const [previewType, setPreviewType] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [numPages, setNumPages] = useState(null);

//     // Fetch docs
//     useEffect(() => {
//         const loadDocs = async () => {
//             try {
//                 setLoading(true);
//                 const res = await axios.get("http://localhost:3000/admin/get-docs", {
//                     params: { requestId }
//                 });
//                 console.log("Fetched docs:", res.data);
//                 setDocs(res.data.docs || {});
//                 setLoading(false);
//             } catch (err) {
//                 console.error("Failed to fetch docs:", err);
//                 setLoading(false);
//             }
//         };

//         if (requestId) {
//             loadDocs();
//         }
//     }, [requestId]);

//     const handleApprove = async () => {
//         const res = await updateFormStatus("Approved", requestId);
//         if (res) navigate("/admin", { replace: true });
//     };

//     const handleReject = async () => {
//         const res = await updateFormStatus("Rejected", requestId);
//         if (res) navigate("/admin", { replace: true });
//     };

//     // Clean non-doc fields
//     const docEntries = Object.entries(docs).filter(([key, value]) =>
//         value &&
//         typeof value === 'string' &&
//         !["docsId", "hrmsNo", "fundId", "created_at", "userId", "formId"].includes(key)
//     );

//     console.log("Filtered doc entries:", docEntries);


//     // Open preview: auto detect PDF or image
//     const openPreview = (url) => {
//         console.log("Opening preview for:", url);

//         if (!url) {
//             alert("Invalid document URL");
//             return;
//         }

//         const isImage = /\.(jpg|jpeg|png|webp|gif)$/i.test(url);
//         const isPdf = /\.pdf$/i.test(url) || url.includes("pdf");

//         if (isImage) {
//             setPreviewType("image");
//             setPreviewUrl(url);
//         } else if (isPdf) {
//             setPreviewType("pdf");
//             setPreviewUrl(url);
//         } else {
//             // Try to open as PDF by default for unknown types
//             setPreviewType("pdf");
//             setPreviewUrl(url);
//         }
//     };

//     if (!location.state) {
//         return (
//             <Box sx={{ maxWidth: 600, margin: "40px auto", padding: 3 }}>
//                 <Typography color="error">No form details available</Typography>
//                 <Button onClick={() => navigate("/admin")}>Go Back</Button>
//             </Box>
//         );
//     }

//     return (
//         <Box sx={{ maxWidth: 900, margin: "40px auto", padding: 3 }}>

//             <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 3 }}>
//                 Form Details
//             </Typography>

//             <Divider sx={{ mb: 3 }} />

//             <Stack spacing={2}>
//                 <Detail label="Username" value={username} />
//                 <Detail label="Form Date" value={formDate} />
//                 <Detail label="Disease" value={disease} />
//                 <Detail label="Patient Name" value={patientName} />
//                 <Detail label="Relation" value={relation} />
//                 <Detail label="Requested Amount" value={requestedAmount} />
//             </Stack>

//             <Divider sx={{ my: 3 }} />

//             <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
//                 Documents
//             </Typography>

//             {loading ? (
//                 <CircularProgress />
//             ) : docEntries.length === 0 ? (
//                 <Typography>No documents uploaded</Typography>
//             ) : (
//                 <Stack spacing={2}>
//                     {docEntries.map(([key, url]) => {
//                         const label = key
//                             .replace(/([A-Z])/g, " $1")
//                             .replace(/_/g, " ")
//                             .trim();
//                         return (
//                             <Box
//                                 key={key}
//                                 p={2}
//                                 display="flex"
//                                 justifyContent="space-between"
//                                 alignItems="center"
//                                 sx={{ border: "1px solid #ddd", borderRadius: 2, bgcolor: "#f5f5f5" }}
//                             >
//                                 <Box>
//                                     <Typography fontWeight={600}>{label}</Typography>
//                                     <Typography variant="caption" color="text.secondary">{url}</Typography>
//                                 </Box>
//                                 <Button variant="contained" onClick={() => openPreview(url)}>
//                                     Preview
//                                 </Button>
//                             </Box>
//                         );
//                     })}
//                 </Stack>
//             )}

//             {/* Preview Dialog */}
//             <Dialog open={!!previewUrl} onClose={() => setPreviewUrl(null)} maxWidth="lg" fullWidth>
//                 <Box sx={{ p: 2 }}>
//                     {previewType === "image" && (
//                         <img
//                             src={previewUrl}
//                             alt="preview"
//                             style={{ width: "100%", maxHeight: "600px", objectFit: "contain" }}
//                             onError={() => alert("Failed to load image")}
//                         />
//                     )}

//                     {previewType === "pdf" && (
//                         <Box sx={{ width: "100%", height: "600px" }}>
//                             {previewUrl ? (
//                                 <iframe
//                                     src={previewUrl}
//                                     width="100%"
//                                     height="100%"
//                                     style={{ border: "none" }}
//                                     title="PDF Preview"
//                                     onError={() => setError("Failed to load PDF")}
//                                 />
//                             ) : (
//                                 <Typography color="error">Invalid PDF URL</Typography>
//                             )}
//                         </Box>
//                     )}

//                 </Box>
//             </Dialog>

//             <Box mt={4} display="flex" justifyContent="center" gap={2}>
//                 <Button variant="contained" color="success" onClick={handleApprove} sx={{ minWidth: 120 }}>
//                     Approve
//                 </Button>
//                 <Button variant="contained" color="error" onClick={handleReject} sx={{ minWidth: 120 }}>
//                     Reject
//                 </Button>
//             </Box>
//         </Box>
//     );
// }

// function Detail({ label, value }) {
//     return (
//         <Box display="flex" gap={1}>
//             <Typography color="text.secondary" fontWeight={600}>{label}:</Typography>
//             <Typography variant="h6">{value}</Typography>
//         </Box>
//     );
// }



import { Box, Typography, Stack, Divider, Button, Dialog, CircularProgress } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateFormStatus } from "../../services/form_services";
import axios from "axios";
import ZoomableImage from "../../components/ZoomableImage";

export default function FormDetails() {
    const location = useLocation();
    const navigate = useNavigate();

    const {
        requestId,
        username,
        formDate,
        disease,
        patientName,
        relation,
        requestedAmount
    } = location.state || {};

    const [docs, setDocs] = useState({});
    const [previewUrl, setPreviewUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    // ------------------------------------------------------
    // FETCH DOCUMENTS (all images now)
    // ------------------------------------------------------
    useEffect(() => {
        const loadDocs = async () => {
            try {
                setLoading(true);
                const res = await axios.get("http://localhost:3000/admin/get-docs", {
                    params: { requestId }
                });
                setDocs(res.data.docs || {});
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch docs:", err);
                setLoading(false);
            }
        };

        if (requestId) loadDocs();
    }, [requestId]);

    const handleApprove = async () => {
        const res = await updateFormStatus("Approved", requestId);
        if (res) navigate("/admin", { replace: true });
    };

    const handleReject = async () => {
        const res = await updateFormStatus("Rejected", requestId);
        if (res) navigate("/admin", { replace: true });
    };

    // ------------------------------------------------------
    // FILTER ONLY IMAGE URL FIELDS
    // ------------------------------------------------------
    const docEntries = Object.entries(docs).filter(([key, value]) => {
        if (!value || typeof value !== "string") return false;

        const isImage = /\.(jpg|jpeg|png|webp)$/i.test(value);

        return (
            isImage &&
            !["docsId", "hrmsNo", "fundId", "created_at", "userId", "formId"].includes(key)
        );
    });

    // ------------------------------------------------------
    // IMAGE PREVIEW HANDLER
    // ------------------------------------------------------
    const openPreview = (url) => {
        if (!url) return alert("Invalid image URL");

        const isImage = /\.(jpg|jpeg|png|webp)$/i.test(url);

        if (!isImage) {
            alert("Only images can be previewed.");
            return;
        }

        setPreviewUrl(url);
    };

    if (!location.state) {
        return (
            <Box sx={{ maxWidth: 600, p: 3, m: "40px auto" }}>
                <Typography color="error">No form details available</Typography>
                <Button onClick={() => navigate("/admin")}>Go Back</Button>
            </Box>
        );
    }

    return (
        <Box sx={{ maxWidth: 900, margin: "40px auto", padding: 3 }}>

            <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 3 }}>
                Form Details
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <Stack spacing={2}>
                <Detail label="Username" value={username} />
                <Detail label="Form Date" value={formDate} />
                <Detail label="Disease" value={disease} />
                <Detail label="Patient Name" value={patientName} />
                <Detail label="Relation" value={relation} />
                <Detail label="Requested Amount" value={requestedAmount} />
            </Stack>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Documents (Images Only)
            </Typography>

            {loading ? (
                <CircularProgress />
            ) : docEntries.length === 0 ? (
                <Typography>No images uploaded</Typography>
            ) : (
                <Stack spacing={2}>
                    {docEntries.map(([key, url]) => {
                        const label = key.replace(/([A-Z])/g, " $1").trim();

                        return (
                            <Box
                                key={key}
                                p={2}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                sx={{
                                    border: "1px solid #ddd",
                                    borderRadius: 2,
                                    backgroundColor: "#fafafa"
                                }}
                            >
                                <Typography fontWeight={600}>{label}</Typography>

                                <Button variant="contained" onClick={() => openPreview(url)}>
                                    Preview
                                </Button>
                            </Box>
                        );
                    })}
                </Stack>
            )}

            {/* IMAGE PREVIEW DIALOG */}
            <Dialog open={!!previewUrl} onClose={() => setPreviewUrl(null)} maxWidth="lg" fullWidth>
                <Box sx={{ p: 2 }}>
                    <ZoomableImage src={previewUrl} />
                </Box>
            </Dialog>

            {/* APPROVE / REJECT BUTTONS */}
            <Box mt={4} display="flex" justifyContent="center" gap={2}>
                <Button variant="contained" color="success" onClick={handleApprove} sx={{ minWidth: 120 }}>
                    Approve
                </Button>
                <Button variant="contained" color="error" onClick={handleReject} sx={{ minWidth: 120 }}>
                    Reject
                </Button>
            </Box>
        </Box>
    );
}

// ------------------------------------------------------
// DETAILS COMPONENT
// ------------------------------------------------------
function Detail({ label, value }) {
    return (
        <Box display="flex" gap={1}>
            <Typography color="text.secondary" fontWeight={600}>{label}:</Typography>
            <Typography variant="h6">{value}</Typography>
        </Box>
    );
}
