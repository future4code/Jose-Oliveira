import React from 'react';

class Etapa2 extends React.Component{
render(){
  return (
    <div>
     <div>
      <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
     <p>1.5. Qual curso?</p>
     <input></input>
     <p>2.6. Qual a unidade de ensino?</p>
     <input></input>
     <button onClick={Etapa2}>Próxima etapa</button>
    </div>
    </div>
  );
}
}
export default Etapa2;