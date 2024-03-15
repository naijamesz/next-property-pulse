import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
// import { GlobalProvider } from '@/context/GlobalContext';
import 'react-toastify/dist/ReactToastify.css';
import 'photoswipe/dist/photoswipe.css';

export const metadata = {
  title: 'Property Pulse | Find The Perect Rental',
  description: 'Find your dream perfect',
  keyword: 'rental, find rentals, find properties fit in your lifestyle'
};

export default function MainLayout({ children }) {
  return (
    <AuthProvider>
      <html lang='en'>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
}

{
  /* <GlobalProvider> */
}
{
  /* </GlobalProvider> */
}
{
  /* <ToastContainer /> */
}
