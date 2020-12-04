import React, {useState,useEffect, useContext} from "react"
import ProtectedPage from "../components/protectedPage"
import {useHistory} from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import GlobalStateContext from "../global/globalStateContext"

const PostCard = styled.div`
border:solid;
height:20vh;
width:50vw;
text-align:center;
margin:auto;
margin-top:20px;
`
const FeedCard = styled.div`
border:solid;
height:20vh;
width:50vw;
text-align:center;
margin:auto;
margin-top:20px;
`
const CardTitle = styled.p`
border-bottom:solid;
height:20px;
margin-top:1px;
`
const CardText = styled.p`
height:60px;
border-bottom:solid;
`
const CardFooter = styled.div`
display:flex;
height:20px;
border:none;
`
const UpVoteButton = styled.span`
height:20px;
width:20px;
margin-top:6px; 
background-image:url("https://www.flaticon.com/svg/static/icons/svg/626/626075.svg");
background-size:12px 12px;
background-repeat:no-repeat;
cursor: pointer;
margin-left:10px;
`
const DownVoteButton = styled.span`
height:20px;
width:20px;
margin-top:6px;
background-image:url("https://www.flaticon.com/svg/static/icons/svg/626/626013.svg");
background-size:12px 12px;
background-repeat:no-repeat;
cursor: pointer;
margin-right:30vw;
`
const Counter = styled.p`
margin-top:1px;
margin-right:7px;
`
const Span =styled.span`
cursor: pointer;
`

const FeedPage = () => {
    const { states, setters } = useContext(GlobalStateContext);
    ProtectedPage()
    const history = useHistory()
    const [feed,setFeed] = useState([])
    const [text,setText] = useState("")
    const [title,setTitle] = useState("")
  
    useEffect(()=>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",{
            headers:    {
            Authorization:`${localStorage.getItem("token")}`
        }}).then(response =>{
            setFeed(response.data.posts)
        })
    },[])

    const logOut =()=>{
        localStorage.setItem("token","")
        history.push("/")
    }

    const handleText = (event) =>{
            setText(event.target.value)
    }

    const handleTitle = (event) =>{
        setTitle(event.target.value)
}

    const Voteup = (id) =>{
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`,{
            direction: 1
        }
       ,{headers:{
            Authorization:`${localStorage.getItem("token")}`
        }}).then(response =>{
            console.log(response)
        }).catch(error =>{
            console.log(error)
        })
   
    }

    const Votedown = (id) =>{
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`,{
            direction: -1
        }
       ,{headers:{
            Authorization:`${localStorage.getItem("token")}`
        }}).then(response =>{
            console.log(response)
        }).catch(error =>{
            console.log(error)
        })
   
    }
    const CreatePost = () =>{
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",{
            text: text,
            title: title
        },{headers:{
            Authorization:`${localStorage.getItem("token")}`
        }}
        ).then( ()=>window.location.reload())
    }

    const GotoPostPage = (id) =>{
        setters.setId(id)
        history.push("/postpage")
    }
    
    return(
        <div>
           <button onClick={logOut}>Log out</button>
           <PostCard>
               <p>Escreva seu post</p>
               <label>Titulo </label><input value={title} onChange={handleTitle} /><br/>
               <label>Texto </label><input value={text} onChange={handleText} /><br/>
               <button onClick={CreatePost}>Criar post</button>
           </PostCard>
           {feed && feed.map(post =>{
               return(
                   <div key={post.id}>  
                <FeedCard> 
                <CardTitle>{post.username}</CardTitle>
               <CardText>{post.text}</CardText>
               <CardFooter>
                <UpVoteButton onClick={() => Voteup(post.id)}></UpVoteButton>
                <Counter>{post.votesCount}</Counter>
                <DownVoteButton onClick={() => Votedown(post.id)}></DownVoteButton>
                <Counter>{post.commentsCount}</Counter>
                <Span onClick={() =>GotoPostPage(post.id)}>comentarios</Span>
               </CardFooter>
                  </FeedCard>
        
                  </div>
               )
           })}
        </div>
    )
}
export default FeedPage