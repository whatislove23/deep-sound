import PropTypes from "prop-types";
import { StyledStarHalf, StyledStar } from "./StyledStars.styled";

export default function Stars({ rating, width = 12, gap = 2, ...props }) {
  const res = [];
  for (let i = 1; i <= Math.floor(rating); i++) {
    res.push(<StyledStar $width={width} $gap={gap} key={i} className="fullStar" />);
  }
  let rest = Number("0." + (rating.toString().split(".")[1] || 0));
  if (rest <= 0.5)
    res.push(<StyledStarHalf $width={width} $gap={gap} key={res.length + 1} />);
  if (rest >= 0.7) res.push(<StyledStar $width={width} $gap={gap} key={res.length + 1} />);
  return <div {...props}>{res}</div>;
}

Stars.propTypes = { 
  rating: PropTypes.number,
  width: PropTypes.number,
  gap: PropTypes.number
};
