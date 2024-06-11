import { useState } from 'react'
import './App.css'
import Start_page from './Components/Start_page'
import Result from './Components/Result'
import Questions_page from './Components/Questions_page'
import { data } from './Data/QuizData'
import confetti from "canvas-confetti";


function App() {
  const [startq, setstartq] = useState(true)
  const [showq, setshowq] = useState(0)
  const [marks, setmarks] = useState(0)
  const [disable, setdisable] = useState(false)

  
  //fun to start the quiz when click on the start button
  let handlestartq = () => {
    setstartq(!startq)
  }
  //fun to show the quiz question when click on the next button
  let handleshowq = () => {
    setshowq(showq + 1)
    setdisable(false)
  }

  //fun to handel options
  let handlemarks = (qop) => {
    setdisable(true)
    if (data[showq].answer === qop) {
      setmarks(marks + 2)
    }
    else {
      setmarks(marks)


    }
  }
  //fun to show the quiz question when click on the next button
  let handlerestartq = () => {
    setstartq(!startq)
    setshowq(0)
    setmarks(0)

  }
  
  // to handle celebratrion confitti
  function confit() {
    confetti(
      {
        particleCount: 400,
        spread: 100,
      }
    )
  }


  return (
    (startq) ?
      (<Start_page
        handlestartq={handlestartq}
      />)
      : (
        (showq <= data.length - 1) ?
          (<Questions_page
            data={data}
            handleshowq={handleshowq}
            showq={showq}
            handlemarks={handlemarks}
            disabled={disable}


          />)
          : (<>
            <Result
              data={data}
              marks={marks}
              handlerestartq={handlerestartq}
            />
            {
              confit()
            }
          </>)
      )

  )
}

export default App
