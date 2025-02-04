

function Result({score ,questionsCount}) {
  return (
    <div className='center'>
        <div className="container">
           <h1>Sizin neticeniz : {score} / {questionsCount}</h1>
           <h1 className='resultEmoji'>
            {
              score==0  
                 ? '🥺' 
                 :(score==1) || (score==2) ? '😐'
                 : '😁'
            }
           </h1>
           <button className="btn-refresh" onClick={()=>window.location.reload()}>
              <span>Yeniden basla</span>
           </button>
        </div>
    </div>
  )
}

export default Result
