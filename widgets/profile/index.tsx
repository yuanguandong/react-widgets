import { UserOutlined } from '@ant-design/icons';
import Panel from './component';
import snapShot from './snapshot.png';
import type { WidgetIF } from 'react-dashboard-pro';

export default {
  name: 'profile',
  description: 'a Profile',
  tags: ['all', 'system'],
  component: Panel,
  configComponent: null,
  maxLength: 1,
  snapShot,
  icon: <UserOutlined />,
  iconBackground: '#000',
  size: {
    defaultWidth: 2,
    defaultHeight: 7,
    maxWidth: 3,
    maxHeight: 10,
    minWidth: 2,
    minHeight: 6,
  },
  author: 'Favori',
} as WidgetIF;
