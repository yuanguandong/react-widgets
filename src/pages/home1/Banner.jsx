import React from 'react';
import PropTypes from 'prop-types';
import GitHubButton from 'react-github-button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd';
import BannerSVGAnim from '@/components/BannerSVGAnim';

function Banner(props) {
  return (
    <div className="banner-wrapper">
      {props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <div
            className="home-banner-image"
            style={{ width: '100%', height: '300px' }}
          >
            <BannerSVGAnim {...props} />
          </div>
        </TweenOne>
      )}
      <QueueAnim
        className="banner-title-wrapper"
        type={props.isMobile ? 'bottom' : 'right'}
      >
        <div key="line" className="title-line-wrapper">
          <div
            className="title-line"
            style={{ transform: 'translateX(-64px)' }}
          />
        </div>
        <h1 key="h1">REACT WIDGETS</h1>
        <p key="content">适用于 React Dashboard Pro 的 React 部件商店</p>
        <div key="button" className="button-wrapper">
          <a href="#store" rel="noopener noreferrer">
            <Button type="primary">商店</Button>
          </a>
          <a href="#cli" rel="noopener noreferrer">
            <Button style={{ margin: '0 16px' }} type="primary" ghost>
              CLI
            </Button>
          </a>
          <GitHubButton
            key="github-button"
            type="stargazers"
            namespace="yuanguandong"
            repo="react-widgets"
          />
        </div>
      </QueueAnim>
      {!props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <BannerSVGAnim {...props} />
        </TweenOne>
      )}
    </div>
  );
}

Banner.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Banner;
