import React from 'react';
import { Row, Col, Button } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={12} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Favori</h2>
              <div>
                <a target="_blank " href="https://yuanguandong.github.io/react-dashboard-pro/">
                  React Dashboard Pro
                </a>
              </div>
              <div>
                <a target="_blank " href="https://github.com/yuanguandong/react-widgets">
                  React Widgets
                </a>
              </div>
              <div>
                <a target="_blank " href="https://github.com/yuanguandong/widgets-cli">
                  Widget CLI
                </a>
              </div>
            </div>
          </Col>
          
          <Col lg={12} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                更多工具
              </h2>
              <div>
                <a target="_blank" rel="noopener" href="https://yuanguandong.github.io/smart-background/">Smart Background</a>
                <span> - </span>
                <span>一个快速生成元素背景的react组件</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://react-keyevent.netlify.app/">React Keyevent</a>
                <span> - </span>
                <span>易用的键盘事件监听react组件</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={6} sm={24}>
          <div className="translate-button">
            {/* <Button ghost size="small" >
              English
            </Button> */}
          </div>
        </Col>
        <Col lg={18} sm={24}>
          {/* <span
            style={{
              lineHeight: '16px',
              paddingRight: 12,
              marginRight: 11,
              borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href="https://docs.alipay.com/policies/privacy/antfin"
              rel="noopener noreferrer"
              target="_blank"
            >
              隐私权政策 ICP
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              权益保障承诺书
            </a>
          </span>
          <span style={{ marginRight: 12 }}>ICP 证浙 B2-2-100257</span> */}
          <span style={{ marginRight: 12 }}>Copyright © Favori</span>
        </Col>
      </Row>
    </footer>
  );
}


export default Footer;
