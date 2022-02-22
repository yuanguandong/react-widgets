import { defineConfig } from 'umi';

export default defineConfig({
  title:'React Widgets',
  favicon: '/logo.png',
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
