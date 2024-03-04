import Hero from "../components/Hero/Hero";
import NewArrives from "../components/NewArrives/NewArrives";
import OnSale from "../components/OnSale/OnSale";
import SubscribeForm from "../components/SubscribeForm/SubscribeForm";
import Blog from "../components/Blog/Blog";

function Home() {
  return (
    <main>
      <Hero />
      <NewArrives />
      <OnSale />
      <Blog/>
      <SubscribeForm />
    </main>
  );
}

export default Home;
