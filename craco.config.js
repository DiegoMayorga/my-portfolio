module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            const sassLoader = webpackConfig.module.rules.find(
                (rule) => rule.test && rule.test.toString().includes('scss')
            );

            if (sassLoader) {
                sassLoader.use = sassLoader.use.map((loader) => {
                    if (loader.loader && loader.loader.includes('sass-loader')) {
                        return {
                            ...loader,
                            options: {
                                ...loader.options,
                                silent: true, // Suppress deprecation warnings
                            },
                        };
                    }
                    return loader;
                });
            }

            return webpackConfig;
        },
    },
};
