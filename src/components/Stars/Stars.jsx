import React from "react";
import PropTypes from "prop-types";
import { StyledStarHalf, StyledStar } from "./StyledStars.styled";

export default function Stars({ rating, ...props }) {
  const res = [];
  for (let i = 1; i <= Math.floor(rating); i++) {
    res.push(<StyledStar key={i} className="fullStar" />);
  }
  let rest = Number("0." + (rating.toString().split(".")[1] || 0));
  if (rest <= 0.5)
    res.push(<StyledStarHalf width={"12px"} key={res.length + 1} />);
  if (rest >= 0.7) res.push(<StyledStar key={res.length + 1} />);
  return <div {...props}>{res}</div>;
}

Stars.propTypes = { rating: PropTypes.number };
