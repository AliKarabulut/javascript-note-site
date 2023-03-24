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
    ],
  },
]);

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

export default App;
