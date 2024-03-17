import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="bg-background">
      <div className="w-[95%] sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1200px] flex flex-col min-h-screen mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
