import styled from "styled-components";
import { IoStarSharp, IoStarHalfSharp } from "react-icons/io5";

export const StyledStarHalf = styled(IoStarHalfSharp)`
  width: ${({$width}) => ($width)}px;
  height: ${({$width}) => ($width)}px;
  color: var(--accent-yellow);
`;
export const StyledStar = styled(IoStarSharp)`
  width: ${({$width}) => ($width)}px;
  height: ${({$width}) => ($width)}px;
  color: var(--accent-yellow);
`;
export const StyledStarContainer = styled.div`
  display: flex;
  gap: ${({$gap}) => ($gap)}px;
`;
