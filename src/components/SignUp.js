import React, {useState } from "react";
import {auth} from "../firebase"
import {useHistory} from 'react-router-dom'

function SignUp() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const history = useHistory()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            const result = await auth.createUserWithEmailAndPassword(email,password)
        window.M.toast({html: `welcome ${result.user.email}`,classes:"green"})
        history.push('/')
        }catch(err){
            window.M.toast({html:err.message ,classes:"green"})
        }
        
    }
  return (
    <div className="center container" style={{maxWidth:"500px"}}>
      <h3>Please SignUp!!</h3>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="input-field ">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          
        </div>
        <button type= "submit" className="btn blue">SignUp</button>
      </form>
    </div>
  );
}

export default SignUp;
