import React from 'react'
import ReactDOM from "react-dom";
import './../scss/main.scss';
import Header from "./Header"
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Przebieg from "./Przebieg";
import Zasady from "./Zasady";
import About from "./About";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop"

const App = () => {

    return (
        <>
            <div className="container">
                <HashRouter>
                    <ScrollToTop />
                    <Header />
                    <Switch>

                        <Route exact path="/" component={Home} />
                        <Route path="/przebieg" component={Przebieg} />
                        <Route path="/zasady" component={Zasady} />
                        <Route path="/oMnie" component={About} />
                        <Route path="/kontakt" component={Contact} />

                    </Switch>
                </HashRouter>
            </div>
        </>
    )
}



ReactDOM.render(<App />, document.getElementById("app"));