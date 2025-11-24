import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import React from 'react'

function FormHistoryCard({ getStatusColor, item, index }) {
    return (
        <Box key={item.id} sx={{ display: "flex", mb: 3 }}>

            {/* Dot + Connector */}
            <Box
                sx={{
                    width: "30px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    pt: 1,
                }}
            >
                {/* Dot */}
                <Box
                    sx={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        bgcolor: getStatusColor(item.status),
                    }}
                />

                {/* Connector Line */}
                {index !== events.length - 1 && (
                    <Box
                        sx={{
                            width: "2px",
                            flex: 1,
                            bgcolor: "rgba(0,0,0,0.2)",
                            mt: 0.5,
                        }}
                    />
                )}
            </Box>

            {/* Card Content */}
            <Card
                sx={{
                    flex: 1,
                    borderRadius: 2,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    borderLeft: "4px solid " + getStatusColor(item.status),
                }}
            >
                <CardContent>
                    <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                        {item.name}
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 14,
                            mt: 0.5,
                            color: getStatusColor(item.status),
                            fontWeight: 600,
                        }}
                    >
                        {item.status}
                    </Typography>

                    <Divider sx={{ my: 1 }} />

                    <Typography sx={{ fontSize: 12, color: "gray" }}>
                        {item.date}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default FormHistoryCard;