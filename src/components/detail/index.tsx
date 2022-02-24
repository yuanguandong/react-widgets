import styles from './index.less';
import { Button, Tag, notification, Typography } from 'antd';
import React from 'react';
import {
  InfoCircleOutlined,
  SmileOutlined,
  CodeOutlined,
} from '@ant-design/icons';
import { copy } from '@/utils/utils';
const { Text, Link } = Typography;
const Detail = (props: any) => {
  const { widget } = props;
  const {
    key,
    name,
    description,
    tags,
    component,
    maxLength,
    icon,
    iconBackground,
    size: { defaultWidth, defaultHeight },
    author,
  } = widget;

  const copyWidget = () => {
    const ID = key.toLowerCase();
    copy(ID);
    notification['success']({
      message: '拷贝ID成功',
      description: (
        <>
          <div>请粘贴此ID至widgets-cli</div>
          <div style={{ marginTop: 10 }}>
            <Text code>fetchOne</Text>
          </div>
        </>
      ),
    });
  };

  const width = defaultWidth * 100;

  const height = defaultHeight * 40 > 760 ? 760 : defaultHeight * 40;

  return (
    <div>
      <div className={styles.top}>
        <div className={styles.icon} style={{ background: iconBackground }}>
          {icon}
        </div>
        <div className={styles.desc}>
          <div className={styles.title}>{name}</div>
          <div className={styles.info}>{description}</div>
          <div className={styles.bar}>
            <div className={styles.tags}>
              {tags.map((item: any) => (
                <Tag>{item}</Tag>
              ))}
            </div>
            <span>
              <Button
                // type="primary"
                icon={<CodeOutlined />}
                shape="round"
                size="large"
                href={`/dev?id=${key}`}
                target="_blank"
                style={{ marginRight: 20 }}
              >
                开发
              </Button>
              <Button
                type="primary"
                icon={<SmileOutlined />}
                onClick={copyWidget}
                shape="round"
                size="large"
              >
                获取ID
              </Button>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div
          style={{
            width,
            height,
          }}
          className={styles.widgetWrap}
        >
          {React.createElement(component, {
            width,
            height,
          })}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.length}>
          <InfoCircleOutlined /> 此部件在同一Dashboard中最多放置{maxLength}个
        </div>
        <div className={styles.author}>作者: {author}</div>
      </div>
    </div>
  );
};

export default Detail;
