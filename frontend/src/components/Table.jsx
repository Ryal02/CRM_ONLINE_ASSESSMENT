import React from 'react';
import { 
  Button, 
  Table,
  TableBody, 
  TableCell, 
  TableContainer, TableHead, TableRow, Paper } from "@mui/material";
    
export const CustomerTable = ({ onEdit, onDelete, filteredData }) => {
  return (
    <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Contact Number</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {filteredData?.map((customer) => (
          <TableRow key={customer.id}>
            <TableCell>{customer.id}</TableCell>
            <TableCell>{customer.first_name}</TableCell>
            <TableCell>{customer.last_name}</TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell>{customer.contact_number}</TableCell>
            <TableCell>
              <Button variant="outlined" color="primary" onClick={() => onEdit(customer)}>
                Edit
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => onDelete(customer.id)}
                style={{ marginLeft: "8px" }}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default CustomerTable;
