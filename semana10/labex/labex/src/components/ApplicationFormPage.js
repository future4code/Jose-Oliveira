import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useHistory} from "react-router-dom"
import styled from "styled-components"

const Pagina = styled.div`
background-color:gray;
height:100vh;
width:100vw;
display:flex;
flex-direction:column;
`

const Input = styled.input`
width:200px;
align-self:center;
`
const Label = styled.label`
align-self:center;
margin-top:10px;
`
const H1 = styled.h1`
align-self:center;
margin-top:100px;
`
const Button = styled.button`
align-self:center;
margin-top:20px;
height:35px;
width:200px;
cursor:pointer;
:hover{
    background-color:green;
}
`

function Aplication() {

  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  const [applicationText,setApplicationText] = useState("")
  const [profession,setProfession] = useState("")
  const [country,setCountry] = useState("")

  const handleName = (event) =>{
    setName(event.target.value)
 }
 const handleAge = (event) =>{
  setAge(event.target.value)
}
const handleApplicationText = (event) =>{
  setApplicationText(event.target.value)
}
const handleProfession = (event) =>{
  setProfession(event.target.value)
}
const handleCountry = (event) =>{
  setCountry(event.target.value)
}

 const viagens = ()=>{
      axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Rafael-Oliveira-Dummont/trips")
      .then(console.log)
 }


  const history = useHistory

  return (
  <Pagina>
    <H1>Formulario de inscrição Labex</H1>
    <Label>Nome</Label>
     <Input onChange={handleName} value={name}></Input>
     <Label>Idade</Label>
     <Input onChange={handleAge} value={age}></Input>
     <Label>Motivo da viagem</Label>
     <Input onChange={handleApplicationText} value={applicationText}></Input>
     <Label>profissão</Label>
     <Input onChange={handleProfession} value={profession}></Input>
     <Label>pais de origem</Label>
     <Input onChange={handleCountry} value={country}></Input>
     <Button onClick={viagens}>Mande-me para outro mundo</Button>
  </Pagina>
  )
}

export default Aplication;
