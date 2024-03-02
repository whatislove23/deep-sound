import {
  // useEffect,
  useState,
} from "react";
import Container from "../Container/Container";
import {
  StyledSubscribeFormSection,
  StyledFormContainer,
  StyledForm,
  StyledEmailInput,
  StyledFormButton,
  StyledArrow,
} from "./StyledSubscribeForm.styled";

function SubscribeForm() {
  const [email, setEmail] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    /*
    
    
    some code

*/
  };
  return (
    <StyledSubscribeFormSection>
      <Container>
        <StyledFormContainer>
          <h2 className="title">Subscribe to our Newsletter</h2>
          <h3 className="subtitle">
            Be the first to know about exclusive offers
          </h3>
          <StyledForm onSubmit={onFormSubmit}>
            <StyledEmailInput
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <StyledFormButton type="submit" btnType="yellow">
              <span>Subscribe</span>
              <StyledArrow />
            </StyledFormButton>
          </StyledForm>
        </StyledFormContainer>
      </Container>
    </StyledSubscribeFormSection>
  );
}

export default SubscribeForm;
