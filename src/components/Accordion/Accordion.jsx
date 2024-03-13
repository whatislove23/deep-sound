import { useState } from "react";
import PropTypes from "prop-types";
import Container from "../Container/Container";
import {
  StyledAccordion,
  StyledAccordionWrapper,
  StyledAccordionContent,
  StyledAccordionHeader,
  StyledAccordionIcon,
} from "./StyledAccordion.styled";
import chevron from "../../assets/ChevronDown.svg";

function Accordion({ children, title }) {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
  };
	
  return (
    <StyledAccordion>
      <Container>
        <StyledAccordionWrapper>
          <StyledAccordionHeader onClick={handleClick} $isActive={isActive}>
            <StyledAccordionIcon $isActive={isActive}>
              <img src={chevron} alt="open section" />
            </StyledAccordionIcon>
            <h2>{title}</h2>
          </StyledAccordionHeader>
          <StyledAccordionContent $isActive={isActive}>
            {children}
          </StyledAccordionContent>
        </StyledAccordionWrapper>
      </Container>
    </StyledAccordion>
  );
}

export default Accordion;

Accordion.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
