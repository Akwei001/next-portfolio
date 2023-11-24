import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Oswald&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='bg-white  dark:bg-black dark:text-white'>
        {/* <div>bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r</div>
        <div>dark:from-dark-500 dark:to-dark-700</div> */}
        {/*bg-gradient-to-r from-green-400 to-blue-400*/}
        

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
