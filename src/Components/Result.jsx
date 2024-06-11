import React from 'react'
import Header_comp from './Header_comp'
import confetti from "canvas-confetti";
export default function Result({data,marks,handlerestartq}) {
  function fun(){
    
  }
  return (
    <div>
      <Header_comp/>
      <div className='startcommaindev container'>
        <h3 className='resulttit' >Your Result</h3>
        <div className='aa a container'>
          <div className="card " style={{ width: "20rem", }}>
            <div className="card-body slidercomcard">
              <h3 className="card-title">Total Marks: {data.length*2}</h3>
              <h3 className="card-title">obtain Marks: {marks}</h3>
              <br/>
              <h3 className="card-title">{marks>=(data.length/2)*2?"Congratulations ":"Sorry try again"}</h3>
              <br/>
              <button type="button" className="btn btn-lg btn-primary" onClick={handlerestartq}>Restart Quiz</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
