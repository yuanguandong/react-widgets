import { ClockCircleOutlined } from '@ant-design/icons';
import Panel from './component';
import snapShot from './snapshot.png';
import type { WidgetIF } from 'react-dashboard-pro';

export default {
  name: 'Profile',
  description: 'a Profile',
  tags: ['all', 'system'],
  component: Panel,
  configComponent: null,
  maxLength: 2,
  snapShot,
  icon: <ClockCircleOutlined />,
  iconBackground: '#000',
  size: {
    defaultWidth: 2,
    defaultHeight: 8,
    maxWidth: 3,
    maxHeight: 10,
    minWidth: 2,
    minHeight: 4,
  },
  author: 'Favori',
} as WidgetIF;
