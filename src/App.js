import { Fragment,  } from "react";
import { useSelector } from "react-redux";
import MethodBody from "./MethodBody/MethodBody";
import Navbar from "./Navbar/navbar";
import Start from "./Start/Start";
import TitleCard from "./TitleCard/TitleCard";

function App() {
  const isLogin = useSelector((state) => state.login.islogin);

  return (
    <Fragment>
      <Navbar></Navbar>
      {!isLogin && <Start />}
      {isLogin && (
        <Fragment>
          <MethodBody />
          <TitleCard />
        </Fragment>
      )}
    </Fragment>
  );
}

export default App;
