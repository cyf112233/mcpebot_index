import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'mcpebot官网',
  description: 'mcpebot官网 - 我们是团结友善的团体，不惹事儿也不怕事儿',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <noscript>
          <link rel="stylesheet" href="/assets/css/noscript.css" />
        </noscript>
      </head>
      <body>
        {children}
        <script src="/assets/js/jquery.min.js"></script>
        <script src="/assets/js/browser.min.js"></script>
        <script src="/assets/js/breakpoints.min.js"></script>
        <script src="/assets/js/util.js"></script>
        <script src="/assets/js/main.js"></script>
        <style>
          {`
            canvas {
              padding: 0;
              margin: 0;
              position: fixed;
              left: 0;
              top: 0;
              width: 100vw;
              height: 100vh;
              z-index: 9999;
            }
          `}
        </style>
      </body>
    </html>
  );
}
