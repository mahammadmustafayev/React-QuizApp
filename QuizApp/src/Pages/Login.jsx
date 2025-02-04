import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { auth,db } from "../FireBase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";


function Login({email}) {
  const navigate=useNavigate();
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  
  const handleLogin=async(e)=>{
    e.preventDefault();
    try {
      const usersRef=collection(db,"users");
      const q= query(usersRef,where("username", "==", userName))
      const querySnapShot=await getDocs(q);
      
      if (querySnapShot.empty) {
        throw new Error("İstifadəçi tapılmadı");
      }
      const userData=querySnapShot.docs[0].data();
      const email=userData.email;

      const userCredential=await signInWithEmailAndPassword(auth,email,password)
      alert("Ugurla login oldu"); 
      navigate('/home')
    } catch (error) {
      alert("Xeta bas verdi "+error.message)
    }

    // try {
    //   const users=auth.currentUser;
    //   if (!users || users.displayName !==userName) {
    //      throw new Error("Istifadeci adi veya parol yanlisdir")
    //   }
    //   await signInWithEmailAndPassword(auth,users.email,password);
    //   navigate('/home')
    // } catch (error) {
    //   alert("Xeta bas verdi "+error.message)
    // }
  }
  return (
    <div className='center'>
       <div className="container">
            <h1>Login</h1>
            <form className="inputs" onSubmit={handleLogin}>
                <input className="input-control" value={userName} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="İstifadəçi adı"   />
                {/* <input className="input-control" type="email" placeholder="Email"  required /> */}
                <input className="input-control" value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Şifrə"   />
                <div className="btns">
                    <button className="btn-auth" type="submit">Log In</button>
                    <button className="btn-auth" onClick={()=>navigate('/')} type="submit">Sign Up ←—</button>
                </div>
            </form>
       </div>
    </div>
  )
}

export default Login
