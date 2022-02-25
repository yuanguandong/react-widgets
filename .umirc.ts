import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  antd: {},
  theme: {
    'primary-color': '#2c3ff1',
  },
  title: 'React Widgets',
  favicon:
    'https://github.com/yuanguandong/react-widgets/blob/master/public/logo.png?raw=true',
  nodeModulesTransform: {
    type: 'none',
  },
  base: '/react-widgets/',
  publicPath: '/react-widgets/',
  routes: [
    { path: '/', component: '@/pages/home' },
    { path: '/dev', component: '@/pages/dev' },
  ],
  fastRefresh: {},
  history: { type: 'hash' },
});
