import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';
import FeaturedProperties from '@/components/FeaturedProperties';

// export const metadata = {
//   title: ''
// };

// import Link from 'next/link';

export default async function HomePage() {
  // console.log(`${process.env.MONGODB_URI} Conected database`);
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      <HomeProperties />
      {/* <h1 className='text-3xl'>Welcome</h1>
      <Link href='/properties'>Show Properties</Link> */}
    </>
  );
}
