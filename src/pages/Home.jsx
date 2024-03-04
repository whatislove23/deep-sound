import Hero from "../components/Hero/Hero";
import NewArrives from "../components/NewArrives/NewArrives";
import NoName from "../components/NoName/NoName";
import OnSale from "../components/OnSale/OnSale";
import SubscribeForm from "../components/SubscribeForm/SubscribeForm";
import { StyledMain } from "./StyledHome.styled";

function Home() {
  return (
    <StyledMain>
      <Hero />
      <NewArrives />
      <OnSale />
      <NoName />
      <SubscribeForm />
    </StyledMain>
  );
}

export default Home;
