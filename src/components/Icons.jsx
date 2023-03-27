import React from 'react'
import { ReactComponent as StarSvg } from "../assets/images/star.svg";

export function StarIcon({width, height, color}) {
  return (
    <>
      <StarSvg
        width={width}
        height={height}
        fill={color}
      />
    </>
  )
}

export const icons = {
  star:{
    width: 14,
    height: 14,
    filledColor: "#00bbff",
    unfilledColor: "#C3C3C3",
  },
}