import API from "../services/api";

// Function to get Authorization headers
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Fetch all customers
export const fetchCustomers = async () => {
  const response = await API.get("/customers");
  return response.data.data;
};

// Add a new customer
export const addCustomer = async (customerData) => {
  const response = await API.post("/customers", customerData, getAuthHeaders());
  return response.data;
};

// Update an existing customer
export const updateCustomer = async ({ customerId, customerData }) => {
  const response = await API.put(`/customers/${customerId}`, customerData, getAuthHeaders());
  return response.data;
};

// Delete a customer
export const deleteCustomerApi = async (customerId) => {
  const response = await API.delete(`/customers/${customerId}`, getAuthHeaders());
  return response.data;
};
