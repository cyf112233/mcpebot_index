import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "千年/游戏开发部",
  description: "那些暗潮汹涌的 见不得人的 无法诉之于口的才是我真正的生活|关键词：尚书工作室",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-cn">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <noscript>
          <link rel="stylesheet" href="/assets/css/noscript.css" />
        </noscript>
      </head>
      <body className="is-preload">
        {children}
        <script src="/assets/js/jquery.min.js"></script>
        <script src="/assets/js/browser.min.js"></script>
        <script src="/assets/js/breakpoints.min.js"></script>
        <script src="/assets/js/util.js"></script>
        <script src="/assets/js/main.js"></script>
        <style>{`
          canvas { 
            padding: 0; 
            margin: 0; 
            position: fixed;
            left: 0;
            top: 0;
            height: 100vh;
            width: 100vw;
            z-index: 2;
          }
        `}</style>
      </body>
    </html>
  );
}
