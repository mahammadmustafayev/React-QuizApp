

function Question({currentQuestions,handleAnswer}) {
    
  return (
    <div className='center' key={currentQuestions.id}>  
       <div className="container">
          <h1>{currentQuestions.question}</h1>
          <div className='questionOptions'>
            {currentQuestions.options.map((option,index)=>(
                <button key={index} className="btn" onClick={()=>handleAnswer(option)}>
                    <span>{option}</span>
                </button>

            ))}
          </div>
       </div>
    </div>
  )
}

export default Question
