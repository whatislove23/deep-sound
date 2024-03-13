import styled from "styled-components";

export const StyledAccordion = styled.section`
	margin-bottom: 160px;
`;

export const StyledAccordionWrapper = styled.div`
  background-color: var(--bg-gray);
  border-radius: 20px;
  padding: 32px;
`;

export const StyledAccordionHeader = styled.div`
  padding-bottom: ${(props) => (props.$isActive ? "32px" : "0px")};
  margin-bottom: ${(props) => (props.$isActive ? "32px" : "0px")};
  border-bottom: 1px solid transparent;
  border-bottom-color: ${(props) =>
    props.$isActive && `var(--secondary-bgcolor)`};
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: all ease-in-out 0.5s;

  h2 {
    font-weight: 400;
    font-size: 42px;
    line-height: 1;
    color: rgba(12, 11, 11, 0.7);
  }
`;

export const StyledAccordionIcon = styled.span`
  transform: rotate(${(props) => (props.$isActive ? -180 : 0)}deg);
  transition: all 0.2s;

  img {
    width: 39px;
    height: 39px;
  }
`;

export const StyledAccordionContent = styled.div`
  display: grid;
  grid-template-rows: ${(props) => (props.$isActive ? "1fr" : "0fr")};
  transition: grid-template-rows 500ms;

  & > * {
    overflow: hidden;
  }
`;
