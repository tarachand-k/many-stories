import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import NewOffer from "../components/NewOffer";

function RootLayout() {
  return (
    <main>
      <NewOffer />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default RootLayout;
