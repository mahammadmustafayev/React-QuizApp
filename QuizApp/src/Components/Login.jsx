import { useState ,useEffect} from "react"
import { auth, googleProvider } from "../firebase"
import { signInWithEmailAndPassword ,signInWithPopup,onAuthStateChanged} from "firebase/auth"
import { useNavigate } from "react-router-dom"



function Login() {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) navigate("/home");
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Bütün istifadəçiləri yoxlaya bilmərik, ona görə email istifadə etməliyik
      const users = auth.currentUser;
      if (!users || users.displayName !== username) {
        throw new Error("İstifadəçi adı və ya şifrə yanlışdır!");
      }

      await signInWithEmailAndPassword(auth, users.email, password);
      alert("Giriş uğurla tamamlandı!");
      navigate("/home");
    } catch (error) {
      console.error(error);
      alert("Xəta baş verdi: " + error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
    } catch (error) {
      console.error(error);
      alert("Google ilə giriş zamanı xəta baş verdi: " + error.message);
    }
  };

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const navigate = useNavigate();

    // const handleLogin=async(e)=>{
    //     e.preventDefault();
    //     try {
    //         const users=auth.currentUser;
    //         if (!users) {
    //             throw new Error("Bele bir istifadeci tapilmadi")
    //         }
    //         if (users.displayName !==username) {
    //             throw new Error("Istifadeci adi yanlisdir")
    //         }
    //         await signInWithEmailAndPassword(auth,users.email,password)
    //         alert("Giriş uğurla tamamlandı!");
    //         navigate("/home");
    //     } catch (error) {
            
    //     }
    // }
  return (
    <div>
      <h2>Giriş</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="İstifadəçi adı" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Şifrə" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Daxil ol</button>
      </form>
      <br />
      <button onClick={handleGoogleLogin}>Google ilə daxil ol</button>
    </div>
  )
}

export default Login
