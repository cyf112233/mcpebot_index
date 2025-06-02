'use client';

import { useEffect, useState } from 'react';
import IPDisplay from './components/IPDisplay';
import CSSSakuraEffect from './components/CSSSakuraEffect';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div id="wrapper" style={{
        backgroundImage: 'url(/images/bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative'
      }}>
        <header id="header">
          <div className="icon">
            <img src="/images/icon-fa-gem.png" alt="阿杰个人引导页" title="阿杰个人引导页" className="logo" />
          </div>
          <div className="content">
            <div className="inner">
              <h1>mcpebot</h1>
              <p>我们是团结友善的团体，不惹事儿也不怕事儿 QQ频道交流群号 1032675020</p>
            </div>
          </div>
          <nav>
            <ul>
              <li><a target="_blank" href="https://status.mcpebot.com/">服务器状态</a></li>
              <li><a target="_blank" href="https://pd.qq.com/s/4el0z5f1o?businessType=9">最新公告</a></li>
              <li><a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=FqYQuquL95zqd_7R5xM2tUtlqrkqy7VA&jump_from=webapi&authKey=KRYcBx8ds+7uzCYP/C+M/0dYVV4J8H/S0bW+P9REnS5jsJPEJD/SLGFXg7XqC6Dr"><img src="//pub.idqqimg.com/wpa/images/group.png" alt="加入我们" title="加入我们" style={{ transform: 'translateY(5px)' }} /></a></li>
              <li><a target="_blank" href="https://b23.tv/0fFeX0C">服主的b站</a></li>
              <li><a target="_blank" href="minecraft://?addExternalServer=mcpebot|mcpebot.com:20016">自动加入基岩服务器列表</a></li>
            </ul>
          </nav>
        </header>
        <footer id="footer">
          <p className="copyright">您的IP：<IPDisplay /></p>
          <p className="copyright">Copyright © 2023 - {new Date().getFullYear()} All rights reserved by mcpebot Studio</p>
          <p className="copyright">所有版权归mcpebot所有</p>
        </footer>
      </div>
      <CSSSakuraEffect />
    </>
  );
}
