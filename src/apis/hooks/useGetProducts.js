import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../axios/api";
import { queryKeys } from "../../utils/createQueryKey";

// 제품 리스트 받아오기
export const useGetProducts = () => {
  const queryClient = useQueryClient();
  const { data, mutate, isLoading, isSuccess, isError } = useMutation({
    queryKeys: queryKeys.GET_PRODUCTS,
    mutationFn: async () => {
      const {data} = await api.get(`/api/product`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: queryKeys.GET_PRODUCTS});
    },
    onError: () => {
      return {errorMsg: "데이터를 불러오지 못했습니다.\n다시 시도해주세요."};
    }
  });

  return ({
    products: data,
    getProducts: mutate,
    getProductsIsLoading: isLoading,
    getProductsIsSuccess: isSuccess,
    getProductsIsError : isError,
    getProductsErrorMsg : isError.errorMsg,
  });
};