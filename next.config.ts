import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};
module.exports = {
  // ...existing code...
  webpack(config: {
    module: {
      rules: {
        test: RegExp; use: (string | {
          loader: string; options: {
            // ... other css-loader options ...
            importLoaders: number;
          };
        })[];
      }[];
    };
  }) {
    config.module.rules.push({
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

export default nextConfig;
