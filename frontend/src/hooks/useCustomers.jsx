import { useQuery } from "@tanstack/react-query";
import { fetchCustomers } from "../api/customerApi";

export const useCustomers = () => {
  const { data, isLoading, refetch, error } = useQuery({
    queryKey: ['customers'],
    queryFn: fetchCustomers,
  });
  return { data, isLoading, refetch, error };
};