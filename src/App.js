<<<<<<< HEAD
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArrayPage, { loader as arrayLoader } from "./pages/ArrayPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/Home";
import NumberPage, { loader as numberLoader } from "./pages/NumberPage";
import RootLayout from "./pages/root";
import StringPage, { loader as stringLoader } from "./pages/StringPage";
import { metotActions } from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "string/:id", element: <StringPage />, loader: stringLoader },
      { path: "number/:id", element: <NumberPage />, loader: numberLoader },
      { path: "array/:id", element: <ArrayPage />, loader: arrayLoader },
=======
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
      
>>>>>>> origin/main
    ],
  },
]);

<<<<<<< HEAD
const App = () => {
  const dispatch = useDispatch();

  const asd = async () => {
    const response = await fetch(
      "https://javascript-metot-default-rtdb.firebaseio.com/Methods.json"
    );
    const resData = await response.json();

    for (const taskKey in resData.string) {
      dispatch(metotActions.addString(taskKey));
    }
    for (const taskKey in resData.number) {
      dispatch(metotActions.addNumber(taskKey));
    }
    for (const taskKey in resData.array) {
      dispatch(metotActions.addArray(taskKey));
    }
  };

  useEffect(() => {
    asd();
  }, []);

  return <RouterProvider router={router} />;
};
=======
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
>>>>>>> origin/main

export default App;
