import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CartModal from "../Cart/CartModal/CartModal";

function Layout() {
  return (
    <>
      <Header />
      <CartModal isEmpty={false}/>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
