import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CartModal from "../Cart/CartModal/CartModal";
import { useState } from "react";

function Layout() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  function toggleModal () {setIsModalOpened(!isModalOpened)};

  return (
    <>
      <Header openModal={toggleModal} />
      <CartModal
        isEmpty={false}
        isModalOpened={isModalOpened}
        closeModal={toggleModal}
      />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
