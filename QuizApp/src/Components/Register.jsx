import { useState } from "react"
import {auth} from '../firebase'
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth"
import { useNavigate } from "react-router-dom"


function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          await updateProfile(userCredential.user, { displayName: username });
          alert("Qeydiyyat uğurla tamamlandı!");
          navigate("/login");
        } catch (error) {
          console.error(error);
          alert("Xəta baş verdi: " + error.message);
        }
      };

  return (
    <div>
      <h2>Qeydiyyat</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="İstifadəçi adı" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Şifrə" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Qeydiyyatdan keç</button>
      </form>
    </div>
  )
}

export default Register
