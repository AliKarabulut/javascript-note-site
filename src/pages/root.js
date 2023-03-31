import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar";

const RootLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
