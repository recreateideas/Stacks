import { Widgets } from '@material-ui/icons';
import * as Pages from '../Pages';

const routes = {
    projects: {
        label: 'Projects',
        icon: Widgets,
        route: '/projects',
        exact: true,
        components: {
            mainView: Pages.Projects,
        },
    },
    projects1: {
        label: 'Projects',
        icon: Widgets,
        route: '/projects',
        exact: true,
        components: {
            mainView: Pages.Projects,
        },
    },
    projects2: {
        label: 'Projects',
        icon: Widgets,
        route: '/projects',
        exact: true,
        components: {
            mainView: Pages.Projects,
        },
    },
    default: {
        title: 'Where am I ??',
        path: '',
        exact: true,
        components: {
            mainView: Pages.FourOFour,
        },
    },
};

export default routes;
