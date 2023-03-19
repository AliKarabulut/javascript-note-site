import { Fragment } from "react";
import MethodBody from "../MethodBody/MethodBody";
import TitleCard from "../TitleCard/TitleCard";

const MethodDetail = () => {
  return (
    <Fragment>
      <MethodBody />
    </Fragment>
  );
};
export default MethodDetail;

export const loader = async ({ params }) => {
  const id = params.id;
  const response = await fetch(
    "https://javascript-metot-default-rtdb.firebaseio.com/"
  );

  //...
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Eventler fetch yapılamadı" }),
      { status: 500 }
    );
  } else {
    return response;
  }
};
