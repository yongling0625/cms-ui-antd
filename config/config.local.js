import env from './proxy.config';

export default {
  define: {
    'process.env.API_ENV': env.local,
  },
  devtool: 'source-map',
};
