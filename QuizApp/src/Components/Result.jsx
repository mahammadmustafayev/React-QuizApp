
function Result({score,total}) {
  return (
    <div>
      <h2>Quiz Bitdi!</h2>
      <p>
        Sizin nəticəniz: {score} / {total} 
      </p>
      <div style={{fontSize:'13em'}}>
         <span>{score==0 ? '🥺' : '😁'}</span>
      </div>
      <button onClick={() => window.location.reload()}>Yenidən başla</button>
    </div>
  )
}

export default Result
