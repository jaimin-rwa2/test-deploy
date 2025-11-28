import { Outlet, useLocation } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect } from "react";

export default function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
