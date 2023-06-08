import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import MessageBar from "./MessageBar/MessageBar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <MessageBar />
      <Outlet />
    </>
  );
};

export default Layout;
