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
import { CommentList } from "./CommentList";
import { CommentStyle } from "./CommentStyle";
import { DetailContain } from "./DetailContain";
import { Price } from "./Price";
import Button, { btnStyle } from "../../components/Button";

function Detail() {
  const queryClient = useQueryClient();
  const { id } = useParams();
  // const [isEditMode, setIsEditMode] = useState(false);
  const [numid, setNumid] = useState("");
  const [comments, setComments] = useState({
    contents: "",
    id: numid,
  });
  const token = cookies.get("loginId");
  console.log(token);

  const [newComments, setNewComments] = useState({
    contents: "",
  });

  const onItemNum = (id) => {
    setNumid(id);
  };

  const [edit, setEdit] = useState(false);

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
  //댓글 수정
  const { mutate: updateComment } = useMutation({
    mutationFn: async (payload) => {
      console.log(payload);
      const token = cookies.get("token");
      await api.patch(
        `/api/detailPage/${id}/comment/${payload[1].commentId}`,
        {
          contents: payload[0].contents,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
        return data;
      } else {
        const { data } = await api.get(`/api/detailPage/product/${id}`);
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
  console.log(newComments);

  return (
    <>
      <Header />
      <DetailContain>
        <div>
          <img src={`${data.img}`} alt={data.title} />
        </div>
        <Price>
          <div style={{ fontSize: "15px", color: "gray" }}>
            {data.brandname}
          </div>
          <div>{data.title}</div>
          <div>{data.discountrate}</div>
          <div style={{ fontSize: "30px" }}>{data.price}</div>
        </Price>
      </DetailContain>
      <CommentStyle
        onClick={(e) => {
          e.preventDefault();
          // mutate(comments);
        }}
      >
        <h2>리뷰작성하기</h2>
        <div>
          <input
            style={{ width: "500px", height: "150px" }}
            type="text"
            value={comments.contents}
            name="contents"
            required
            onChange={changeInputHandler}
          />
        </div>
        <Button
          width={"150px"}
          style={btnStyle.blueBtn}
          onClick={() => mutate(comments)}
        >
          리뷰작성 완료
        </Button>
      </CommentStyle>
      <div>
        {contents.data.map((item) => {
          return (
            <CommentList key={item.commentId}>
              {edit && item.commentId === numid ? (
                <div>
                  <input
                    type="text"
                    value={newComments.contents}
                    name="contents"
                    onChange={(e) =>
                      setNewComments({
                        ...newComments,
                        contents: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              ) : (
                <>
                  <div>{item.loginId}</div>
                  <div>{item.comment}</div>
                </>
              )}
              {edit && item.commentId === numid ? (
                <>
                  <Button
                    width={"100px"}
                    style={btnStyle.blueBtn}
                    onClick={() => {
                      updateComment([newComments, item]);
                      if (newComments.contents !== "") {
                        setEdit(!edit);
                      }
                    }}
                  >
                    완료
                  </Button>
                </>
              ) : (
                <div>
                  <Button
                    width={"100px"}
                    style={btnStyle.blueBtn}
                    onClick={() => {
                      onItemNum(item.commentId);
                      setEdit(!edit);
                    }}
                  >
                    수정
                  </Button>
                  <Button
                    width={"100px"}
                    style={btnStyle.blueBtn}
                    onClick={() => deletComment(item.commentId)}
                  >
                    삭제
                  </Button>
                </div>
              )}
            </CommentList>
          );
        })}
      </div>
    </>
  );
}

export default Detail;
