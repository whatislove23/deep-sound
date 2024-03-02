import Hero from "../components/Hero/Hero";
import NewArrives from "../components/NewArrives/NewArrives";
import NoName from "../components/NoName/NoName";
import OnSale from "../components/OnSale/OnSale";
import SubscribeForm from "../components/SubscribeForm/SubscribeForm";

function Home() {
  return (
    <main>
      <Hero />
      <NewArrives />
      <OnSale />
      <NoName />
      <SubscribeForm />
    </main>
  );
}

export default Home;
