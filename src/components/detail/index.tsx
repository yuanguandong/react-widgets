import styles from './index.less';
import { Button, Tag } from 'antd';
import React from 'react';
import {InfoCircleOutlined} from '@ant-design/icons'

const Detail = (props: any) => {
  const { widget } = props;
  const {
    name,
    description,
    tags,
    component,
    maxLength,
    icon,
    iconBackground,
    size: { defaultWidth, defaultHeight },
    author
  } = widget;
  return (
    <div>
      <div className={styles.top}>
        <div
          className={styles.icon}
          style={{ background: iconBackground }}
        >
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
            <Button type="primary">获取</Button>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div
          style={{
            width: defaultWidth * 100,
            // border
            height: defaultHeight * 40 > 760 ? 760 : defaultHeight * 40,
          }}
          className={styles.widgetWrap}
        >
          {React.createElement(component)}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.length}><InfoCircleOutlined /> 此部件在同一Dashboard中最多放置{maxLength}个</div>
        <div className={styles.author}>作者: {author}</div>
      </div>
    </div>
  );
};

export default Detail;
