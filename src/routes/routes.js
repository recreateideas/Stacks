import { Widgets } from '@material-ui/icons';
import * as Pages from '../Pages';

const routes = {
    projects: {
        label: 'Projects',
        icon: Widgets,
        path: '/projects',
        exact: true,
        components: {
            mainView: Pages.Projects,
        },
    },
    projects2: {
        label: 'Projects',
        icon: Widgets,
        path: '/projects-2',
        exact: true,
        components: {
            mainView: Pages.FourOFour,
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
