const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

let isDevMode = false;
const outputPath = path.resolve(__dirname, '../build');

function babelLoaderPlugins() {
  if (isDevMode) {
    return [require.resolve('react-refresh/babel')];
  }
  return [];
}

function generateModule() {
  return {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: babelLoaderPlugins()
            }
          },
          {
            loader: "ts-loader",
            options: {
            },
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  }

}

function generatePlugins() {
  const plugins = [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),

    new EslintWebpackPlugin({
      extensions: ['ts', 'tsx'],
      emitWarning: true,
      fix: true,
      failOnError: !isDevMode,
    }),
  ];

  if (isDevMode) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  return plugins;
}

module.exports = function moduleGenerator(mode) {
  isDevMode = mode === 'development';

  return {
    entry: './source/index.tsx',
    resolve: {
      extensions: ['.ts', '.tsx', '.json', '.js'],
      alias: {
        'assets': path.resolve(__dirname, '../assets/'),
        'api': path.resolve(__dirname, '../source/api/'),
        'store': path.resolve(__dirname, '../source/store/'),
        'styles': path.resolve(__dirname, '../source/styles/'),
        'layouts': path.resolve(__dirname, '../source/layouts/'),
        'components': path.resolve(__dirname, '../source/components/'),
        'routes': path.resolve(__dirname, '../source/routes'),
      }
    },

    mode: mode,
    devtool: isDevMode ? 'eval-source-map' : false,

    module: generateModule(),
    plugins: generatePlugins(),

    output: {
      filename: 'main.js',
      path: outputPath,
    },
  }
}