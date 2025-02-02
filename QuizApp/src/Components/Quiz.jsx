import { useState ,useEffect} from "react";
import Result from "./Result";
import Question from "./Question";


function Quiz() {
  // const [questions, setQuestions] = useState([])
  // useEffect(() => {
  
  //   const fetchData= async()=>{
  //      const response= await fetch("https://gist.githubusercontent.com/mahammadmustafayev/9160f16d13ff46fd3e9eb1d0fbef2de9/raw/8d467de819b0a1b17c80b7047eed876a5fdba368/questions")
  //      const result=await response.json();
  //      setQuestions(result)
       
  //   }
  //   fetchData();
  // }, [])
  const questions=[
    {
      "id": 1,
      "question": "React nə üçün istifadə olunur?",
      "options": ["UI yaratmaq", "Backend yazmaq", "Databazada işləmək", "Heç biri"],
      "answer": "UI yaratmaq",
    },
    {
      "id": 2,
      "question": "React-da hansı hook daha çox istifadə olunur?",
      "options": ["useEffect", "useState", "useContext", "useReducer"],
      "answer": "useState",
    },
    {
      "id": 3,
      "question": "React komponentlərini harada istifadə edirik?",
      "options": ["HTML", "CSS", "JavaScript", "Python"],
      "answer": "JavaScript",
    },
    ]
  
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
      <h1>Test</h1>
        {showResult ? <Result score={score} total={questions.length}/> 
        : <Question question={questions[currentQuestion]} handleAnswer={handleAnswer}/>}
    </div>
  )
}

export default Quiz
