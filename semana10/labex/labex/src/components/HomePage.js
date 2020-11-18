import React, { Component } from 'react'
import {useHistory} from "react-router-dom"
import styled from "styled-components"

const Pagina = styled.div`
background-color:gray;
height:100vh;
width:100vw;
display:flex;
flex-direction:column;
`
const LoginAdm = styled.button`
height:40px;
width:220px;
align-self:flex-end;
margin-right:10px;
margin-top:10px;
cursor:pointer;
:hover{
    background-color:orange;
}
`
const ListaViagens = styled.button`
height:40px;
width:250px;
cursor:pointer;
align-self:center;
:hover{
    background-color:green;
}
`
const H1 = styled.h1`
align-self:center;
margin-top:200px;
`

function Home() {

    const history = useHistory()

    const toLoginPage = () =>{
        history.push("/login")
    }

    const toAplicationForm = ()=>{
         history.push("/aplication")
    }

  return (
  <Pagina>
      <LoginAdm onClick={toLoginPage}>Login Administrativo</LoginAdm>
      <H1>Projeto Labex</H1>
      <ListaViagens onClick={toAplicationForm}>Escolha seu destino</ListaViagens>
  </Pagina>
  )
}

export default Home;
