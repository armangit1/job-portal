
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import AuthContext from './../Context/AuthContext';
import auth from '../firebase';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding,setLoding] = useState(true);

    const googleprovider = new GoogleAuthProvider();

    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signinUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signinwhitegoogle =()=>{
         return signInWithPopup(auth,googleprovider);
    }


    const authinfo = {
        createuser,
        signinUser,
        user,
        loding,
        setLoding,
        signinwhitegoogle
    }

    useEffect(() => {
      const unsubscraibe =  onAuthStateChanged(auth, crrentuser => {
            setUser(crrentuser)
            const user ={ email:crrentuser?.email}
                console.log(crrentuser)
            if(crrentuser?.email){
                axios.post('https://job-portal-nu-seven-88.vercel.app/jwt',user,{
                    withCredentials:true
                }).then(res=>{
                    console.log(res.data)
                })
            }
            else{
                axios.post('https://job-portal-nu-seven-88.vercel.app/logout',{},{
                    withCredentials:true
                }).then(res=>{
                    console.log(res.data)
                })
            }
            setLoding(false);
        },[])
        return () =>{
            unsubscraibe
        }
    })

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;