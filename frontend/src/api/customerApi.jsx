import ApiUrl from "./axios";
import Cookies from 'js-cookie';
// Function to get Authorization headers
const getAuthHeaders = () => {
  const token = Cookies.get('token');
  const crfToken = Cookies.get("XSRF-TOKEN");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-XSRF-TOKEN": decodeURIComponent(crfToken),
    },
  };
};

// Fetch all customers
export const fetchCustomers = async () => {
  const response = await ApiUrl.get("/customers");
  return response.data.data;
};

// Add a new customer
export const addCustomer = async (customerData) => {
  const response = await ApiUrl.post("/customers", customerData, getAuthHeaders());
  return response.data;
};

// Update an existing customer
export const updateCustomer = async ({ customerId, customerData }) => {
  const response = await ApiUrl.put(`/customers/${customerId}`, customerData, getAuthHeaders());
  return response.data;
};

// Delete a customer
export const deleteCustomerApi = async (customerId) => {
  const response = await ApiUrl.delete(`/customers/${customerId}`, getAuthHeaders());
  return response.data;
};
