import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state ={
      posts:[{
          nomeUsuario:'paulinha',
          fotoUsuario:'https://picsum.photos/560/520',
          fotoPost: 'https://picsum.photos/230/150'
      },
      {
        nomeUsuario:'Rafael',
        fotoUsuario:'https://picsum.photos/530/520',
        fotoPost: 'https://picsum.photos/250/150'
    },
    {
      nomeUsuario:'Raniel',
      fotoUsuario:'https://picsum.photos/510/520',
      fotoPost: 'https://picsum.photos/210/150'
  }],
     novoUsuario:"",
     novaFotoUsuario:"",
     novaFotoPost:""
      
  }
  adicionaPost = () => {
    const novoPost = {
      nome: this.state.novoUsuario,
      fotoUsuario: this.state.novaFotoUsuario,
      fotoPost: this.state.novaFotoPost
  
    };

    const novoPosts = [...this.state.posts, novoPost];
    this.setState({ posts: novoPosts});
  }
  onChangeInputUsuario = (event) => {

    this.setState({ novoUsuario: event.target.value });
    
  };

  onChangeInputnovaFotoUsuario = (event) => {

    this.setState({ novaFotoUsuario: event.target.value });
  };
  onChangeInputnovaFotoPost = (event) => {
    this.setState({ novaFotoPost: event.target.value });
  };
  render() {
    const detalhesPost = this.state.posts.map((post) =>{
      return(
        <div className={'app-container'}>
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      </div>      
      )
    })
    return(
      <div>
  
      <div>
          <input
            value={this.state.novoUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome"}
          />
          <input
            value={this.state.novaFotoUsuario}
            onChange={this.onChangeInputnovaFotoUsuario}
            placeholder={"foto do usuario"}
          />
          <input
            value={this.state.novaFotoPost}
            onChange={this.onChangeInputnovaFotoPost}
            placeholder={"foto do post"}
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
        </div>  
        {detalhesPost}    
      </div>
      
    )
  }
}
export default App;
