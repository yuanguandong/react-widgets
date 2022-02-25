import type { WidgetIF } from 'react-dashboard-pro';
import Panel from './component';
import snapShot from './snapshot.png';
import { PictureOutlined } from '@ant-design/icons';

export default {
  name: 'Carousel',
  description: '轮播导航',
  tags: ['all','list','guide'],
  component: Panel,
  configComponent: null,
  maxLength: 1,
  snapShot,
  icon: <PictureOutlined />,
  iconBackground: '#34BD5E',
  size: {
    defaultWidth: 5,
    defaultHeight: 8,
    maxWidth: 12,
    maxHeight: 10,
    minWidth: 2,
    minHeight: 2,
  },
  author: 'Favori',
} as WidgetIF;
