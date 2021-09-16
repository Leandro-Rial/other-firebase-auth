import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const AuthRouter = () => {
    return (
        <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />

            <Redirect to="/signin" />
        </Switch>
    )
}

export default AuthRouter
