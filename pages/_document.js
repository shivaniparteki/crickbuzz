import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className=' bg-gradient-to-b from-slate-300 to-green-900 h-[100vh]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
