'use client';

import { useEffect } from 'react';

export default function CSSSakuraEffect() {
  useEffect(() => {
    const createSakura = () => {
      const sakura = document.createElement('div');
      sakura.className = 'sakura';
      
      // 随机位置
      const startPositionX = Math.random() * window.innerWidth;
      const startPositionY = -20;
      
      // 随机大小
      const size = Math.random() * 12 + 16; // 16-28px
      
      // 随机动画时长
      const duration = Math.random() * 6 + 4; // 4-10s
      
      // 随机透明度
      const opacity = Math.random() * 0.3 + 0.2; // 0.2-0.5
      
      sakura.style.cssText = `
        position: fixed;
        top: ${startPositionY}px;
        left: ${startPositionX}px;
        width: ${size}px;
        height: ${size}px;
        background-image: url('/images/sakura.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        pointer-events: none;
        z-index: 99999;
        animation: fall ${duration}s linear forwards;
        opacity: ${opacity};
      `;
      
      document.body.appendChild(sakura);
      
      // 动画结束后移除元素
      setTimeout(() => {
        sakura.remove();
      }, duration * 1000);
    };

    // 创建初始樱花
    for (let i = 0; i < 30; i++) {
      setTimeout(createSakura, i * 200);
    }

    // 持续创建新的樱花
    const interval = setInterval(createSakura, 200);

    // 添加动画关键帧
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fall {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      clearInterval(interval);
      style.remove();
      // 清理所有樱花元素
      document.querySelectorAll('.sakura').forEach(el => el.remove());
    };
  }, []);

  return null;
} 