import React from "react"
import axios from "axios"
import styled from "styled-components"
   

const Descricao = styled.div`
display:flex;
flex-direction:column;
text-align:center;
`

const Divbotoes = styled.div`
display:flex;
justify-content:center;
`

const Botao1 = styled.button`
background-color:black;
color:red;
margin-left:20px;
cursor: pointer;
`

const Botao2 = styled.button`
background-color:black;
color:green;
margin-right:20px;
cursor: pointer;
`




class App extends React.Component{

   state ={
       atividade:[],
       minhasAtividades:[]
   }

  

   componentDidMount(){
     this.getRandomEvent()
   }

    
   getRandomEvent = ()=>{

    axios.get('http://www.boredapi.com/api/activity/').then((response) =>{
         this.setState({atividade:response.data})
  
    }
    )
   }
   adicionaALista = ()=>{
   this.setState({
     minhasAtividades:[...this.state.minhasAtividades,this.state.atividade]
  })
    console.log(this.state.minhasAtividades)
  }


  render(){
    
   const lista = this.state.minhasAtividades.map((itens) =>{
       return <p key={itens.activity}>{itens.activity}</p>
   })

   return (
    <div>
        <Descricao>
           <p>atividade: {this.state.atividade.activity}</p>
           <p>Participantes: {this.state.atividade.participants}</p>
           <p>Tipo: {this.state.atividade.type}</p>
           <p>Preço: R${this.state.atividade.price}</p>
        </Descricao>
        <Divbotoes>
        <Botao2 onClick={this.adicionaALista}>Tenho interesse</Botao2>
        <Botao1 onClick={this.getRandomEvent}>quero outra</Botao1>
        </Divbotoes>
        <hr/>
       {lista}
    </div>
   )
 }
}


export default App;
