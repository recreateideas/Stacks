import { hot } from 'react-hot-loader/root';
import React from 'react';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Switch, Redirect, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { history, actions } from '../redux';
import { routes } from '../routes';
import {
    AuthenticatedRoute, Header, ErrorBoundary, SideBar, WindowHeader,
} from '../features';
import { Application, PageContainer, PageContent } from './styles';
import * as views from '../Pages';

const useGetAllData = () => {
    const dispatch = useDispatch();
    const {
        containers: { getContainers },
        projects: { getProjects },
        images: { getImages },
        volumes: { getVolumes },
        networks: { getNetworks },
    } = actions;
    dispatch(getContainers());
    dispatch(getProjects());
    dispatch(getImages());
    dispatch(getVolumes());
    dispatch(getNetworks());
};

const App = () => {
    const { location: { search } } = window;
    const name = search.substr(1);
    const View = views[name];
    useGetAllData();
    return (
        <>
            {View
                ? <View />
                : (
                    <>
                        <WindowHeader />
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
                                                                <PageContent className="page-content">
                                                                    <Component {...props} />
                                                                </PageContent>
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
                    </>
                )
            }
        </>
    );
};

export default hot(App);
