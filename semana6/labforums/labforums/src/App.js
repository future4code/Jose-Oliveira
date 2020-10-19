import React from 'react';
import './App.css';
import Etapa1 from "./componentes/Etapa1"
import Etapa2 from "./componentes/Etapa2"
import Etapa3 from "./componentes/Etapa3"
import Final from "./componentes/Final"


class App extends React.Component { 
  state = {
    Etapa:"Etapa1"
  }

  onClickEtapa1 = ()=>{
    this.setState({Etapa:"Etapa2"})
    }
    onClickEtapa2 = ()=>{
      this.setState({Etapa:"Etapa3"})
      }
      onClickEtapa3 = ()=>{
        this.setState({Etapa:"Final"})
      }
render(){
  let paginaRenderizada = () => {
    switch(this.state.Etapa) {
       case "Etapa2":
       return <Etapa2></Etapa2>
       case "Etapa3":
       return <Etapa3></Etapa3>
       case "Final":
       return <Final></Final>
       default:
        return <Etapa1></Etapa1>
    }
    }

  return (
    <div className="App">
      {paginaRenderizada()}
    </div>
  )
}}

export default App;
