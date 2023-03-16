import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/MethodNavbar";
import TitleCard from "../TitleCard/TitleCard";

const MethodRootLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <TitleCard />
    </Fragment>
  );
};

export default MethodRootLayout;
