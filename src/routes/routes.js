import {
    Widgets, SettingsEthernet, Apps, Storage, Settings, Fingerprint, BlurOn, Build,
} from '@material-ui/icons';
import * as Pages from '../Pages';

const routes = {
    dashboard: {
        title: 'Dashboard',
        icon: Widgets,
        path: '/dashboard',
        exact: true,
        components: {
            mainView: Pages.Dashboard,
        },
    },
    projects: {
        title: 'Projects',
        icon: Storage,
        path: '/projects',
        exact: true,
        components: {
            mainView: Pages.Projects,
        },
    },
    containers: {
        title: 'Containers',
        icon: Apps,
        path: '/containers',
        exact: true,
        components: {
            mainView: Pages.Containers,
        },
    },
    images: {
        title: 'Images',
        icon: Fingerprint,
        path: '/images',
        exact: true,
        components: {
            mainView: Pages.Images,
        },
    },
    volumes: {
        title: 'Volumes',
        icon: BlurOn,
        path: '/volumes',
        exact: true,
        components: {
            mainView: Pages.Volumes,
        },
    },
    remote: {
        title: 'Remote',
        icon: SettingsEthernet,
        path: '/remote',
        exact: true,
        components: {
            mainView: Pages.Remote,
        },
    },
    utilities: {
        title: 'Utilities',
        icon: Build,
        path: '/utilities',
        exact: true,
        components: {
            mainView: Pages.Utilities,
        },
    },
    settings: {
        title: 'Settings',
        icon: Settings,
        path: '/settings',
        exact: true,
        components: {
            mainView: Pages.Settings,
        },
    },
    fourOFour: {
        title: 'Where am I ??',
        path: '/404',
        exact: true,
        components: {
            mainView: Pages.FourOFour,
        },
    },
};

export default routes;
