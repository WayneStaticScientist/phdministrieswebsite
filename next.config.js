module.exports = {
    // ...existing code...
    webpack(config) {
        config.module.rules.push({
            test: /\.css$/,
            test: /\.css$/,
            use: [
                process.env.NODE_ENV === 'development' ? 'style-loader' : require.resolve('null-loader'), // Correct check
                {
                    loader: 'css-loader',
                    options: {
                        // ... other css-loader options ...
                        importLoaders: 1, // If you are using PostCSS
                    },
                },
                'postcss-loader', // if you are using PostCSS
            ],
        });

        return config;
    },
    // ...existing code...
};
