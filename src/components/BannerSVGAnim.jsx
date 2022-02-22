import React, { useState, useEffect } from 'react';
import TweenOne from 'rc-tween-one';
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';
TweenOne.plugins.push(SvgDrawPlugin);

const banner = [
  'https://cdn.dribbble.com/users/112840/screenshots/14959823/media/c8110e75287da6c73284bf34eca9a1dc.png?compress=1&resize=1200x900&vertical=top',
  'https://cdn.dribbble.com/users/148670/screenshots/16418189/media/39038d200c4f85edc835abb5f03776b1.png?compress=1&resize=840x630&vertical=top',
  'https://cdn.dribbble.com/users/2905985/screenshots/17199286/media/fa7d36de91da645b9db2eb0258ca047b.png?compress=1&resize=1200x900&vertical=top',
  'https://cdn.dribbble.com/users/758070/screenshots/14789455/media/d2d95a909bb4e523df3670286d4335f5.png?compress=1&resize=1200x900&vertical=top',
];

export default function () {
  // safari 下取不到 transform 值，，所有动画在外层增加 g 标签。
  const [index, setIndex] = useState(0);

  const updateIndex = () => {
    if (index >= banner.length-1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  useEffect(() => {
    const timmer = setTimeout(() => {
      updateIndex();
    }, 3000);
    return () => {
      clearTimeout(timmer);
    };
  }, [index]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: 10,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition:'all 1s',
        backgroundColor:'#202020',
        backgroundImage: `url(${banner[index]})`,
      }}
    />
  );
}
