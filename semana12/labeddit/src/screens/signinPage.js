import React, {useState} from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import UnProtectedPage from "../components/unProtectedPage"

const SignInPage = () =>{
    UnProtectedPage()
    const history = useHistory()
    const [usuario,setUsuario] = useState("")
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")

    const handleUsuario = (event)=> {
        setUsuario(event.target.value)
  }

  const handleEmail = (event)=> {
    setEmail(event.target.value)
}

  const handleSenha = (event)=> {
      setSenha(event.target.value)
}

   const createAccount =() =>{
       axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup",
       {
	email: `${email}`,
	password: `${senha}`,
	username: `${usuario}`
}).then(response =>{
    history.push("/")
}).catch(error=>{
    window.alert("error")
})
}

    return(
        <div>
        <p>Usuario</p>
        <input onChange={handleUsuario} value={usuario}/>
        <p>email</p>
        <input onChange={handleEmail} value={email}/>
        <p>Senha</p>
        <input type="password" onChange={handleSenha} value={senha}/>
        <br/>
        <button onClick={createAccount}>Criar conta</button>

    </div>
    )
}
export default SignInPage