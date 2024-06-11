import React from 'react'
import Header_comp from './Header_comp'
export default function Start_page({handlestartq}) {
    return (
        <div>
            <Header_comp/>
            <div className='startcommaindev container'>
                <div className='aa container'>
                    <div className="card " style={{ width: "23rem", }}>
                        <div className="card-body slidercomcard">
                            <h3 className="card-title">Quiz Related to <br /> Programming</h3>
                            <br />
                            <button type="button" className="btn btn-lg btn-primary" onClick={handlestartq}>Start Quiz</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
