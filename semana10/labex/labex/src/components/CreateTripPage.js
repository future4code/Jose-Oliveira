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
    background-color:orange;
}
`

function CreateTrip() {

  const [name,setName] = useState("")
  const [planet,setPlanet] = useState("")
  const [date,setDate] = useState("")
  const [description,setDescription] = useState("")
  const [duration,setDuration] = useState(0)

  const handleName = (event) =>{
    setName(event.target.value)
 }
 const handlePlanet = (event) =>{
  setPlanet(event.target.value)
}
const handleDate = (event) =>{
  setDate(event.target.value)
}
const handleDescription = (event) =>{
  setDescription(event.target.value)
}
const handleDuration = (event) =>{
  setDuration(event.target.value)
}

 const criarViagem = ()=>{
   const body = {
       name: name,
       planet: planet,
       date: date,
       description: description,
       durationInDays: Number(duration)
   }
   console.log(body)
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Rafael-Oliveira-Dummont/trips",body,{
        headers: {
        auth: localStorage.getItem("token")
      }}).then(response =>{
        console.log(response)
      }).catch(error =>{
        console.log(error)
      })
     
 }


  const history = useHistory

  return (
  <Pagina>
    <H1>Dados da nova viagem</H1>
    <Label>Nome</Label>
     <Input type={"text"} onChange={handleName} value={name}></Input>
     <Label>Planeta</Label>
     <Input type={"text"} onChange={handlePlanet} value={planet}></Input>
     <Label>Data</Label>
     <Input type={"date"} onChange={handleDate} value={date}></Input>
     <Label>Descrição</Label>
     <Input type={"text"} onChange={handleDescription} value={description}></Input>
     <Label>Duração</Label>
     <Input type={"number"} onChange={handleDuration} value={duration}></Input>
     <Button onClick={criarViagem}>Criar viagem</Button>
  </Pagina>
  )
}

export default CreateTrip;