import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // 获取客户端 IP
  let ip = request.headers.get('x-forwarded-for') || 
           request.headers.get('x-real-ip') || 
           'unknown';
  
  // 处理 IPv4 地址的 IPv6 表示形式
  if (ip.startsWith('::ffff:')) {
    ip = ip.substring(7); // 移除 '::ffff:' 前缀
  }
  
  return NextResponse.json({ ip });
} 