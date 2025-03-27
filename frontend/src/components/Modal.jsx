import React, { useEffect, useState } from 'react';
import { 
    Button, 
    TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";


export const CustomerModal = ({ open, onClose, customerToEdit, newCustomer, setCustomerToEdit, setNewCustomer, handleSave }) => {
  return (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>{customerToEdit ? 'Edit Customer' : 'Add Customer'}</DialogTitle>
        <DialogContent>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            value={customerToEdit ? customerToEdit.first_name : newCustomer.first_name}
            onChange={(e) =>
              customerToEdit
                ? setCustomerToEdit({ ...customerToEdit, first_name: e.target.value })
                : setNewCustomer({ ...newCustomer, first_name: e.target.value })
            }
            margin="normal"
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            value={customerToEdit ? customerToEdit.last_name : newCustomer.last_name}
            onChange={(e) =>
              customerToEdit
                ? setCustomerToEdit({ ...customerToEdit, last_name: e.target.value })
                : setNewCustomer({ ...newCustomer, last_name: e.target.value })
            }
            margin="normal"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={customerToEdit ? customerToEdit.email : newCustomer.email}
            onChange={(e) =>
              customerToEdit
                ? setCustomerToEdit({ ...customerToEdit, email: e.target.value })
                : setNewCustomer({ ...newCustomer, email: e.target.value })
            }
            margin="normal"
          />
          <TextField
            label="Contact Number"
            variant="outlined"
            fullWidth
            value={customerToEdit ? customerToEdit.contact_number : newCustomer.contact_number}
            onChange={(e) =>
              customerToEdit
                ? setCustomerToEdit({ ...customerToEdit, contact_number: e.target.value })
                : setNewCustomer({ ...newCustomer, contact_number: e.target.value })
            }
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
    </Dialog>
  );
};

export default CustomerModal;
