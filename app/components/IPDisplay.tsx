'use client';

import { useEffect, useState } from 'react';

export default function IPDisplay() {
  const [ip, setIp] = useState('加载中...');

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch('/api/ip');
        const data = await response.json();
        setIp(data.ip);
      } catch (error) {
        console.error('获取IP地址失败:', error);
        setIp('获取失败');
      }
    };

    fetchIP();
  }, []);

  return <span>{ip}</span>;
} 