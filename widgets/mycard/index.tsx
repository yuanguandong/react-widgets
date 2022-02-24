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
    defaultWidth: 2,
    defaultHeight: 7,
    maxWidth: 3,
    maxHeight: 10,
    minWidth: 2,
    minHeight: 6,
  },
  author: '',
} as WidgetIF;
