'use client';

import { useEffect, useState } from 'react';

export default function IPDisplay() {
  const [ip, setIp] = useState('加载中...');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pv.sohu.com/cityjson?ie=utf-8';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.returnCitySN) {
        // @ts-ignore
        setIp(window.returnCitySN.cip);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <span>{ip}</span>;
} 