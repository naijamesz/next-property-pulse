import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';
// export const metadata = {
//   title: ''
// };

// import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
      {/* <h1 className='text-3xl'>Welcome</h1>
      <Link href='/properties'>Show Properties</Link> */}
    </>
  );
}
