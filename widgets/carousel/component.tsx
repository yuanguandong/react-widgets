import React from 'react';
import styles from './index.less';
import { Carousel } from 'antd';
import { dataSource } from './data';

const Widget = (props: any) => {
  const { width, height } = props;
  return (
    <div className={styles.widget}>
      <Carousel autoplay>
        {dataSource.map((item: string) => (
          <div>
            <div
              className={styles.img}
              style={{
                width,
                height,
                backgroundImage: `url(${item})`,
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Widget;
