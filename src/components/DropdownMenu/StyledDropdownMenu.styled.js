import styled, { keyframes } from "styled-components";
import Container from "../Container/Container";

// ==== Animation for DropdownMenu
const openMenu = keyframes`
from {
    opacity: 0;
    height: 0;
  }
to {
    opacity: 1;
    height: 331px;
}`;

const closeMenu = keyframes`
from {
    opacity: 1;
    height: 331px;
  }
  to {
    opacity: 0;
    height: 0;
  }`;
//===========

export const StyledDropdownMenu = styled.div`
  width: 100%;
  height: 0;
  max-width: 1440px;
  position: absolute;
  left: 0;
  top: 145px;
  overflow: hidden;

  /* &.open-menu {
    animation: ${openMenu} 0.35s linear forwards;
  }
  &.close-menu {
    animation: ${closeMenu} 0.35s linear forwards;
  } */

  &.open-menu {
    transition: opacity 0.35s linear, height 0.35s linear;
    opacity: 1;
    height: 331px;
  }
  &.close-menu {
    transition: opacity 0.35s linear, height 0.35s linear;
    opacity: 0;
    height: 0;
  }
`;

export const StyledContainer = styled(Container)`
  height: 331px;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 40px;
  background-color: rgba(12, 11, 11, 0.97);

  h3 {
    text-transform: capitalize;
    color: var(--secondary-text);
  }

  ul {
    color: var(--secondary-text);
    column-count: 3;
    margin-top: 24px;
    border-top: 0.5px solid #797777;
    padding-top: 24px;
  }

  ul > li {
    margin-bottom: 16px;
  }
`;
