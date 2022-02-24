import React from 'react';
import styles from './index.less';

const Widget = (props: any) => {
  const { width, height } = props;

  return <div className={styles.widget}></div>;
};

export default Widget;
