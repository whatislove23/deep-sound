import styled from "styled-components";
import { IoStarSharp, IoStarHalfSharp } from "react-icons/io5";
import Container from "../Container/Container";

export const StyledStarHalf = styled(IoStarHalfSharp)`
  width: 12px;
  height: 12px;
  color: var(--accent-yellow);
`;
export const StyledStar = styled(IoStarSharp)`
  width: 12px;
  height: 12px;
  color: var(--accent-yellow);
`;
export const StyledStarContainer = styled(Container)`
  display: flex;
  width: 68px;
  gap: 2px;
`;
