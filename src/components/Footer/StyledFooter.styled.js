import styled from "styled-components";
import Container from "../Container/Container";

export const StyledFooter = styled.footer`
  background-color: var(--secondary-bgcolor);
`;

export const StyledFooterContainer = styled(Container)`
  display: flex;
  flex-direction: row;

  padding-top: 40px;
  padding-bottom: 32px;
  border-bottom: 1px solid grey;

  h3 {
    color: var(--secondary-text);
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 1.19; // 19px
  }
`;

export const StyledInfoWrapper = styled.div`
  width: 100%;
  max-width: 197px;

  &.address-wrapper {
    max-width: 270px;
    margin-left: 195px;
  }
  &.service-wrapper {
    margin-left: 112px;
  }
  &.service-wrapper ul,
  &.info-wrapper ul {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
  &.info-wrapper {
    margin-left: 115px;
  }
`;

export const StyledSubFooterContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;

  color: var(--secondary-text);

  ul {
    display: flex;
    flex-direction: row;
    column-gap: 56px;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 88px;
    height: 32px;
  }
`;
