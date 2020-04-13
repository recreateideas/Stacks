import {
    Widgets, SettingsEthernet, Apps, Storage, Settings, Fingerprint, BlurOn, Layers, ControlCamera,
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
    projectEditYaml: {
        title: 'Project - Edit Yaml',
        path: '/projects/edit-yaml',
        exact: true,
        components: {
            mainView: Pages.ProjectEditYaml,
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
    networks: {
        title: 'Networks',
        icon: Layers,
        path: '/networks',
        exact: true,
        components: {
            mainView: Pages.Networks,
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
        icon: ControlCamera,
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
