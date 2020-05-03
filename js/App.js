import React from 'react'
import ReactDOM from "react-dom";
import './../scss/main.scss';
import Header from "./Header"
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import Home from "./Home";
import Przebieg from "./Przebieg";
import Zasady from "./Zasady";
import Omnie from "./Omnie";
import Kontakt from "./Kontakt";

const App = () =>{

    return(
        <>
           <HashRouter>
               <Header/>
                <Switch>

                    <Route exact path="/" component={Home} />
                    <Route path="/przebieg" component={Przebieg}/>
                    <Route path="/zasady" component={Zasady}/>
                    <Route path="/oMnie" component={Omnie}/>
                    <Route path="/kontakt" component={Kontakt}/>

                </Switch>
        </HashRouter>
        </>
    )
}



ReactDOM.render(<App/>, document.getElementById("app"));