import widgets from '@/../widgets';
import React, { useMemo, useEffect, useState } from 'react';
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

export default (props: any) => {
  const {
    location: {
      query: { id },
    },
  } = props;

  const [widget, setWidget] = useState<any>({});
  const [width, setWidth] = useState<any>(600);
  const [height, setHeight] = useState<any>(400);

  const {
    key,
    name,
    description,
    tags,
    component,
    maxLength,
    icon,
    iconBackground,
    size = {},
    author,
  } = widget;

  const { defaultWidth, defaultHeight } = size;

  const widgetComponent = useMemo(() => {
    if (!component) {
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            padding: 50,
            background: '#fff',
            borderRadius: 10,
          }}
        >
          <Result
            icon={<SmileOutlined />}
            title={`对不起,没找到对应的部件ID-${id}`}
            extra={
              <Button type="primary" href="/">
                返回首页
              </Button>
            }
          />
        </div>
      );
    }
    return React.createElement(component, {
      width,
      height,
    });
  }, [component, id, width, height]);

  useEffect(() => {
    if (widgets[id]) {
      setWidget(widgets[id]);
      const width = defaultWidth * 100;
      const height = defaultHeight * 40 > 760 ? 760 : defaultHeight * 40;
      setWidth(width);
      setHeight(height);
    }
  }, [id, defaultWidth, defaultHeight]);

  return (
    <div
      style={{
        minWidth: '100vw',
        minHeight: '100vh',
        display: 'flex',
        background: '#202020',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ width, height }}>{widgetComponent}</div>
    </div>
  );
};
