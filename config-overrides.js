const { override } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = {
    webpack: override(
        (config, env) => {
            const newConfig = rewireReactHotLoader(config, env);
            newConfig.resolve = {
                extensions: ['.js', '.jsx'],
                symlinks: false,
                alias: {
                    ...newConfig.resolve.alias,
                    'react-dom': '@hot-loader/react-dom',
                },
            };
            return newConfig;
        },
    ),
};
