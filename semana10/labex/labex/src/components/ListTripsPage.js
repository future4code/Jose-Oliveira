import React, { useEffect, useState } from 'react'
import {useHistory} from "react-router-dom"
import axios from "axios"
import styled from "styled-components"

const Button = styled.button`
border:none;
color:red;
background-color:gray;
cursor:pointer;
`
const Pagina = styled.div`
background-color:gray;
height:100vh;
width:100vw;
display:flex;
flex-direction:column;
`
const Card = styled.div`
display:flex;
justify-content:center;
margin-top:50px;
`

const H1 = styled.h1`
align-self:center;
margin-top:100px;
`

function TripList() {

    const [listaDeViagens,setListaDeViagens] = useState([])
    const [detalhesViagem,setDetalhesViagem] = useState()


    const history = useHistory()
   const toTripDetails = (id) =>{
       setDetalhesViagem(id)

       history.push("/tripdetails")
   }

   useEffect(()=>{
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Rafael-Oliveira-Dummont/trips").then(response =>{
        setListaDeViagens(response.data.trips)
   }
   )},[])


    const deleteTrip = (id) =>{
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Rafael-Oliveira-Dummont/trips/${id}`)
   }
  return (
  <Pagina>
      <H1>Lista de viagens planejadas</H1>
     {listaDeViagens.map(viagem =>{
         return(
         <Card key={viagem.id}>
         <p onClick={()=>toTripDetails(viagem.id)}>{viagem.name}</p>
         <Button onClick ={()=>deleteTrip(viagem.id)}>X</Button>
            </Card>
         )
     })}
  </Pagina>
  )
}

export default TripList;
