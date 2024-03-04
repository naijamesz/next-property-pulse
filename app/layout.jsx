import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Property Pulse | Find The Perect Rental',
  description: 'Find your dream perfect',
  keyword: 'rental, find rentals, find properties fit in your lifestyle'
};

export default function MainLayout({ children }) {
  return (
    <html lanng='en'>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
