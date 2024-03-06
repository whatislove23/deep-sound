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
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.80206 11.7965C9.67633 11.9179 9.50793 11.9851 9.33313 11.9836C9.15833 11.9821 8.99112 11.912 8.86752 11.7884C8.74391 11.6647 8.6738 11.4975 8.67228 11.3227C8.67076 11.1479 8.73796 10.9795 8.8594 10.8538L13.0547 6.65847H1.33073C1.15392 6.65847 0.984349 6.58824 0.859325 6.46321C0.7343 6.33819 0.664063 6.16862 0.664062 5.99181C0.664062 5.815 0.7343 5.64543 0.859325 5.5204C0.984349 5.39538 1.15392 5.32514 1.33073 5.32514H13.0547L8.8594 1.12981C8.73796 1.00407 8.67076 0.835672 8.67228 0.660874C8.6738 0.486076 8.74391 0.318868 8.86752 0.195262C8.99112 0.0716568 9.15833 0.00154415 9.33313 2.52018e-05C9.50793 -0.00149374 9.67633 0.0657025 9.80206 0.187141L15.1354 5.52047C15.1972 5.58254 15.2461 5.65616 15.2794 5.73714C15.3133 5.81777 15.3307 5.90435 15.3307 5.99181C15.3307 6.07927 15.3133 6.16585 15.2794 6.24647C15.2461 6.32745 15.1972 6.40108 15.1354 6.46314L12.4687 9.12981L9.80206 11.7965Z"
                  fill="#303030"
                />
              </svg>
            </StyledFormButton>
          </StyledForm>
        </StyledFormContainer>
      </Container>
    </StyledSubscribeFormSection>
  );
}

export default SubscribeForm;
