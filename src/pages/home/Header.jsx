import React from 'react';
import { Row, Col, Icon, Menu, Button, Popover } from 'antd';
import {goToPosition} from '@/utils/utils'
import { enquireScreen } from 'enquire-js';
import packageInfo from '@/config'
const LOGO_URL = 'https://gw.alipayobjects.com/zos/rmsportal/gVAKqIsuJCepKNbgbSwE.svg';

class Header extends React.Component {
  state = {
    menuVisible: false,
    menuMode: 'horizontal',
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ menuMode: b ? 'inline' : 'horizontal' });
    });
  }

  render() {
    const { menuMode, menuVisible } = this.state;

    const menu = (
      <Menu mode={menuMode} id="nav" key="nav">
        <Menu.Item key="home">
          <a href="#">首页</a>
        </Menu.Item>
        <Menu.Item key="docs">
          <a href="javascript:void(0)" onClick={()=>goToPosition('store')}><span>商店</span></a>
        </Menu.Item>
        <Menu.Item key="dev">
          <a target="_blank" href="https://github.com/yuanguandong/react-widgets#%E5%8F%82%E4%B8%8E%E5%85%B1%E5%BB%BA">参与共建</a>
        </Menu.Item>
        <Menu.Item key="components">
          <a href="javascript:void(0)" onClick={()=>goToPosition('cli')}>CLI</a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div id="header" className="header">
        {menuMode === 'inline' ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            />
          </Popover>
        ) : null}
        <Row>
          <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
            <div id="logo" to="/" style={{display:'flex',alignItems:'center'}}>
              <span style={{fontSize:28,color:'#000'}}>{packageInfo.symbol}</span>
              <span style={{marginLeft:10,fontWeight: 'bold',color:'#000'}}>REACT WIDGETS</span>
            </div>
          </Col>
          <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
            <div className="header-meta">
              <div id="preview">
                <a
                  id="preview-button"
                  target="_blank"
                  href="https://yuanguandong.github.io/react-dashboard-pro/"
                  rel="noopener noreferrer"
                >
                  <Button>
                    React Dashboard Pro
                  </Button>
                </a>
              </div>
              {menuMode === 'horizontal' ? <div id="menu">{menu}</div> : null}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
