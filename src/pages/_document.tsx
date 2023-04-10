import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#1d5b2f" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#1d5b2f" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#1d5b2f" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
