import { useState,useEffect } from "react"
import Quiz from '../Components/Quiz'
import { auth } from "../FireBase/firebase"
import { onAuthStateChanged,signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"



function Home() {
    const [isStarted, setIsStarted] = useState(false)
    const [user, setUser] = useState('')
    const navigate=useNavigate();
    const handleStart=()=>{
        setIsStarted(true)
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } 
        else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        }  
        else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
        } 
        else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
      
        document.addEventListener('contextmenu',(e)=>e.preventDefault())
      
        document.addEventListener('keydown',
          (e)=>{
            if (e.key=='F11') {
              e.preventDefault();
            }
            if (e.key=='Escape') {
              e.preventDefault();
            }
          })
      }
    const getUserInfo=()=>[
       onAuthStateChanged(auth,(userCredential)=>{
        if (userCredential) {
          setUser(userCredential.displayName)
        }
       })
    ]
    useEffect(() => {
      getUserInfo();
    }, [])
    
    const handleSignOut=async()=>{
       try {
         await signOut(auth);
         alert("Ugurla cixis edildi")
         navigate('/login');
       } catch (error) {
        alert("Xeta bas verdi "+error.message)
       }
    }

  return (
    <>
        {
        isStarted ? 
        <Quiz/>
        : 
        <div className="center">
          <div className="container">
             <h1>Xos Geldiniz {user}</h1>
             <div style={{width:'7em',height:'2.5em',position:'relative'}}>
                <button onClick={handleSignOut}  style={{
                    width:'100%',
                    height:'100%',
                    backgroundColor:'white',
                    color:'#005151',
                    border:'none',
                    borderRadius:'50px',
                    cursor:'pointer',
                    position:'absolute',
                    left:'47em',
                    bottom:'21em'
                    }}>
                    <span style={{fontSize:'1.5em'}}>Sign Out</span>
                </button>
             </div>
             <button className="btn-refresh" onClick={handleStart}>
                <span>Imtahana basla</span>
             </button>
             
          </div>
        </div>
      }
    </>
  )
}

export default Home
