//使用了css module

import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import styles from './index.less';
import { Button } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

const Widget = (props: any) => {
  const { width, height } = props;
  const avatar =
    'https://cdn.dribbble.com/users/916023/screenshots/17305938/media/bf7a04096fe9f31f350b00f792d0c593.png?compress=1&resize=1200x900&vertical=top';
  useEffect(() => {}, []);

  return (
    <div className={styles.profile}>
      <div className={styles.more}>
        <EllipsisOutlined />
      </div>
      {/* <div className={styles.avatarWrap}> */}
        <div
          className={styles.avatar}
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
        {/* <div className={styles.dot}></div> */}
      {/* </div> */}
      <div className={styles.name}>Ida Rohan</div>
      <div className={styles.desc}>Designer</div>
      <Button type="primary" block className={styles.button} shape="round">
        Follow
      </Button>
    </div>
  );
};

export default Widget;
