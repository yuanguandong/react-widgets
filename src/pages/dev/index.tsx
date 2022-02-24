import widgets from '@/../widgets';
import React, { useMemo, useEffect, useState } from 'react';
import { Result, Button, Slider, Radio } from 'antd';
import { SmileOutlined, GithubOutlined } from '@ant-design/icons';
import styles from './index.less';
import { SketchPicker } from 'react-color';

export default (props: any) => {
  const {
    location: {
      query: { id },
    },
  } = props;

  const [widget, setWidget] = useState<any>({});
  const [width, setWidth] = useState<any>(600);
  const [height, setHeight] = useState<any>(400);
  const [background, setBackground] = useState<any>('#E3ECFB');

  const [borderRadius, setBorderRadius] = useState<number>(10);
  const [shadow, setShadow] = useState<string>('b');
  const [shadowColor, setShadowColor] = useState<string>('rgba(0,0,0,0.5)');

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

  const handleChangeComplete = (color: any) => {
    const { r, g, b } = color.rgb;
    const shadowColor = `rgba(${r + 50},${g + 50},${b + 50},1)`;
    setBackground(color.hex);
    setShadowColor(shadowColor);
  };

  const shadows: any = {
    a: `0 0 5px rgba(0,0,0,0.5)`,
    b: `0 0 20px rgba(0,0,0,0.5)`,
    c: `0 0 5px ${shadowColor}`,
    d: `0 0 20px ${shadowColor}`,
  };

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
    <div className={styles.page}>
      <div className={styles.config}>
        <div className={styles.logo}>😋 WIDGET DEV PAGE</div>
        <div className={styles.desc}>方便你开发部件</div>

        <div>
          <h2 style={{ margin: '20px 0' }}>页面背景</h2>
          <SketchPicker
            color={background}
            onChangeComplete={handleChangeComplete}
          />
          <h2 style={{ margin: '20px 0' }}>圆角</h2>
          <Slider
            value={borderRadius}
            min={1}
            max={20}
            onChange={(value: any) => setBorderRadius(value)}
            style={{ margin: '20px 0' }}
          />
          <h2 style={{ margin: '20px 0' }}>阴影</h2>
          <Radio.Group
            value={shadow}
            buttonStyle="solid"
            onChange={(e: any) => setShadow(e.target.value)}
          >
            <Radio.Button value="a">灰度阴影一</Radio.Button>
            <Radio.Button value="b">灰度阴影二</Radio.Button>
            <Radio.Button value="c">弥散阴影一</Radio.Button>
            <Radio.Button value="d">弥散阴影二</Radio.Button>
          </Radio.Group>

          <Button
            href={`https://github1s.com/yuanguandong/react-widgets/blob/feature/widgets/${id}/index.tsx`}
            target="_blank"
            shape="round"
            icon={<GithubOutlined />}
            style={{ margin: '20px 0' }}
          >
            云端开发
          </Button>

          <Button
            href="https://github.com/yuanguandong/react-widgets#参与共建"
            target="_blank"
            type="link"
            size="small"
            icon={'👉  '}
          >
            开发流程
          </Button>
        </div>
      </div>
      <div
        className={styles.content}
        style={{
          background,
        }}
      >
        <div>
          <div
            style={{
              width,
              height,
              borderRadius,
              overflow: 'hidden',
              boxShadow: shadows[shadow],
            }}
          >
            {widgetComponent}
          </div>
        </div>
      </div>
    </div>
  );
};
