import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { Router } from 'next/router';

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute='class'>
      <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 '>
        <div className='col-span-12 p-4 text-center bg-white border border-gray-100 bg-opacity-10 dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark bg-white-500 bg-clip-padding backdrop-filter backdrop-blur-lg'>
          <Sidebar />
        </div>
        <div className='flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-9 dark:bg-dark-500'>
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
