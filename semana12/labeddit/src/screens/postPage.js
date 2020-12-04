import React, { useState, useEffect, useContext } from "react"
import ProtectedPage from "../components/protectedPage"
import {useHistory} from "react-router-dom"
import GlobalStateContext from "../global/globalStateContext"
import styled from "styled-components"
import axios from "axios"

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

const PostPage = () => {
    const { states, setters } = useContext(GlobalStateContext);
    ProtectedPage()
    const history = useHistory()
    const [post,setPost] = useState([])
    const [comment,setComment] = useState("")

    const logOut =()=>{
        localStorage.setItem("token","")
        history.push("/")
    }

    useEffect(()=>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${states.id}`,{
            headers:    {
            Authorization:`${localStorage.getItem("token")}`
        }}).then(response =>{
            setPost(response)
        
        })
    },[])

    const VoteUp = (id) =>{
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${states.id}/comment/${id}/vote`,{
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

    const VoteDown = (id) =>{
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${states.id}/comment/${id}/vote`,{
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

    const handleComment = (event) =>{
        setComment(event.target.value)
}

const createComment = () =>{
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${states.id}/comment`,{
        text: comment,
    },{headers:{
        Authorization:`${localStorage.getItem("token")}`
    }}
    )
}
console.log(post)
  
    return(
        <div>
        <button onClick={logOut}>Log out</button>
        <PostCard>
               <p>Digite seu comentario</p>
            <input value={comment} onChange={handleComment} /><br/>
               <button onClick={createComment}>Criar post</button>
           </PostCard>
        {post.data && post.data.post.comments.map(posts =>{
            return(
                <div key={posts.id}>  
                <FeedCard> 
                <CardTitle>{posts.username}</CardTitle>
               <CardText>{posts.text}</CardText>
               <CardFooter>
                <UpVoteButton onClick={()=> VoteUp(posts.id)}></UpVoteButton>
                <Counter>{posts.votesCount}</Counter>
                <DownVoteButton onClick={()=> VoteDown(posts.id)}></DownVoteButton>
               </CardFooter>
                  </FeedCard>
                  </div>
            )
        })}
        </div>
  )
  }
export default PostPage