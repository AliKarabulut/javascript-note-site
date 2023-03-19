import { Fragment } from "react";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MethodBody from "./MethodBody/MethodBody";
import Navbar from "./Navbar/navbar";
import HelloPage from "./pages/Hello";
import MethodDetail from "./pages/Method";
import MethodRootLayout from "./pages/MethodRoot";
import RootLayout from "./pages/Root";
import Start from "./Start/Start";
import TitleCard from "./TitleCard/TitleCard";

const rooter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: eklenecek
    children: [
      { index: true, element: <HelloPage /> },
      {
        path: "/string",
        element: <MethodRootLayout />,
        children: [{ path: ":id", element: <MethodDetail /> }],
      },
      
    ],
  },
]);

function App() {
  return <RouterProvider router={rooter} />;

  // const isLogin = useSelector((state) => state.login.islogin);

  // return (
  //   <Fragment>
  //     <Navbar></Navbar>
  //     {!isLogin && <Start />}
  //     {isLogin && (
  //       <Fragment>
  //         <MethodBody />
  //         <TitleCard />
  //       </Fragment>
  //     )}
  //   </Fragment>
  // );
}

export default App;
