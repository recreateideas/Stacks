import { hot } from 'react-hot-loader/root';
import React from 'react';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import { history } from '../redux';
import { routes } from '../routes';
import { AuthenticatedRoute, ErrorBoundary, MainMenu } from '../features';
import { Application } from './styles';

const App = () => (
    <Application>
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
                                        <div className="page-content">
                                            <Component {...props} />
                                        </div>
                                    </ErrorBoundary>
                                )}
                            />
                        );
                    })}
            </Switch>
        </Router>
    </Application>
);

export default hot(App);
