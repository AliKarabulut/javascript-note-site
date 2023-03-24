import { Fragment } from "react";
import { useRouteError } from "react-router-dom";
import Error from "../components/Error/Error";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  let title = "500";
  let message = "Bir şeyler yanlış gitti";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "404";
    message = "Aradığınız şey bulunamadı";
  }

  return (
    <Fragment>
      <Error title={title} message={message}></Error>
    </Fragment>
  );
};
export default ErrorPage;
