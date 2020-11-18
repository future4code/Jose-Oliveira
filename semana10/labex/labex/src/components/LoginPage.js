import React, { useEffect, useState } from 'react'
import {useHistory} from "react-router-dom"
import axios from "axios"
import styled from "styled-components"

const Pagina = styled.div`
background-color:gray;
height:100vh;
width:100vw;
display:flex;
flex-direction:column;
`
const Input =styled.input`
width:200px;
height:25px;
align-self:center;
`

const ButtonCreateTrip = styled.button`
width:100px;
align-self:flex-end;
margin-top:10px;
margin-right:10px;
cursor:pointer;
:hover{
   background-color:orange;
}
`

const ButtonLogin = styled.button`
width:100px;
align-self:center;
cursor:pointer;
margin-top:15px;
:hover{
   background-color:orange;
}
`

const Label = styled.label`
align-self:center;
margin-top:20px;
font-size:20px;
`

function Login() {

   const [email,setEmail] = useState("")
   const [senha,setSenha] = useState("")

    const history = useHistory()
    const toCreateTrip =() =>{
       history.push("/createtrip")
    }
   
    const handleEmail = (event) =>{
       setEmail(event.target.value)
    }

    const handleSenha = (event) =>{
      setSenha(event.target.value)
   }

     const login = () =>{
        const body ={
           email: email,
           password: senha
        }
        
      axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/Rafael-Oliveira-Dummont/login',body)
      .then((response)=>{
       localStorage.setItem("token",response.data.token)
       history.push("/areaadm")
      })

     }

  return (
  <Pagina>
     <ButtonCreateTrip onClick={toCreateTrip}>CreateTrip</ButtonCreateTrip>
     <Label>email:</Label>
     <Input onChange={handleEmail} value={email}></Input>
     <Label>senha:</Label>
     <Input onChange={handleSenha} value={senha}></Input>
     <ButtonLogin onClick={login}>login</ButtonLogin>
  </Pagina>
  )
}

export default Login;
