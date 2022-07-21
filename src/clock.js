import React from 'react'
import styled from 'styled-components';


const Text = styled.div`
    font-weight: 500;
    font-size: 5vw;
    font-family: "Lucida Sans";
`

function Clock(props) {

  const formatTime = () =>{
     let t = `${props.time.hours < 10 ? "0"+props.time.hours : props.time.hours}
     :${props.time.minutes < 10 ? "0"+props.time.minutes : props.time.minutes}
     :${props.time.seconds < 10 ? "0"+props.time.seconds :props.time.seconds}
     :${props.time.millseconds < 10 ? "00"+props.time.millseconds : props.time.millseconds < 100 ? "0" + props.time.millseconds : props.time.millseconds}`;
     return t;
  }

    
  return (
    <Text>{formatTime()}</Text>
  )
}

export default Clock