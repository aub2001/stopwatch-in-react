import React, { useState} from 'react';
import Buttons from './components/buttons';
import Clock from './components/clock';
import styled from 'styled-components';
import SplitTime from './components/slpitTime';


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
  const [splitTime, setSplitTime] = useState({hours: 0 , minutes: 0 , seconds: 0, millseconds: 0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState("initial");
  const [index, setIndex] = useState(1);
  const [text, setText] = useState("");


  // WILL HOLD ALL UPDATED TIMES
  var h = time.hours;
  var m = time.minutes;
  var s = time.seconds;
  var ms = time.millseconds;


  var sh = splitTime.hours;
  var sm = splitTime.minutes;
  var ss = splitTime.seconds;
  var sms = splitTime.millseconds;


  const start = () => {
     timer();
     setStatus("pause");
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
    
    sms+=10;
    if (sms == 1000){
      ss++;
      sms = 0;
    }
    if(ss == 60){
      sm++;
      ss=0;
    }
    if(sm ==60){
      sh++;
      sm=0;
    }
    if(sh == 24){
      sh =0;
    }

    setSplitTime({hours:sh, minutes:sm, seconds:ss, millseconds:sms});
    setTime({hours:h, minutes:m, seconds:s, millseconds:ms});
  }



  const pause = () =>{
    clearInterval(interv);
    setStatus("reset");
    setIndex(index + 1);
    setText(text + ` #${index}  ${time.hours}:${time.minutes}:${time.seconds}:${time.millseconds}    pause \n`);
  }


  const reset = () =>{
    clearInterval(interv);
    setTime({hours: 0 , minutes: 0 , seconds: 0, millseconds: 0});
    setSplitTime({hours: 0 , minutes: 0 , seconds: 0, millseconds: 0});
    setStatus("initial");
    setText("");
  }


  const resume = () =>{
    start();
  }

  const split = () =>{
    console.log("her11e");
    clearInterval(interv);
    ss = sm = sh = sms = 0 ;
    setIndex(index + 1);
    setText(text + ` #${index}  ${time.hours}:${time.minutes}:${time.seconds}:${time.millseconds}    slpit \n`);
    start();
  }

  return (
    <div>
    <Container>
        <Clock time={time} />
        <SplitTime time={splitTime}/>
        <Buttons status={status} start={start} pause={pause} resume={resume} reset={reset} split={split} />
        <div>
          {text}
        </div>
    </Container>
    
    </div>
  )
}

export default App;
