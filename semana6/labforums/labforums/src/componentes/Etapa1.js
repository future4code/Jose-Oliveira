import React from 'react';



class Etapa1 extends React.Component{

  render(){
    let escolha =""
  return (
 
    <div>
      <h2>ETAPA 1 - DADOS GERAIS</h2>
     <p>1.qual o seu nome?</p>
     <input></input>
     <p>2.qual a sua idade?</p>
     <input></input>
     <p>3.qual o seu email?</p>
     <input></input>
     <p>4.qual a sua escolaridade?</p>
     <select>
       <option>Ensino médio incompleto</option>
       <option>Ensino médio completo</option>
       <option>Ensino superior incompleto</option>
       <option>Ensino superior completo</option>
     </select>
     <button onClick={Etapa1}>Próxima etapa</button>
    </div>
  );
}}
export default Etapa1;