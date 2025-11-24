import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    Grid,
    Divider,
    Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FormApprovalCard({ username, formDate, disease, patientName, requestedAmount, balanceUsed }) {

    const navigate = useNavigate();
    const handleApprove = () => alert("Approved");
    const handleReject = () => alert("Rejected");

    return (
        <Card sx={{ m: 3, borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
                <Grid container spacing={2}>
                    {/* Row 1 */}
                    <Grid item xs={12} sm={6}>
                        <Stack spacing={1}>
                            <Typography variant="subtitle2" color="text.secondary">
                                Username:
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: "1.25rem", fontWeight: 700 }}>
                                {username}
                            </Typography>
                        </Stack>
                    </Grid>

                    <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

                    <Grid item xs={12} sm={6}>
                        <Stack spacing={1} alignItems="flex-start">
                            <Typography variant="subtitle2" color="text.secondary">
                                Form Date:
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: "1.15rem" }}>
                                {formDate}
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* Divider after row 1 */}
                    <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

                    {/* Row 2 */}
                    <Grid item xs={12} sm={6}>
                        <Stack spacing={1}>
                            <Typography variant="subtitle2" color="text.secondary">
                                Disease:
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: "1.15rem" }}>
                                {disease}
                            </Typography>
                        </Stack>
                    </Grid>

                    <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

                    <Grid item xs={12} sm={6}>
                        <Stack spacing={1}>
                            <Typography variant="subtitle2" color="text.secondary">
                                Patient Name:
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: "1.15rem" }}>
                                {patientName}
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* Divider after row 2 */}
                    <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

                    {/* Row 3 */}
                    <Grid item xs={12} sm={6}>
                        <Stack spacing={1}>
                            <Typography variant="subtitle2" color="text.secondary">
                                Requested Amount:
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: "1.15rem" }}>
                                {requestedAmount}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>


                <Box mt={3} display="flex" justifyContent="flex-start" gap={2}>
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
                    <Button
                        variant="contained"
                        onClick={() => navigate("/form-approval-details")}
                        sx={{ minWidth: 120, fontWeight: 700 }}
                    >
                        Show Details
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}
