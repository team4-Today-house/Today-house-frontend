import { useQuery } from "@tanstack/react-query";
import api from "../../axios/api";
import { queryKeys } from "../../utils/createQueryKey";

// 제품 리스트 받아오기
export const useGetProducts = () => {
  const {data, isLoading, isSuccess, isError} = useQuery({
    queryKeys: queryKeys.GET_PRODUCTS,
    queryFn: async () => {
      const {data} = await api.get(`/api/product`);
      console.log("제품들 받아와", data);
      return data;
    }
  });

  return ({
    products: data,
    getProductsIsLoading: isLoading,
    getProductsIsSuccess: isSuccess,
    getProductsIsError : isError,
  });
};