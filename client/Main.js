import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import DataUser from "./DataUser";
import AddUser from "./AddUser";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                        <a className="navbar-brand">User</a>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/app/user/list">Data User</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/app/user/create">Add User</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main role="main" className="container">
                        <Route path="/app/user/list" component={DataUser}/>
                        <Route path="/app/user/create" component={AddUser}/>
                    </main>
                </div>
            </HashRouter>
        );
    }
}

export default Main;