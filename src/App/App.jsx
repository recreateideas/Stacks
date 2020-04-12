import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Switch, Redirect, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { history, actions } from '../redux';
import { routes } from '../routes';
import { AuthenticatedRoute, ErrorBoundary, SideBar } from '../features';
import { Application, PageContainer, Page } from './styles';
import Header from './Header';


const App = () => {
    const dispatch = useDispatch();
    const {
        containers: { getContainers },
        projects: { getProjects },
    } = actions;
    useEffect(() => {
        dispatch(getContainers());
    }, []);
    // const { containers: containersSelectors } = selectors;
    // const containers = useSelector(containersSelectors.containers);
    useEffect(() => {
        dispatch(getProjects());
    }, []);
    return (
        <Application>
            <Router history={history}>
                <AuthenticatedRoute
                    redirectUrl={undefined}
                    skipGetUser
                    render={props => (
                        <SideBar {...props} />
                    )}
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
                                            <PageContainer>
                                                <Header title={title} />
                                                <Page className="page-content">
                                                    <Component {...props} />
                                                </Page>
                                            </PageContainer>
                                        </ErrorBoundary>
                                    )}
                                />
                            );
                        })}
                    <Route path="/">
                        <Redirect exact to="/dashboard" />
                    </Route>
                </Switch>
            </Router>
        </Application>
    );
};

export default hot(App);
