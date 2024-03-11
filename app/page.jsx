import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
// export const metadata = {
//   title: ''
// };

// import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoBoxes />
      {/* <h1 className='text-3xl'>Welcome</h1>
      <Link href='/properties'>Show Properties</Link> */}
    </>
  );
}
