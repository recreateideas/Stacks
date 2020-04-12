/* eslint-disable import/no-cycle */
import * as containers from './containers/actions';
import * as images from './images/actions';
import * as volumes from './volumes/actions';
import * as networks from './networks/actions';
import * as projects from './projects/actions';
import * as user from './user/actions';
import * as router from './router/actions';

export {
    containers,
    images,
    volumes,
    networks,
    projects,
    user,
    router,
};
