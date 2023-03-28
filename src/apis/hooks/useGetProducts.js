import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../axios/api";
import { queryKeys } from "../../utils/createQueryKey";

// 제품 리스트 받아오기
export const useGetProducts = () => {
  const queryClient = useQueryClient();
  const { data, mutate, isLoading, isSuccess, isError } = useMutation({
    queryKeys: queryKeys.GET_PRODUCTS,
    //mutate했을 때 실행
    mutationFn: async () => {
      const {data} = await api.get(`/api/product`);
      console.log("프로덕트",data);
      return data;
    },
    //성공했을때 실행
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: queryKeys.GET_PRODUCTS});
    },
    //에러났을때 실행
    onError: () => {
      console.log("제품들 불러오기 실패");
      return {errorMsg: "불러오는 데 실패했습니다.\n다시 시도해주세요."};
    }
  });

  return ({
    products: data,
    getProducts: mutate,
    getProductsIsLoading: isLoading,
    getProductsIsSuccess: isSuccess,
    getProductsIsError : isError,
  });
};