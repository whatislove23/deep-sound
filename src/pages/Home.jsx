import Hero from "../components/Hero/Hero";
import NewArrives from "../components/NewArrives/NewArrives";
import OnSale from "../components/OnSale/OnSale";
import SubscribeForm from "../components/SubscribeForm/SubscribeForm";
import Blog from "../components/Blog/Blog";
import { StyledMain } from "./StyledHome.styled";


function Home() {
  return (
    <StyledMain>
      <Hero />
      <NewArrives />
      <OnSale />
      <Blog/>
      <SubscribeForm />
    </StyledMain>
  );
}

export default Home;
