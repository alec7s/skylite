import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const common = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Skylite',
        template: 'src/dom/views/eg-content.html',
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
  ],
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        include: path.resolve('./src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          type: "css/mini-extract",
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('./dist'),
    clean: true,
  },
};