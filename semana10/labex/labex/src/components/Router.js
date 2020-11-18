import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React from 'react'
import Home from "./HomePage"
import Login from "./LoginPage"
import Aplication from "./ApplicationFormPage"
import CreateTrip from "./CreateTripPage"
import TripList from "./ListTripsPage"
import TripDetails from "./TripDetailsPage"
import Areaadm from "./Areaadm"

function Router(){
return(
<BrowserRouter>
<Switch>
    <Route exact path="/">
        <Home/>
    </Route>
    <Route exact path="/login">
        <Login/>
    </Route>
    <Route exact path="/aplication">
        <Aplication/>
    </Route>
    <Route exact path="/createtrip">
        <CreateTrip/>
    </Route>
    <Route exact path="/listtrip">
        <TripList/>
    </Route>
    <Route exact path="/tripdetails">
        <TripDetails/>
    </Route>
    <Route exact path="/areaadm">
           <Areaadm/>
    </Route>
</Switch>
</BrowserRouter>
)
}
export default Router