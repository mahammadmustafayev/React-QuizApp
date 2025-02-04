import { useState } from 'react'
import Question from './Question'
import Result from './Result'


function Quiz() {
  
    const questions=[
        {
            id:1,
            question:'Reactda en cox istifade olunan hook hansidir ?',
            options:['useState','useEffect','useRef','useReducer'],
            answer:'useState'
        },
        {
            id:2,
            question:'Front-End-de elementlere hereketlilik vermek ucun hansi istifade olunur?',
            options:['HTML','CSS','JavaScript','Java'],
            answer:'JavaScript'
        },
        {
            id:3,
            question:'Ilham Eliyev necenci ilde anadan olmustur?',
            options:['1955','1968','1993','1961'],
            answer:'1961'
        }
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)
 
    const handleAnswer=(selectedOption)=>{
        
       if (questions[currentQuestion].answer==selectedOption) {
         
          setScore(score+1);
       }
       const nextQuestion=currentQuestion+1
       if (nextQuestion<questions.length) {
          setCurrentQuestion(nextQuestion)
       }
       else{
         setShowResult(true)
       }
       console.log(score)
    }
   
  return (
    <div>
        {showResult 
           ? <Result score={score} questionsCount={questions.length}/> 
           : <Question currentQuestions={questions[currentQuestion]} handleAnswer={handleAnswer}/> 
        }


    </div>
  )
}

export default Quiz
