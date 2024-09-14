import { signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { auth, provider } from "../../firebase/firebase";
import Cookies from 'js-cookie';  // استيراد مكتبة js-cookie
import { useNavigate } from "react-router-dom";




export const UsingGoogle = () => {
  const navigate = useNavigate(); 
  const LoginWithGoogleAccount = async ()=>{
    try {
        const response = await signInWithPopup(auth,provider)
        const user = response.user;
        Cookies.set('user', JSON.stringify({
          name: user.displayName,
          email: user.email,
          profilePic: user.photoURL,
        }), { expires: 30 });

        if(!user){
          console.log('Error logging in:',);
          return;
        } else {
          navigate("/tasks")
        }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <button className="w-80" onClick={LoginWithGoogleAccount}>
        <div className="flex items-center gap-3 justify-center bg-gray-100 mt-5 p-2 rounded hover:bg-gray-200 mb-4 font-semibold">
            <FaGoogle /> Contunue With Google
        </div>
      </button>
  );
};