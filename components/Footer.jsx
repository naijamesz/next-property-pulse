import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* Footer */}
      <footer className='py-4 mt-auto bg-gray-200'>
        <div className='container flex flex-col items-center justify-between px-4 mx-auto md:flex-row'>
          <div className='mb-4 md:mb-0'>
            <Link className='flex items-center flex-shrink-0' href='/'>
              <Image className='w-auto h-10' src={logo} alt='PropertyPulse' />
            </Link>
          </div>
          <div className='flex flex-wrap justify-center mb-4 md:justify-start md:mb-0'>
            <ul className='flex space-x-4'>
              {/* <li>
                <Link href='/properties'>Properties</Link>
              </li> */}
              {/* <li>
                <Link href='/terms'>Terms of Service</Link>
              </li> */}
            </ul>
          </div>
          <div>
            <p className='mt-2 text-sm text-gray-500 md:mt-0'>© {currentYear} PropertyPulse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
