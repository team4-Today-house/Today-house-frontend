import { useQuery } from "@tanstack/react-query";
import api from "../../axios/api";
import { queryKeys } from "../../utils/createQueryKey";

// 오늘의 핫딜 데이터 가져오기
export const useGetHotItems = () => {
  const {data, isLoading, isSuccess} = useQuery({
    queryKeys: queryKeys.GET_HOTITEMS,
    queryFn: async () => {
      const {data} = await api.get(`/api/hotitem`);
      console.log("핫딜 받아와", data);
      return data;
    }
  });

  return ({
    hotItems: data,
    getHotItemsIsLoading: isLoading,
    getHotItemsIsSuccess: isSuccess,
  });
};