import React, { useMemo, useState, useEffect } from 'react';
import widgets from '@/../widgets';
import _ from 'lodash';
import classnames from 'classnames';
import { Button, Input, Result, notification, Modal } from 'antd';
import {
  AppstoreAddOutlined,
  PlusOutlined,
  SearchOutlined,
  SmileOutlined,
  CopyOutlined,
  EyeOutlined
} from '@ant-design/icons';
import './index.less';

import Detail from '../detail';

const { Search } = Input;

const StoreList = () => {
  const [keywords, setKeywords] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeItem, setActiveItem] = useState<any>(false);

  const finWidgets = useMemo(() => {
    const finData = _.cloneDeep(widgets);
    Object.keys(finData).map((key) => {
      //菜单切换
      // if (finData[key]['tags'].indexOf(activeMenuKey) < 0 && activeMenuKey) {
      //   finData[key].visible = false;
      // }
      //查询
      if (
        finData[key]['name'].toLowerCase().indexOf(keywords.toLowerCase()) <
          0 &&
        finData[key]['description']
          .toLowerCase()
          .indexOf(keywords.toLowerCase()) < 0
      ) {
        delete finData[key];
      }
    });
    return finData;
  }, [widgets, keywords]);

  

  const onWidgetClick = (item:any, key:string)=>{
    setActiveItem({...item,key})
    setIsModalVisible(true)

  }

  const handleCancel = ()=>{
    setIsModalVisible(false)
  }

  const keys = Object.keys(finWidgets);

  return (
    <>
      <div>
        <div style={{ margin: ' 50px 100px ' }}>
          <Search
            placeholder="请输入关键字"
            onChange={(e: any) => setKeywords(e.target.value)}
            enterButton
            size="large"
            value={keywords}
          />
        </div>
        {!_.isEmpty(keys) ? (
          <div
            className="react-dashboard-widget-waterfall"
            style={{ columnCount: 4, padding: 20 }}
          >
            {keys.map((key) => {
              const item = finWidgets[key];
              return (
                <div
                  key={key}
                  className={classnames('react-dashboard-widget-item')}
                  style={{
                    display: 'block',
                  }}
                >
                  <img
                    src={item['snapShot']}
                    className={'react-dashboard-widget-shortcut'}
                  />
                  <div className={'react-dashboard-widget-bottombar'}>
                    <div
                      className={'react-dashboard-widget-iconWrap'}
                      style={{
                        backgroundColor: _.get(
                          widgets,
                          key + '.iconBackground',
                        ),
                        backgroundImage: _.get(
                          widgets,
                          key + '.iconBackground',
                        ),
                      }}
                    >
                      {item.icon}
                    </div>
                    <div className={'react-dashboard-widget-name'}>
                      {item.name}
                    </div>
                    <div className={'react-dashboard-widget-description'}>
                      {item.description}
                    </div>
                  </div>
                  <div className={'react-dashboard-widget-mask'}>
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<EyeOutlined />}
                      size="large"
                      onClick={() => onWidgetClick(item, key)}
                    >
                      预览
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <Result
            icon={<SmileOutlined />}
            title="Sorry! Nothing has been matched yet"
            extra={
              <Button type="primary" onClick={() => setKeywords('')}>
                全部
              </Button>
            }
          />
        )}
      </div>
      <Modal
        title={'部件预览'}
        visible={isModalVisible}
        onCancel={handleCancel}
        wrapClassName={'modal-radius'}
        width={800}
        footer={null}
      >
        <Detail widget={activeItem}/>
      </Modal>
    </>
  );
};

export default StoreList;
