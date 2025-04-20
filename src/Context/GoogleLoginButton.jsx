import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = ({navigat}) => {

  const {signinwhitegoogle,setLoding} = useContext(AuthContext);

  const navi = useNavigate();

  const googleLogin = () =>{
    setLoding(true)
    signinwhitegoogle().then(res=>{
      console.log(res)
      setLoding(false)
      navi(navigat)

      
    })
    .catch(er=>{
      console.log(er)
      setLoding(false)
    })
  }

  return (
    <button
      onClick={googleLogin}
      className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:shadow-md transition duration-200"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
        alt="Google logo"
        className="w-5 h-5"
      />
      <span className="text-sm font-medium text-gray-700">
        Sign in with Google
      </span>
    </button>
  );
};

export default GoogleLoginButton;
