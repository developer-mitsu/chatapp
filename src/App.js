import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Room from './pages/Room'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/signup">
                    <SignUp></SignUp>
                </Route>
                <Route path="/room">
                    <Room></Room>
                </Route>
                <Route path="/">
                    <Login></Login>
                </Route>
            </Switch>
        </Router>
    )
}

export default App