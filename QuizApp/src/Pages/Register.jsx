import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { auth,googleProvider,db } from "../FireBase/firebase";
import { createUserWithEmailAndPassword,updateProfile ,signInWithPopup} from "firebase/auth";
import { doc ,setDoc} from "firebase/firestore";


function Register() {
    const navigate=useNavigate();
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister=async(e)=>{
       e.preventDefault();
       try {
         const userCredential=await createUserWithEmailAndPassword(auth,email,password);
         const user=userCredential.user
         await updateProfile(user,{displayName:userName});
         await setDoc(doc(db,"users",user.uid),{
            username:userName,
            email:email
         });
         alert("Uqurla qeydiyyat oldu")
         navigate('/login')
       } catch (error) {
          alert("Xeta bas verdi " +error.message)
       }

      //  try {
      //   const userCredential=await createUserWithEmailAndPassword(auth,email,password);
      //   await updateProfile(userCredential.user,{displayName:userName});
      //   alert("Uqurla qeydiyyat oldu")
      //   navigate('/login')
      // } catch (error) {
      //    alert("Xeta bas verdi " +error.message)
      // }
    }

    const handleGoogleLogin=async()=>{
        try {
          const googleUserCredential=signInWithPopup(auth,googleProvider);
          const user=(await googleUserCredential).user;
          if (user) {
            alert("Uqurla Google giris etdi")
            navigate('/home')
          }
        } catch (error) {
          alert("Xeta bas verdi " +error.message)
        }
    }

  return (
    <div className='center'>
       <div className="container">
            <h1>Register</h1>
            <form className="inputs" >
                <input className="input-control" value={userName} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="İstifadəçi adı"  required />
                <input className="input-control" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"  required />
                <input className="input-control" value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Şifrə"  required />
                <div className="btns">
                    <button className="btn-auth" onClick={handleRegister} type="submit">Sign Up</button>
                    <button className="btn-auth" onClick={()=>navigate('/login')} email={email} type="submit">Log In —→</button>
                    <button className="btn-auth" onClick={handleGoogleLogin} type="submit">Google   </button>
                </div>
            </form>
       </div>
    </div>
  )
}

export default Register
