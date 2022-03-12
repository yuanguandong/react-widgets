import type { WidgetIF } from 'react-dashboard-pro';
import Panel from './component';
import snapShot from './snapshot.png';
import { PlayCircleOutlined } from '@ant-design/icons';

export default {
  name: 'MusicPlayer',
  description: 'A MusicPlayer',
  tags: ['all','list','tool'],
  component: Panel,
  configComponent: null,
  maxLength: 1,
  snapShot,
  icon: <PlayCircleOutlined />,
  iconBackground: '#f00',
  size: {
    defaultWidth: 3,
    defaultHeight: 10,
    maxWidth: 5,
    maxHeight: 12,
    minWidth: 3,
    minHeight: 10,
  },
  author: 'Favori',
} as WidgetIF;
