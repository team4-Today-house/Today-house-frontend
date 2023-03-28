import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../../axios/api";
import { queryKeys } from "../../utils/createQueryKey";

// 오늘의 핫딜 데이터 가져오기
export const useGetHotItems = () => {
  const queryClient = useQueryClient();
  const {data, isLoading, isSuccess} = useQuery({
    queryKeys: queryKeys.GET_HOTITEMS,
    queryFn: async () => {
      const {data} = await api.get(`/api/hotitem`);
      
      console.log("핫아이템",data);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: queryKeys.GET_HOTITEMS});
    }
  });

  return ({
    hotItems: data,
    getHotItemsIsLoading: isLoading,
    getHotItemsIsSuccess: isSuccess,
  });
};