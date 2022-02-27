import { defineConfig } from 'umi';
const openBrowser = require('open-browser-webpack-plugin');

const {
  id
} = process.env;

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
  chainWebpack(config) {
    config
      .plugin('open-browser-webpack-plugin')
      .use(openBrowser, [{ url: `http://localhost:8000#dev?id=${id}` }]); // 此处url与项目启动的url保持一致
  },
});
