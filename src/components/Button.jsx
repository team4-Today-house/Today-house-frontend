import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import styled from "styled-components";

export function Button({ children, style, width, onClick }) {
  const [isHover, setIsHover] = useState(false);
  const mouseEnterHandler = () => {
    setIsHover(true);
  };
  const mouseLeaveHandler = () => {
    setIsHover(false);
  };
  style.width = width;
  switch(style.style) {
    case "blueBtn":
      style.backgroundColor = isHover ? "#0480ad" : "#00bbff";
      break;
    default:
      style.backgroundColor = isHover ? "#ad6904" : "#ffe0a7";
  }

  return (
    <StButton 
      style={style} 
      onClick={onClick}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {children}
    </StButton>
  );
}

const StButton = styled.button`
  cursor: pointer;
`;

export const btnStyle = {
  blueBtn: {
    style: "blueBtn",
    height: "52px",
    fontSize: "20px",
    fontWeight: "900",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
  loginBtn: {
    style: "blueBtn",
    width: "100%",
    margin: "20px 0",
    minHeight: "50px",
    fontSize: "17px",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    borderRadius: "4px",
    color: "#fff",
  }
}

export default Button;