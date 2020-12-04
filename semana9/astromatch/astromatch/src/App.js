import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';
import styled from 'styled-components'

const CardMatchPhoto = styled.img`
height:50px;
width:50px;
border-radius:50px;
border:solid;
`
const BotaoLike = styled.button`
border-radius:10px;
cursor: pointer;
margin-right:5px;
`

const ImagemBotao = styled.img`
height:20px;
`

const CardPessoaAtual = styled.div`
height: 200px;
margin-left:45%;
`
const ImagemCardAtual = styled.img`
height:100px;
`
const MatchesContainer = styled.div`
border:solid;
width:50vw;
margin:auto;
margin-top:50px;
background-color:lightgray;
`
const BotaoMudarPagina = styled.button`
cursor: pointer;
`
const CardFrontPage = styled.div`
margin:auto;
border:solid;
width:50vw;
height:50vh;
margin-top:100px;
background-color:lightblue;
`

function App() {

   const[pessoaAtual,setPessoaAtual] = useState({})
   const[matches,setMatches] = useState([])
   const[pagina,setPagina] = useState(true)


  useEffect(()=>{
   opcaoAtual()
  },[])

  const opcaoAtual =()=>{
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael/person').then(response=>{
      setPessoaAtual(response.data.profile) 
    })
  }

  const matchResponse =(choice) =>{
     axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael/choose-person',
     {
       "id": `${pessoaAtual.id}`,
       "choice": choice
     }
     )
     opcaoAtual()
    }

    useEffect(()=>{
      axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael/matches').then(response=>{
        setMatches(response.data.matches)
      })
    },[pessoaAtual])

    const limparPerfils = ()=>{
      axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafael/clear')
    }

    const mudarPagina = () =>{
       setPagina(!pagina)
    }

    if(pagina){
  return (
    <CardFrontPage>
      <CardPessoaAtual>
        {pessoaAtual.name}
        <br/>
        <ImagemCardAtual src={pessoaAtual.photo}/>
        <br/>
      <BotaoLike onClick={()=>matchResponse(true)}><ImagemBotao src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7F0Dk9lVJMAH8jWXH9j28-ANcdVrm5OlnwQ&usqp=CAU" /></BotaoLike>
      <BotaoLike onClick={()=>matchResponse(false)}><ImagemBotao src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6x0y3JCG8B9nsyNZGMOUrwfSgKoMmePQcPA&usqp=CAU" /></BotaoLike>
      </CardPessoaAtual>
      <button onClick={limparPerfils}>limpar</button>
      <BotaoMudarPagina onClick={mudarPagina}>mudar de pagina</BotaoMudarPagina>
      
    </CardFrontPage>
  );
}else{
  return(
  <MatchesContainer>
    <BotaoMudarPagina onClick={mudarPagina}>voltar</BotaoMudarPagina>
     
     {matches.map((match)=>{
      return (
        <div>
       <CardMatchPhoto src={match.photo}/>
      <span key={match.id}>{match.name}</span>
      </div>
      )
      }
      )
      }
    
  </MatchesContainer>
  )
}
}
export default App;
