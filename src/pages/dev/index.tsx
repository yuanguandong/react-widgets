import widgets from '@/../widgets';
import React, { useMemo, useEffect, useState } from 'react';
import { Result, Button, Slider, Radio, Dropdown, Menu } from 'antd';
import {
  SmileOutlined,
  GithubOutlined,
  BookOutlined,
  HomeOutlined,
  DownOutlined,
} from '@ant-design/icons';
import styles from './index.less';
import { SketchPicker } from 'react-color';

const menu = (
  <Menu>
    {Object.keys(widgets).map((key) => (
      <Menu.Item icon={widgets[key].icon} key={key}>
        <a href={`#dev?id=${key}`} style={{textDecoration:'none'}}>{key}</a>
      </Menu.Item>
    ))}
  </Menu>
);

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
  const [shadowColor, setShadowColor] = useState<string>('rgba(0,0,0,0.2)');

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
    if (!component || !width || !height || !id) {
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
    const shadowColor = `rgba(${r + 50},${g + 50},${b + 50},0.8)`;
    setBackground(color.hex);
    setShadowColor(shadowColor);
  };

  const shadows: any = {
    a: `1px 1px 5px rgba(0,0,0,0.3)`,
    b: `2px 2px 20px rgba(0,0,0,0.2)`,
    c: `1px 1px 5px ${shadowColor}`,
    d: `2px 2px 20px ${shadowColor}`,
  };

  useEffect(() => {
    if (widgets[id]) {
      setWidget(widgets[id]);
      const width = defaultWidth * 100;
      const height = defaultHeight * 40 > 760 ? 760 : defaultHeight * 40;
      width && setWidth(width);
      height && setHeight(height);
    }
  }, [id, defaultWidth, defaultHeight]);

  return (
    <div className={styles.page}>
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
      <div className={styles.config}>
        <div className={styles.logo}>😋 WIDGET DEV PAGE</div>
        <div className={styles.desc}>
          方便你开发 
          <Dropdown overlay={menu}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              {' '+id}
            </a>
          </Dropdown>
        </div>

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
            <Radio.Button value="a">灰度1</Radio.Button>
            <Radio.Button value="b">灰度2</Radio.Button>
            <Radio.Button value="c">弥散1</Radio.Button>
            <Radio.Button value="d">弥散2</Radio.Button>
          </Radio.Group>
          <div>
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
              // size="small"
              icon={<BookOutlined />}
            >
              开发流程
            </Button>
            <Button
              href="#"
              target="_blank"
              type="link"
              // size="small"
              icon={<HomeOutlined />}
            >
              部件商店
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
