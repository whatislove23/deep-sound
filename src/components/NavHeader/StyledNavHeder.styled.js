import styled from "styled-components";

export const StyledNavHeder = styled.nav`
  width: 100%;
  margin-top: 32px;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 16px;
  }

  ul > li,
  button {
    display: flex;
    align-items: center;
  }

  .icon-wrapp {
    display: inline-block;
    width: 20px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    transition: transform 0.35s linear;
  }

  .active-menu {
    transform: rotate(180deg);
  }
`;
