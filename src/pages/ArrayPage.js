<<<<<<< HEAD
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { json, useLoaderData } from "react-router-dom";
import { metotActions } from "../store/store";
import MethodBody from "../components/MethodBody/MethodBody";

const NumberPage = () => {
  const dispatch = useDispatch();
  const data = useLoaderData();
  useEffect(() => {
    dispatch(metotActions.addMetotHeader("array"));
  }, []);

  return (
    <Fragment>
      <MethodBody data={data} />
    </Fragment>
  );
};
export default NumberPage;

export const loader = async ({ params }) => {
  const id = params.id;
  const response = await fetch(
    "https://javascript-metot-default-rtdb.firebaseio.com/Methods/array/" +
      id +
      ".json"
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
};
=======
import { Fragment } from "react";
import MethodBody from "../MethodBody/MethodBody";
import TitleCard from "../TitleCard/TitleCard";

const ArrayPage = () => {
  return (
    <Fragment>
      <MethodBody></MethodBody>
      <TitleCard></TitleCard>
    </Fragment>
  );
};
export default ArrayPage;

>>>>>>> origin/main
