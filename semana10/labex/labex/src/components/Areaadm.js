import React from 'react'
import {useHistory} from "react-router-dom"
import styled from "styled-components"

const Pagina = styled.div`
background-color:gray;
height:100vh;
width:100vw;
display:flex;
justify-content:center;
`

const ButtonCreateTrip = styled.button`
width:100px;
height:50px;
margin-top:10px;
margin-right:10px;
cursor:pointer;
:hover{
   background-color:orange;
}
`

function Areaadm() {

    const history = useHistory()

    const toCreateTrip = () =>{
        history.push("/createtrip")
    }
   
    const toListTrip = () =>{
        history.push("/listtrip")
    }

  return (
  <Pagina>
     <ButtonCreateTrip onClick={toCreateTrip}>Criar viagem</ButtonCreateTrip>
     <ButtonCreateTrip onClick={toListTrip}>Ver lista de viagens</ButtonCreateTrip>
  </Pagina>
  )
}

export default Areaadm;