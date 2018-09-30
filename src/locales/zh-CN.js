/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | System Config Data
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2016-03-23 12:25:27
 * @version 0.1 | 2016-03-23  // Initial version.
 * @version 0.2 | 2017-12-15  // add many banner images.
 * @version 0.3 | 2018-06-10  // add env split.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-09-22 23:02:26
*/
// dev or online
import { isProd, isMobile } from '@/utils';
import defaultSettings from '../../config/settings.config';
// Date、version...
const nowYear = new Date().getFullYear();
const version = `${defaultSettings.version.replace('/', '')}/`;
// Media
const mePai = isMobile()
  ? 'https://m.mepai.me/photographyer/u_592e418fe4a53.html'
  : 'https://www.mepai.me/user/u_592e418fe4a53';
//
export default {
  prefix: defaultSettings.prefix,
  version: `${version}`,
  title: defaultSettings.title,
  content: {},
  footer: {
    description: {
      Chinese:
        '一个创作者，MUX Studio创始人 | 独立设计师、自由摄影师、程序猿/软件工程师、制片人、自媒体/公路作者等.',
      English:
        'A Creator，MUX Studio Founder | Independent Designer、Photographer、Programmer/Software Engineer、Producer、Media/Novel Author etc.',
    },
    mains: {
      buttons: [
        {
          id: 0,
          path: '/1.x',
          name: '1.x',
          color: 'blue',
        },
        {
          id: 1,
          path: '/2.x',
          name: '2.x',
          color: 'red',
        },
        {
          id: 2,
          path: '//github.com/PhotoArtLife/blog3.x-mux-club',
          name: 'GitHub',
          target: '_blank',
          color: 'green',
        },
      ],
      btnSvgPath:
        'M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z',
    },
    copyright: {
      Chinese: {
        number: '鲁ICP备15022927号',
        reserved: `Copyright © 2015-${nowYear} mukuashi Inc. All Rights Reserved. `,
      },
      English: {
        number: 'ICP Network No.15022927',
        reserved: `Copyright © 2015-${nowYear} mukuashi Inc. All Rights Reserved. `,
      },
    },
  },
};
