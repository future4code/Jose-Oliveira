import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/520/520'}
          fotoPost={'https://picsum.photos/230/150'}
        />
        <Post
          nomeUsuario={'Rafael'}
          fotoUsuario={'https://picsum.photos/50/20'}
          fotoPost={'https://picsum.photos/220/150'}
        />
        <Post
          nomeUsuario={'zak'}
          fotoUsuario={'https://picsum.photos/50/30'}
          fotoPost={'https://picsum.photos/250/150'}
        />
      </div>
    );
  }
}

export default App;
