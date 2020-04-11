import * as Pages from '../Pages';

const routes = {
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
