import { useState } from 'react';
import { TextField, Box, Typography, Card, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const History = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = (username) => {
    console.log(`${username} clicked`);
  };


  return (
    <Box sx={{ p: 3 }}>
      <TextField
        variant="outlined"
        placeholder="Search User"
        value={searchTerm}
        onChange={handleSearchChange}
        fullWidth
        sx={{ mb: 3 }}
      />
      {
        [1, 2, 3, 4].map((_, index) => (
          <Card key={index} sx={{ mt: 1.5, mb: 1.5, borderRadius: 2, boxShadow: 3, p: 2 }}>
            <Stack spacing={1}>
              <Typography variant="h6" color="text.primary">
                Username: Badal Lad
              </Typography>
              <Typography variant="subtitle" color="text.secondary">
                HMRS No: 123456
              </Typography>
              <Button sx={{ maxWidth: 200 }} variant="contained" onClick={() => navigate("/admin/form-history")}>
                Click
              </Button>
            </Stack>
          </Card>
        ))
      }
    </Box>
  );
};

export default History;