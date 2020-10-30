import React from "react"
import axios from "axios"
import styled from "styled-components"

const Deletar = styled.span`
color:red;
cursor: pointer;
`


class App extends React.Component {

state ={
  valorInputPlayList:"",
  listaDePlaylists: [],
  listaDeMusicas:[]
}

componentDidUpdate =() =>{
  this.atualizarPlayList()
}

componentDidMount =() =>{
  this.atualizarPlayList()
  
}

pegarmusicas =()=>{
 console.log(this.listaRenderizada)
}

atualizarPlayList =() =>{

  axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",{
    headers:{
      authorization: "Rafael-Oliveira-Dumont"}
  }).then((resposta)=>{
    this.setState({listaDePlaylists: resposta.data.result.list})
  })

}



criarPlayList = ()=>{
  
   const body = {
      name: this.state.valorInputPlayList
    
    }
axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',body,{
  headers:{
    authorization: "Rafael-Oliveira-Dumont"}
})
console.log(this.state.listaDePlaylists)
this.atualizarPlayList()
}

onChangePlayListInput = (event)=>{
this.setState({valorInputPlayList:event.target.value})
}

deletarPlayList = (userId)=>{
axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${userId}`,{
  headers:{
    authorization: "Rafael-Oliveira-Dumont"}

})
}
  render(){
    
     const listaRenderizada = this.state.listaDePlaylists.map((playlist) =>{
     return <p key={playlist.id}>{playlist.name} <Deletar onClick={()=>this.deletarPlayList(playlist.id)}>X</Deletar></p>
     })

  return (
    <div className="App">
    <p>Escolha um nome para sua playlist</p>
    <input 
    placeholder="Nome da playlist"
    value={this.state.valorInputPlayList}
    onChange={this.onChangePlayListInput}
 
    >
    </input>
    <button onClick={this.criarPlayList} >Criar playlist</button>
    <hr/>
    <p>suas playlists</p>
    {listaRenderizada}
    </div>
  )
}
}
export default App;
