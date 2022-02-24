import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';

function Page2() {
  return (
    <div className="home-page page2" id="cli">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2>Let’s use <span>CLI</span></h2>
        <OverPack>
          <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
            <p key="p" className="page-content">
              命令行运行下列命令，使用CLI服务：
            </p>
            <div key="code1" className="home-code">
              <div>
                $ <span>npm i </span>widgets-cli -D
              </div>

              <div>
                $ npx widget-cli  
                {/* <span className="home-code-comment">
                  // CLI文档 https://github.com/yuanguandong/widgets-cli
                </span> */}
              </div>
            </div>
            <div style={{margin:'50px 0'}}>
              <img style={{maxWidth:'100%'}} src="https://github.com/yuanguandong/widgets-cli/blob/main/snapshot.jpg?raw=true" alt="shapshot" style={{borderRadius:10,overflow:'hidden'}}/>
              <p key="p2" className="page-content">在fetchOne选项里粘贴widget ID即可下载对应的widget.</p>
            </div>
            <p key="p2" className="page-content">
              如需帮助？请先阅读
              <a> 开发文档 </a>
              和
              <a> 常见问题 </a>， 如果未能解决，可以到 GitHub 上
              <a href="https://github.com/yuanguandong/widgets-cli/issues" target="_blank"> 进行提问 </a>。
            </p>
            <div key="button" style={{ marginTop: 88 }}>
              <a href="https://github.com/yuanguandong/widgets-cli" target="_blank" rel="noopener noreferrer">
                <Button type="primary">CLI文档</Button>
              </a>
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Page2;
