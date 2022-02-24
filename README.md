# react-widgets
React部件商店, 可在商店中选取所需的widget, 通过widgets-cli下载部件供给react-dashboard-pro使用

开发者可以在商店中选用各种所需的widget进行二次开发。

目前多数widget依赖了antd, 使用了ts、less
## 部件商店
https://yuanguandong.github.io/react-widgets/

![image](./shapshot0.jpg)
## React Dashboard Pro
需结合 [react-dashboard-pro](https://github.com/yuanguandong/react-dashboard-pro) 使用

![image](./shapshot.jpg)

## 参与共建
欢迎大家参与到widgets部件商店的建设中来 👏🏻

如想要为商店贡献widget部件，请按如下规范编写导出widget,提交PR到feature分支

```ts
//interface
export interface WidgetIF {
  name: string;
  description: string;
  tags: string[];
  component: Component | FunctionComponent;
  configComponent: Component | FunctionComponent | null;
  maxLength: number;
  snapShot: ImageBitmapSource;
  icon: ReactElement;
  iconBackground: string;
  size: {
    defaultWidth: number;
    defaultHeight: number;
    maxWidth: number;
    maxHeight: number;
    minWidth: number;
    minHeight: number;
  };
  [key: string]: any;
}
```

```ts
// 示例
import { ClockCircleOutlined } from '@ant-design/icons';
import Panel from './component';
import snapShot from './snapshot.png';
import type { WidgetIF } from 'react-dashboard-pro';

export default {
  name: 'Clock',
  description: 'a clock',
  tags: ['all', 'system'],
  component: Panel,
  configComponent: null,
  maxLength: 2,
  snapShot,
  icon: <ClockCircleOutlined />,
  iconBackground: 'blue',
  size: {
    defaultWidth: 4,
    defaultHeight: 5,
    maxWidth: 12,
    maxHeight: 16,
    minWidth: 2,
    minHeight: 4,
  },
  author: 'Favori',
} as WidgetIF;
```

```ts
//widgets/index.tsx
import Clock from './clock';
import Column from './column';
import Guide from './guide';
import Popular from './popular';
import Ring from './ring';
import Todo from './todo';
// ...
import Xxx from './xxx';

export default {
  Clock,
  Column,
  Guide,
  Popular,
  Ring,
  Todo,
  // ……
  Xxx
};


```

