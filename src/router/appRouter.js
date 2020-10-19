import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NoDataFound from '../components/NotFoundPage/404Page';
import Home from '../components/home/Home';

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
                        <Route component={NoDataFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

