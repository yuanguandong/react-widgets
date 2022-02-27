import {
  CaretLeftOutlined,
  CaretRightOutlined,
  MenuOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { Slider } from 'antd';
import classnames from 'classnames';
import { get } from 'lodash';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import data from './data';
import './index.less';
import { getTime } from './utils';

const Widget = (props: any) => {
  const { width, height } = props;

  const [isPlay, setIsPlay] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  const [song, setSong] = useState(data[0]);
  const [instances, setInstances] = useState<any>();
  const [sliderValue, setSliderValue] = useState<any>();

  const playerSongsRef = useRef<any>();

  const openPlayer = () => {
    setIsOpen(true);
  };

  const closePlayer = () => {
    setIsOpen(false);
  };

  //下一首
  const next = () => {
    let count = 0;
    data.forEach((item: any, index: number) => {
      if (item.id === song.id) {
        count = index + 1 === data.length ? 0 : index + 1;
      }
    });
    if (isPlay) {
      instances[song.id].pause();
      playSong(data[count].id);
    }
    setCount(count);
    setSong(data[count]);
  };

  //上一首
  function back() {
    let count = 0;
    data.forEach((item: any, index: number) => {
      if (item.id === song.id) {
        count = index - 1 < 0 ? data.length - 1 : index - 1;
      }
    });
    if (isPlay) {
      instances[song.id].pause();
      playSong(data[count].id);
    }
    setCount(count);
    setSong(data[count]);
  }

  //播放暂停
  const playSong = (id: string) => {
    const instance = instances[id];
    if (!instance) {
      return;
    }
    instance.play();
  };

  //进度更新
  const progresUpdate = (e: any) => {
    const target = e.target;
    const { currentTime, duration } = target;
    const progres = (currentTime / duration) * 100;
    if (isPlay && duration == currentTime) {
      next();
    }
    setSliderValue(progres);
  };

  //加载音乐
  const durationSongs = useCallback(
    (e: any) => {
      const target = e.target;
      const { duration, currentSrc, dataset } = target;
      setInstances({
        ...instances,
        [dataset.id]: target,
        [`${dataset.id}-time`]: getTime(duration),
      });
    },
    [instances],
  );

  //列表切换
  const playItem = (item: any, index: number) => {
    setSong(item);
    setCount(index);
    pauseSong(song.id);
    setIsPlay(true);
  };

  //滑动条
  const sliderChange = (value: number) => {
    const currentTime = (instances[song.id].duration * value) / 100;
    instances[song.id].currentTime = currentTime;
  };

  //关停
  const onPlayClick = () => {
    setIsPlay(!isPlay);
  };

  //停止
  const pauseSong = useCallback(
    (id) => {
      if (get(instances, `${id}.played`)) {
        instances[id].pause();
      }
    },
    [instances],
  );

  useEffect(() => {
    setSliderValue(0);
  }, [song]);

  useEffect(() => {
    if (isPlay) {
      playSong(song.id);
    } else {
      pauseSong(song.id);
    }
  }, [song, isPlay, pauseSong]);

  return (
    <div className={'widgetPlayer'}>
      <div className="player">
        <div className={classnames('player__header', isOpen && 'open-header')}>
          <div
            className={classnames(
              'player__img player__img--absolute',
              'slider',
              isOpen && 'open-slider',
            )}
          >
            <button
              className={classnames(
                'player__button player__button--absolute--center play',
                isOpen && 'open-play-button',
              )}
              onClick={onPlayClick}
            >
              {!isPlay ? <PlayCircleOutlined /> : <PauseCircleOutlined />}
            </button>

            <div
              className="slider__content"
              style={{
                transform: isOpen
                  ? `translateX(-${100 * count}%)`
                  : `translateX(-${55 * count}px)`,
              }}
            >
              {data.map((item: any, index: number) => (
                <img
                  key={index}
                  className="img slider__img"
                  src={item.img}
                  alt="cover"
                />
              ))}
            </div>
            <button
              className="player__button player__button--absolute--nw playlist"
              onClick={closePlayer}
            >
              <MenuOutlined />
            </button>
          </div>

          <div className={classnames('player__controls', isOpen && 'move')}>
            <button className="player__button back" onClick={() => back()}>
              <StepBackwardOutlined />
            </button>

            <p className="player__context slider__context" onClick={openPlayer}>
              <strong className="slider__name">{song.name}</strong>
              <span className="player__title slider__title">{song.title}</span>
            </p>

            <button className="player__button next" onClick={() => next()}>
              <StepForwardOutlined />
            </button>
            <div style={{ width: '100%', padding: '0 20px' }}>
              <Slider value={sliderValue} onChange={sliderChange} />
            </div>
          </div>
        </div>

        <ul
          className="player__playlist list"
          onClick={closePlayer}
          ref={playerSongsRef}
        >
          {data.map((item: any, index: number) => (
            <li
              className="player__song"
              onClick={() => playItem(item, index)}
              key={index}
            >
              <img className="player__img img" src={item.img} alt="cover" />
              <p className="player__context">
                <b className="player__song-name">{item.name}</b>
                <span className="flex">
                  <span className="player__title">{item.title}</span>
                  <span className="player__song-time">
                    {get(instances, `${item.id}-time`)}
                  </span>
                </span>
              </p>
              <audio
                data-id={item.id}
                className="audio"
                src={item.audio}
                onLoadedData={durationSongs}
                onTimeUpdate={progresUpdate}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Widget;
