import NavigationBar from '@/components/navigation'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Gravitas+One&display=swap" rel="stylesheet"/>

      </Head>
      <body className='fondo'>
        <NavigationBar></NavigationBar>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
