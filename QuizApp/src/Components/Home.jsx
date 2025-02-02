import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import Quiz from "./Quiz"
import { useState } from "react"




function Home() {
  const [showQuiz, setShowQuiz] = useState(false)
  const navigate =useNavigate();

  const handleSignOut=()=>{
    auth.signOut();
    navigate('/login')
  }
  return (
    <>
      {showQuiz 
       ?
         <div style={{ textAlign: "center", marginTop: "50px" }}>
           <h1>Quiz App</h1>
           <Quiz />
         </div> 
         : 
         <div>
            <h1>Xos geldiniz {auth.currentUser?.displayName}</h1>
           <button onClick={()=>setShowQuiz(true)}>Imtahana basla</button>
           <button onClick={handleSignOut}>Cixis et</button>
         </div>
      }
    </>
  )
}

export default Home
