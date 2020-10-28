import React from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";


const BotaoDeletar= styled.span`
color:red;
cursor:pointer;
`

class App extends React.Component {
 
  state = {
    usuarios:[],
    pagina:true,
    name:"",
    email:""
 }


 
 componentDidMount = () =>{
  this.criaListaUsuarios()
}

 onChangeNameValue = (event)=>{
  this.setState({name:event.target.value})
 }
 onChangeEmailValue=(event) =>{
  this.setState({email:event.target.value})
 }

criarUsuario = ()=>{
   const usuario = {
     name: this.state.name,
     email:this.state.email
   }

 axios.post(
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",usuario,{
    headers: {
      Authorization: "Rafael-Oliveira-Dumont"
    }}
 ).then((resposta)=>{
   window.alert("ok")
   this.criaListaUsuarios()
 this.setState({
  name:"",
  email:""
 }
 )
 }
 ).catch((erro)=>{
   this.setState({
  name:"",
  email:""
 }
 )
   window.alert("erro")
 }
 )
  }
 mudarpagina = (event) =>{
  this.setState({
    pagina:false})
 }
 voltarpagina =(event) =>{
   this.setState({
     pagina:true
   })
 }

 criaListaUsuarios = () =>{

  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
    headers: {
      Authorization: "Rafael-Oliveira-Dumont"
    }}).then((resposta) =>{
   this.setState({
     usuarios: resposta.data
   })
    })
 }

 deletarUsuario = (userId) =>{
axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,{
  headers: {
    Authorization: "Rafael-Oliveira-Dumont"
  }}).then((response) =>{
    window.alert("usuario deletado")
    this.criaListaUsuarios()
  }
  ).catch((error) =>{
  console.log(error.message)})
}
 
  render() {


    const listaRenderizada = this.state.usuarios.map((usuario) =>{
    return<p key={usuario.id}>{usuario.name} <BotaoDeletar  onClick={() => this.deletarUsuario(usuario.id)}>X</BotaoDeletar></p>
    })

   if(this.state.pagina){
    return (
      <div className="App">
      <div className="geral">
     <input
        value={this.state.name}
        onChange={this.onChangeNameValue}
        placeholder='nome'/>
     </div>
     <div className="geral">
     <input 
     value={this.state.email}
     onChange={this.onChangeEmailValue}
     placeholder='email'/>
     </div>
     <div className="geral">
     <button onClick={this.criarUsuario}>Enviar</button>
     <button onClick={this.mudarpagina}>ir para lista de usuarios</button>
     </div>
      </div>
    )}else{
      return (
        <div>
        <button onClick={this.voltarpagina}>ir para lista de usuarios</button>
        {listaRenderizada} 
        </div>
      )
    }

  }
}

export default App;