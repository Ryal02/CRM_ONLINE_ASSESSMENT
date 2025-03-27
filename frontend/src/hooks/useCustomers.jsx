import { useQuery } from "react-query";
import { fetchCustomers } from "../api/customerApi";

export const useCustomers = () => {
  const { data, isLoading, refetch, error } = useQuery("customers", fetchCustomers);
  return { data, isLoading, refetch, error };
};