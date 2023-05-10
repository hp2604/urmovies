import React from "react";
import Nav from "./Nav";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Hollywood from "./Hollywood";
import Bollywood from "./Bollywood";
import Alert from "./Alert";


 

function App(){
    return(
        <>
        <Alert/>
        <Nav/>
       
        <Routes>
            <Route exact path='/urmovies' Component={Home}/> 
            <Route exact path="/urmovies/hollywood" Component={Hollywood}/>
            <Route exact path="/urmovies/bollywood" Component={Bollywood}/>
        </Routes>
    
        </>
    )
}
export default App;

 