import React from "react";
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";
//import PageNotFound from "../views/PageNotFound/PageNotFound";
import Home from "../views/Home";
import Teste from "../views/testes"

const Routes = () => (
    <BrowserRouter>
        <Switch>
        <Route exact path = "/teste"
        component = {
                Teste
        }
        />
                < Route exact path = "/"
                component = {
                    Home
                }
                />
        </Switch>
    </BrowserRouter>
);

export default Routes;
