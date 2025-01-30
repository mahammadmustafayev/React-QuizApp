import { useState } from "react";
import Result from "./Result";
import Question from "./Question";


function Quiz() {
    const questions = [
        {
          id: 1,
          question: "React nə üçün istifadə olunur?",
          options: ["UI yaratmaq", "Backend yazmaq", "Databazada işləmək", "Heç biri"],
          answer: "UI yaratmaq",
        },
        {
          id: 2,
          question: "React-da hansı hook daha çox istifadə olunur?",
          options: ["useEffect", "useState", "useContext", "useReducer"],
          answer: "useState",
        },
        {
          id: 3,
          question: "React komponentlərini harada istifadə edirik?",
          options: ["HTML", "CSS", "JavaScript", "Python"],
          answer: "JavaScript",
        },
      ];

      const [currentQuestion, setCurrentQuestion] = useState(0)
      const [score, setScore] = useState(0)
      const [showResult, setShowResult] = useState(false)

     const handleAnswer=(selectedOption)=>{
         if (selectedOption==questions[currentQuestion].answer) {
            setScore(score+1)
         }
         const nextQuestion=currentQuestion+1;
         if (nextQuestion<questions.length) {
            setCurrentQuestion(nextQuestion)
         }
         else{
            setShowResult(true);
         }
     }

  return (
    <div>
        {showResult ? <Result score={score} total={questions.length}/> 
        : <Question question={questions[currentQuestion]} handleAnswer={handleAnswer}/>}
    </div>
  )
}

export default Quiz
