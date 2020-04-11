import { hot } from 'react-hot-loader/root';
import React from 'react';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import { history } from '../redux';
import { routes } from '../routes';
import { AuthenticatedRoute, ErrorBoundary, MainMenu } from '../features';

const App = () => (
    <Router history={history}>
        <AuthenticatedRoute
            redirectUrl={undefined}
            skipGetUser
            render={props => (
                <MainMenu {...props} />)}
        />
        <Switch>
            {Object.values(routes)
                .map((routeObj, i) => {
                    const {
                        title,
                        exact,
                        path,
                        components: {
                            mainView: Component,
                        },
                    } = routeObj;
                    return (
                        <AuthenticatedRoute
                            key={i}
                            redirectUrl={undefined}
                            exact={exact}
                            path={path}
                            title={title}
                            render={props => (
                                <ErrorBoundary>
                                    <Component {...props} />
                                </ErrorBoundary>
                            )}
                        />
                    );
                })}
        </Switch>
    </Router>
);

export default hot(App);
