import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";
import TitleCard from "../components/TitleCard/TitleCard";

const RootLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <div>
        <Outlet />
        <TitleCard />
      </div>
    </Fragment>
  );
};
export default RootLayout;
