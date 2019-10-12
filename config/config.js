// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        hmr: true,
      },
      dynamicImport: { webpackChunkName: true },
      title: 'cms-ui-antd',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
