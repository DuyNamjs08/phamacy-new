import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getHeaders, handleError } from "../helpers/getHeaders";

const fetchData = async (query) => {
  const headers = getHeaders();
  try {
    const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/order`, {
      params: query,
      headers,
    });
    return result.data;
  } catch (error) {
    await handleError(error);
    await fetchData();
  }
};
export const useOrder = (query) => {
  const { data, isLoading, error, status, refetch } = useQuery({
    queryKey: ["order", query],
    queryFn: () => fetchData(query),
  });
  return { data, isLoading, error, status, refetch };
};
const fetchDataPost = async (data) => {
  const headers = getHeaders("json");
  try {
    const result = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/order`,
      data,
      {
        headers,
      }
    );
    return result.data;
  } catch (error) {
    await handleError(error);
  }
};

export const useOrderPost = () => {
  const { mutate, status } = useMutation({
    mutationFn: fetchDataPost,
    onSuccess: () => {},
  });
  return { mutate, status };
};
