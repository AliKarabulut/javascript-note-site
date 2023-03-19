import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/MethodNavbar";
import TitleCard from "../TitleCard/TitleCard";

const MethodRootLayout = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default MethodRootLayout;
