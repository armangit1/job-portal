
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import AuthContext from './../Context/AuthContext';
import auth from '../firebase';
import { useEffect, useState } from 'react';

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