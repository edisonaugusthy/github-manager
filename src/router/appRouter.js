import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NoDataFound from '../components/NotFoundPage/404Page';
import Home from '../components/home/Home';
import AddNew from '../components/add-new/addNew'
export default class AppRouter extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <Switch>
                        <Route
                            path="/"
                            exact={true}
                            render={(props) => (
                                <Home {...props} />
                            )}
                        />
                        <Route
                            path="/AddNew"
                            exact={true}
                            render={(props) => (
                                <AddNew {...props} />
                            )}
                        />
                        <Route component={NoDataFound} />
                        <Redirect exact from="/" to="Home" />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

