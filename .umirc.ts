import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base:'/react-widgets/',
  publicPath:'/react-widgets/',
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
