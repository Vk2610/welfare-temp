import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({ data, value }) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    handleClose();
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Edit {data.title}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit {data.title}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} id="dialog-form">
            {data.type === 'dropdown' ? (
              <FormControl fullWidth margin="dense">
                <InputLabel>{data.title}</InputLabel>
                <Select
                  name="text"
                  value={selectedValue}
                  onChange={(e) => setSelectedValue(e.target.value)}
                  label={data.title}
                >
                  {data.options && data.options.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="text"
                type={data.type}
                fullWidth
                variant="standard"
              />
            )}
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>Cancel</Button>
          <Button variant='contained' color='success' type="submit" form="dialog-form">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
