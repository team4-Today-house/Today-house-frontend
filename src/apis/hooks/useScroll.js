import { useEffect, useState } from "react"

export const useScroll = () => {
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    console.log('y', window.scrollY, 'x', window.scrollX);
  }
  useEffect(() => {
    //scroll이벤트 생성 후 삭제
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  return scroll;
}