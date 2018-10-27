// https://umijs.org/config/
import os from 'os';
import { resolve } from 'path';
import pageRoutes from './router.config';
import webpackplugin from './plugin.config';
import defaultSettings from './settings.config';

const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      // 国际化配置，locale，3.x暂时不适配
      // locale:{}
      library: 'react', // 默认底层库 react | preact
      // pwa: true,
      fastClick: true,
      title: defaultSettings.title,
      dynamicImport: {
        loadingComponent: './components/Loading/index',
      },
      ...(!process.env.TEST && os.platform() === 'darwin'
        ? {
            dll: {
              include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
              exclude: ['@babel/runtime'],
            },
            hardSource: true,
          }
        : {}),
    },
  ],
];

export default {
  // add for transfer to umi
  plugins,
  targets: {
    ie: 8,
  },
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
  },
  // 路由配置
  routes: pageRoutes,
  // Theme for antd
  // https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  sass: {
    'node-sass': true,
  },
  alias: {
    '@': resolve(__dirname, 'src'), // umi默认，也可以不设置或在chainWebpack通过config.resolve.alias.set
  },
  urlLoaderExcludes: [/\.svg$/],
  ignoreMomentLocale: true,
  disableDynamicImport: true,
  disableCSSModules: false, // css modules
  publicPath: `${defaultSettings.version}/`,
  hash: true,
  manifest: {
    basePath: '/',
  },
  chainWebpack: webpackplugin,
  cssnano: {
    mergeRules: false,
  },
};
