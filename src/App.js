import { Fragment, useState } from 'react';
import './App.css';
import Navbar from './Navbar/navbar';
import Start from './Start/Start';

function App() {
  const [isStart, setStart] = useState(false);

  const startHandler = () => {
    setStart(false)
  };

  return (
    <Fragment>
    <Navbar></Navbar>
    {!isStart && <Start onStart={startHandler}/>}
    </Fragment>
  );
}

export default App;
