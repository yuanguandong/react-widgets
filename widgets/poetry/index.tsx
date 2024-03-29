import type { WidgetIF } from 'react-dashboard-pro';
import Panel from './component';
import snapShot from './snapshot.png';
import { AlignCenterOutlined } from '@ant-design/icons';

export default {
  name: 'poetry',
  description: '唐诗300首等',
  tags: ['all', 'tool'],
  component: Panel,
  configComponent: null,
  maxLength: 1,
  snapShot,
  icon: <AlignCenterOutlined />,
  iconBackground: '#B4B31D',
  size: {
    defaultWidth: 6,
    defaultHeight: 6,
    maxWidth: 12,
    maxHeight: 10,
    minWidth: 4,
    minHeight: 4,
  },
  author: 'Favori',
} as WidgetIF;
