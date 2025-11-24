import { Box, Typography, Stack, Divider, Button } from "@mui/material";

export default function FormDetails() {

    const username = "Badal Lad";
    const formDate = "23 / 11 / 2025";
    const disease = "Fever";
    const patientName = "Badal Lad";
    const requestedAmount = "15000";

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
                    <Typography variant="h6">Self</Typography>
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
                        sx={{ minWidth: 120, fontWeight: 700 }}
                    >
                        Approve
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        sx={{ minWidth: 120, fontWeight: 700 }}
                    >
                        Reject
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
}
