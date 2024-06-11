import React from 'react'
import Header_comp from './Header_comp'
export default function Questions_page({data,handleshowq,showq,handlemarks,disabled}) {
  return (
    <div>
      <Header_comp />
      <div className='container qqt'>
        <h3>Quiz</h3>
      </div>
      <div className='container border p-4 qqc'>
        <div className='row'key={data[showq].key}>
          <h3>{showq+1}. {data[showq].question}</h3>
          {
            data[showq].options.map((qop,index)=>
              <>
              <div className='col-lg-6'>
                <div className='d-grid gap-2'>
                  <button className='btn btn-outline-primary my-3' disabled={disabled} onClick={()=>handlemarks(qop)}> {qop}
                  </button>
                </div>
              </div>
            </>
            )
          }
          
        </div>
        <div className='nextbtndiv'>
          <button className='nextbtn btn btn-primary ' onClick={()=>handleshowq()} disabled={!disabled}>Next</button>
          <span>{showq} | {data.length}</span>
        </div>
      </div>
    </div>
  )
}
