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
import ScrollToTop from "./ScrollToTop"

const App = () =>{

    return(
        <>
        <div className="container">
           <HashRouter>
           <ScrollToTop/>
               <Header/>
                <Switch>

                    <Route exact path="/" component={Home} />
                    <Route path="/przebieg" component={Przebieg}/>
                    <Route path="/zasady" component={Zasady}/>
                    <Route path="/oMnie" component={Omnie}/>
                    <Route path="/kontakt" component={Kontakt}/>

                </Switch>
        </HashRouter>
        </div>
        </>
    )
}



ReactDOM.render(<App/>, document.getElementById("app"));