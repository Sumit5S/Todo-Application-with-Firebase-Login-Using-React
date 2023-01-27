import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Todo from "./components/Todo";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import React,{useEffect, useState} from 'react'
import {auth} from "./firebase"

function App() {
  const [ user, setUser] = useState(null)
  useEffect(()=>{
  const unsubscribe = auth.onAuthStateChanged(user=>{
      if(user) setUser(user)
      else setUser(null)
    })

    return ()=>{
      unsubscribe()
    }
  },[])

  return (
    <BrowserRouter>
      <NavBar user ={user} />
      <Switch>
        <Route exact path="/">
          <Todo user ={user} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
