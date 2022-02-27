import type { WidgetIF } from 'react-dashboard-pro';
import Panel from './component';
import snapShot from './snapshot.png';
import { IssuesCloseOutlined } from '@ant-design/icons';

export default {
  name: 'WidgetName',
  description: 'WidgetDescription',
  tags: [''],
  component: Panel,
  configComponent: null,
  maxLength: 1,
  snapShot,
  icon: <IssuesCloseOutlined />,
  iconBackground: '',
  size: {
    defaultWidth: 3,
    defaultHeight: 10,
    maxWidth: 5,
    maxHeight: 12,
    minWidth: 3,
    minHeight: 10,
  },
  author: '',
} as WidgetIF;
