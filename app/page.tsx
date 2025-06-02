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

  const buttonStyle = {
    position: 'fixed' as const,
    padding: '0.7em 1em',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    borderRadius: '4px',
    color: '#fff',
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',
    zIndex: 10000,
    backdropFilter: 'blur(8px)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    fontSize: '0.9em',
    lineHeight: '1.3',
    textAlign: 'center' as const,
    width: 'max-content',
    background: 'linear-gradient(90deg, rgba(255, 105, 180, 0.5), rgba(135, 206, 235, 0.5), rgba(255, 105, 180, 0.5))',
    animation: 'gradientBG 3s linear infinite',
    backgroundSize: '200% 100%'
  };

  return (
    <>
      <style jsx global>{`
        @keyframes gradientBG {
          0% {
            background-position: 200% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <div id="wrapper" style={{
        backgroundImage: 'url(/images/bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative'
      }}>
        <a href="https://onedrive.live.com/?cid=DA6AE51A986991AE&id=DA6AE51A986991AE%21sd8b24d18f4044fd79034899fe96fe938&parId=root&o=OneUp" target="_blank" style={{ 
          ...buttonStyle,
          top: '2em',
          left: '2em'
        }}>下载专用客户端</a>
        <a href="minecraft://?addExternalServer=mcpebot|mcpebot.com:20016" style={{ 
          ...buttonStyle,
          top: '2em',
          right: '2em'
        }}>自动加入服务器<br />到基岩版列表</a>
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
