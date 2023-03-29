import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../axios/api";
import { cookies } from "../../shared/cookies";
import Header from "../Header/Header";

function Detail() {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const [comments, setComments] = useState({
    contents: "",
    star: "",
  });

  const changeInputHandler = (event) => {
    const { name, value } = event.target;
    setComments((pre) => ({ ...pre, [name]: value }));
  };

  //댓글 추가
  const { mutate } = useMutation({
    mutationFn: async (payload) => {
      const token = cookies.get("token");
      console.log(payload);
      const data = await api.post(`/api/detailPage/${id}/comment`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      return data.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["getcomments"]);
    },
  });
  //리뷰삭제
  const { mutate: deletComment } = useMutation({
    mutationFn: async (commentId) => {
      const token = cookies.get("token");
      await api.delete(`api/detailPage/${id}/comment/${commentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["getcomments"]);
    },
  });

  //물건 조회
  const { data, isLoading } = useQuery({
    queryKey: ["getdetail"],
    queryFn: async () => {
      if (id < 5) {
        const { data } = await api.get(`/api/detailPage/hotitem/${id}`);
        console.log(data);
        return data;
      } else {
        const { data } = await api.get(`/api/detailPage/product/${id}`);
        console.log(data);
        return data;
      }
    },
  });

  //댓글 조회
  const contents = useQuery({
    queryKey: ["getcomments"],
    queryFn: async () => {
      const { data } = await api.get(`/api/detailPage/${id}/comment`);
      return data;
    },
  });

  if (isLoading || contents.isLoading) {
    return <div>로딩중...</div>;
  }
  console.log(comments);

  return (
    <>
      <Header />
      <div>
        <img src={`${data.img}`} alt={data.title} />
      </div>
      <div>
        <div>{data.title}</div>
        <div>
          {data.discountrate}
          {data.price}
        </div>
      </div>
      <form
        onClick={(e) => {
          e.preventDefault();
          // mutate(comments);
        }}
      >
        <h2>리뷰작성하기</h2>
        <div>
          <input
            type="text"
            value={comments.contents}
            name="contents"
            required
            onChange={changeInputHandler}
          />
          <input
            type="text"
            value={comments.star}
            name="star"
            required
            onChange={changeInputHandler}
          />
          <button onClick={() => mutate(comments)}>리뷰작성 완료</button>
        </div>
      </form>
      <div>
        {contents.data.map((item) => {
          return (
            <div key={item.commentId}>
              <div>{item.comment}</div>
              <div>{item.star}</div>
              <button onClick={() => deletComment(item.commentId)}>삭제</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Detail;
