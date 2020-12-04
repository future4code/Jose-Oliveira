import React from "react"
import {Route,BrowserRouter,Switch} from "react-router-dom"
import LoginPage from "../screens/loginPage"
import SigInPage from "../screens/signinPage"
import ErrorPage from "../screens/errorPage"
import FeedPage from "../screens/feed"
import PostPage from "../screens/postPage"

const Router =()=>{

    return(
        <BrowserRouter>
        <Switch>
           <Route exact path="/">
            <LoginPage/>
           </Route>
           <Route exact path="/signin">
               <SigInPage/> 
           </Route>
           <Route exact path="/feed">
               <FeedPage/>
           </Route>
           <Route exact path="/postpage">
            <PostPage/>
           </Route>
           <Route>
           <ErrorPage/>
           </Route>
        </Switch>
        </BrowserRouter>
    )

}
export default Router