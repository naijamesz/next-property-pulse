import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export const metadata = {
  title: 'Property Pulse | Find The Perect Rental',
  description: 'Find your dream perfect',
  keyword: 'rental, find rentals, find properties fit in your lifestyle'
};

export default function MainLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
