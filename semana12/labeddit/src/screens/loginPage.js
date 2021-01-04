import axios from "axios"
import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import UnProtectedPage from "../components/unProtectedPage"


const LoginPage = () => {
    UnProtectedPage()
    const [login,setLogin] = useState("")
    const [senha,setSenha] = useState("")
    const history = useHistory()


    const goToFeed = () =>{
     axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login",
     {
         email:`${login}`,
         password:`${senha}`
     }
     ).then(response =>{
         localStorage.setItem("token",response.data.token)
         history.push("/feed")
     })
    }
    
    const handleLogin = (event)=> {
          setLogin(event.target.value)
    }

    const handleSenha = (event)=> {
        setSenha(event.target.value)
  }

  const goToSignIn = ()=>{
      history.push("/signin")
  }

    return(
        <div>
            <p>Login</p>
            <input onChange={handleLogin} value={login}/>
            <p>Senha</p>
            <input type="password" onChange={handleSenha} value={senha}/>
            <br/>
            <button onClick={goToFeed}>Entrar</button>
            <button onClick={goToSignIn}>cadastrar</button>
        </div>
    )
}
export default LoginPage