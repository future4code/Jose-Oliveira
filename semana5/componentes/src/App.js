import React, { Component } from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fssa9-1.fna.fbcdn.net/v/t1.0-9/224757_194887780641928_1781585328_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeFaZD_VGcQDw7Qh67NGJVG_DMW9HjQOVy8Mxb0eNA5XLycx972_A9SGMPeZvmXcYNEzVL0KyfGU208L6VmizrSF&_nc_ohc=gHVaHWYFT7wAX_HSv37&_nc_oc=AQnGy4k8PcUSuoK3RP-sLynBAVScObBD9outqpwgWu7u19MxmpeZlfP7J_VvgiU670k&_nc_ht=scontent.fssa9-1.fna&oh=1b21bf02ff0fceab22e93ae49c6e437c&oe=5FABD38C" 
          nome="Rafael Oliveira" 
          descricao="Meu nome é Rafael, sou estudante da Labenu e futuro desenvolvedor web full stack"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      
      <div className = "dadosPessoais">
        <CardPequeno
        descricao= "email: rafaelllmoliveira@gmail.com"/>
      <CardPequeno
        descricao = "Endereço: Estrada do coco, Bahia"/>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Unijorge" 
          descricao="Formado em engenharia civil pela Unijorge" 
        />
        
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Telas Salvador" 
          descricao="Dois anos de estagio pela Telas Salvador" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
