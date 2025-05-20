import React, { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useCustomers} from "../../hooks/useCustomers";
import { addCustomer, updateCustomer, deleteCustomerApi } from "../../api/customerApi";
import { CustomerTable, CustomerModal } from '../../components';
import { showSuccessAlert, showErrorAlert } from '../../components/Swal';
import Swal from 'sweetalert2';
import { Button, Box, Container, TextField, LinearProgress} from "@mui/material";
import { MainLayout } from '@components/layouts';

export const Customer = () => {
    const { data, isLoading, error, refetch } = useCustomers();
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(data);
    const [openDialog, setOpenDialog] = useState(false); // For Add/Edit Dialog
    const [customerToEdit, setCustomerToEdit] = useState(null); // For customer data to edit
    const [newCustomer, setNewCustomer] = useState({ first_name: '', last_name: '', email: '', contact_number: '' }); // For new customer

    const handleEdit = (customer) => {
        setCustomerToEdit(customer);
        setOpenDialog(true);
    };

    const mutationDelete = useMutation({
        mutationFn: deleteCustomerApi,
        onSuccess: () => {
            showSuccessAlert('The customer has been deleted successfully!');
            refetch(); // Update state after deletion
        },
        onError: () => {
            showErrorAlert('There was an issue deleting the customer!')
        },
    });
    
    // Inside handleDelete
    const handleDelete = (customerId) => {
        Swal.fire({
        icon: 'warning',  // You can change the icon as needed
        title: 'Are you sure?',
        text: 'Do you really want to delete this customer?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        position: 'top-center',
        toast: true,
        timerProgressBar: true,
        }).then((result) => {
        if (result.isConfirmed) {
            // Call the mutation if 'Yes' is clicked
            mutationDelete.mutate(customerId);
        }
        });
    };

    const handleAdd = () => {
        setCustomerToEdit(null);
        setNewCustomer({ first_name: '', last_name: '', email: '', contact_number: '' });
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const mutationAdd = useMutation({
        mutationFn: addCustomer,
        onSuccess: () => {
            setOpenDialog(false);
            refetch();
            showSuccessAlert('The customer has been added successfully!');
        },
        onError: (error) => {
            showErrorAlert(error)
        },
    });

    const mutationUpdate = useMutation({
        mutationFn: updateCustomer,
        onSuccess: () => {
            setOpenDialog(false);
            refetch();
            showSuccessAlert('The customer has been updated successfully!');
        },
        onError: (error) => {
            showErrorAlert(error)
        },
    });

    const handleSave = () => {
        if (customerToEdit && customerToEdit.id) {
            mutationUpdate.mutate({
                customerId: customerToEdit.id, 
                customerData: customerToEdit
            });
        } else {
            mutationAdd.mutate(newCustomer)
        }
    };
    
    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchTerm(query);
        if (data) {
        const filteredCustomers = data.filter((customer) =>
            customer.first_name.toLowerCase().includes(query) ||
            customer.last_name.toLowerCase().includes(query) ||
            customer.email.toLowerCase().includes(query)
        );
        setFilteredData(filteredCustomers);
        }
    };
    useEffect(() => {
        if (data) {
        const filteredCustomers = data.filter((customer) =>
            customer.first_name.toLowerCase().includes(searchTerm) ||
            customer.last_name.toLowerCase().includes(searchTerm) ||
            customer.email.toLowerCase().includes(searchTerm)
        );
        setFilteredData(filteredCustomers);
        }
    }, [data, searchTerm]); 

    if (isLoading) return <LinearProgress />; // Loading bar
    
    if (error) return <p>Error fetching customers: {error.message}</p>;
    
    return (
        <MainLayout>
            <Box
                sx={{
                flex: 1,
                height: '100vh',
                backgroundColor: '#f4f4f4',
                }}
            >
             
                    <div className="d-flex justify-content-between mb-3">
                        <h2>Customer List</h2>
                        <Button variant="contained" color="primary" onClick={handleAdd}>
                        Add Customer
                        </Button>
                    </div>

                    <TextField
                        label="Search"
                        variant="outlined"
                        fullWidth
                        value={searchTerm}
                        onChange={handleSearch}
                        margin="normal"
                    />
                    {/* table */}
                    <CustomerTable onEdit={handleEdit} onDelete={handleDelete} filteredData={filteredData} />
                
                    {/* Add/Edit Dialog */}
                    <CustomerModal
                        open={openDialog} 
                        onClose={handleDialogClose}
                        customerToEdit={customerToEdit}
                        newCustomer={newCustomer}
                        setCustomerToEdit={setCustomerToEdit}
                        setNewCustomer={setNewCustomer}
                        handleSave={handleSave}
                    />
                
            </Box>
        </MainLayout>
    );
};

export default Customer;


