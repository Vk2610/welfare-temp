import { Box, Typography, Stack, Divider, Button } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateFormStatus } from "../../services/form_services";

export default function FormDetails() {

    const location = useLocation();
    const navigate = useNavigate();
    const { requestId, username, formDate, disease, patientName, relation, requestedAmount } = location.state;

    const handleApprove = async () => {
        await updateFormStatus('Approved', requestId);
        if (res) navigate('/admin', {
            replace: true
        });
    }

    const handleReject = async () => {
        await updateFormStatus('Rejected', requestId);
        if (res) navigate('/admin', {
            replace: true
        });
    }

    return (
        <Box
            sx={{
                maxWidth: 600,
                margin: "40px auto",
                padding: 3,
                borderRadius: 2,
            }}
        >
            {/* Page Title */}
            <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: 700, mb: 3 }}
            >
                Form Details
            </Typography>

            <Divider sx={{ mb: 2 }} />

            {/* Details Section */}
            <Stack spacing={2}>
                <Box display={"flex"} alignItems={"center"} gap={1} >
                    <Typography variant="subtitle" color="text.secondary">
                        Username:
                    </Typography>
                    <Typography variant="h6">{username}</Typography>
                </Box>

                <Box display={"flex"} alignItems={"center"} gap={1} >
                    <Typography variant="subtitle" color="text.secondary">
                        Form Date:
                    </Typography>
                    <Typography variant="h6">{formDate}</Typography>
                </Box>

                <Box display={"flex"} alignItems={"center"} gap={1} >
                    <Typography variant="subtitle" color="text.secondary">
                        Disease:
                    </Typography>
                    <Typography variant="h6">{disease}</Typography>
                </Box>

                <Box display={"flex"} alignItems={"center"} gap={1} >
                    <Typography variant="subtitle" color="text.secondary">
                        Patient Name:
                    </Typography>
                    <Typography variant="h6">{patientName}</Typography>
                </Box>

                <Box display={"flex"} alignItems={"center"} gap={1} >
                    <Typography variant="subtitle" color="text.secondary">
                        Relation:
                    </Typography>
                    <Typography variant="h6">{relation}</Typography>
                </Box>

                <Box display={"flex"} alignItems={"center"} gap={1} >
                    <Typography variant="subtitle" color="text.secondary">
                        Requested Amount:
                    </Typography>
                    <Typography variant="h6">{requestedAmount}</Typography>
                </Box>

                <Box mt={3} display="flex" justifyContent="center" gap={2}>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={handleApprove}
                        sx={{ minWidth: 120, fontWeight: 700 }}
                    >
                        Approve
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleReject}
                        sx={{ minWidth: 120, fontWeight: 700 }}
                    >
                        Reject
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
}
