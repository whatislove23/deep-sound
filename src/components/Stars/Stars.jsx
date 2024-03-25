import PropTypes from "prop-types";
import { StyledStarHalf, StyledStar, StyledStarContainer } from "./StyledStars.styled";

export default function Stars({ rating, width = 12, gap = 2, ...props }) {
  const res = [];
  for (let i = 1; i <= Math.floor(rating); i++) {
    res.push(<StyledStar $width={width} key={i} className="fullStar" />);
  }
  let rest = Number("0." + (rating.toString().split(".")[1] || 0));
  if (rest <= 0.5 && rest !== 0)
  res.push(<StyledStarHalf $width={width} key={res.length + 1} />);
  if (rest > 0.5) 
  res.push(<StyledStar $width={width}  key={res.length + 1} />);
  return <StyledStarContainer $gap={gap} {...props}>{res}</StyledStarContainer>;
}

Stars.propTypes = { 
  rating: PropTypes.number,
  width: PropTypes.number,
  gap: PropTypes.number
};
