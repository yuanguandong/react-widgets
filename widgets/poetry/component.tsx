import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { isEmpty } from 'lodash';
import { ReloadOutlined } from '@ant-design/icons';

type poetry = {
  title: string;
  paragraphs: string[];
  author: string;
};

const Widget = (props: any) => {
  const { width, height } = props;
  const [data, setData] = useState<poetry[]>([]);
  const [index, setIndex] = useState(5);

  const handleRandom = () => {
    const random = Math.floor(Math.random() * data.length);
    setIndex(random);
  };

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://raw.githubusercontent.com/chinese-poetry/chinese-poetry/master/json/%E5%94%90%E8%AF%97%E4%B8%89%E7%99%BE%E9%A6%96.json`,
      );
      const json = await res.json();
      setData(json);
    })();
  }, []);

  return (
    <div className={styles.widget}>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(https://source.unsplash.com/random?hash=${new Date().getTime()})`,
        }}
        onClick={handleRandom}
      >
        <ReloadOutlined />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{data[index] && data[index].title}</div>
        <div className={styles.author}>{data[index] && data[index].author}</div>
        {!isEmpty(data[index]) &&
          data[index]['paragraphs'].map((item) => <div key={item}>{item}</div>)}
      </div>
    </div>
  );
};

export default Widget;
