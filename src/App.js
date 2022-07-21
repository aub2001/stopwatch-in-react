import React, { useState } from 'react';
import Buttons from './buttons';
import Clock from './clock';
import styled from 'styled-components';

const Container = styled.div`
  height: 60vh;
  width: 60vw;
  margin-left: 20vw;
  margin-top: 30vh;
  text-align: center;
`

const Box = styled.div`
  height: 10px;
  width: 10px;
  background-color: black;
`


function App() {


  const [time, setTime] = useState({hours: 0 , minutes: 0 , seconds: 0, millseconds: 0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);


  // WILL HOLD ALL UPDATED TIMES
  var h = time.hours;
  var m = time.minutes;
  var s = time.seconds;
  var ms = time.millseconds;

  //temp to store time interval
  var int = null;


  const start = () => {
     timer();
     setStatus(1);
     setInterv(setInterval(timer,10));
  }

  const timer = () => {
    ms+=10;
    if (ms == 1000){
      s++;
      ms = 0;
    }
    if(s == 60){
      m++;
      s=0;
    }
    if(m ==60){
      h++;
      m=0;
    }
    if(h == 24){
      h =0;
    }

    return setTime({hours:h, minutes:m, seconds:s, millseconds:ms});
  }


  const pause = () =>{
    clearInterval(interv)
    setStatus(2);
  }


  const reset = () =>{
    clearInterval(interv);
    setTime({hours: 0 , minutes: 0 , seconds: 0, millseconds: 0});
    setStatus(0);
  }


  const resume = () =>{
    start();
    setStatus(1);
  }


  return (
    <div>
    <Container>
        <Clock time={time} />
        <Buttons status={status} start={start} pause={pause} resume={resume} reset={reset} />
    </Container>
    
    </div>
  )
}

export default App;
