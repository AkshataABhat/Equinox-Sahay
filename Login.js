import React from 'react'
import './Login.css'
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
    const [state, dispatch] = useStateValue();
   const signIn=()=>{
       auth.signInWithPopup(provider).then((result)=>{
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          });


           console.log(result.user)
       })
       .catch((error) => alert(error.message));

    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://static.vecteezy.com/system/resources/previews/000/702/575/non_2x/hand-holding-heart-vector.jpg"/>

            </div>
            <div id="container">
             <h1><strong>Sahay</strong></h1>
            </div>
            <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
        </div>
    );
}

export default Login
