import PropertyCard from '@/components/PropertyCard';
import { fetchProperties } from '@/utils/requests';
import Link from 'next/link';

export default async function HomeProperties() {
  const data = await fetchProperties();
  // Math.random()).slice(0, 3) จะทำการเรียงลำดับข้อมูลใน array ด้วยวิธีสุ่ม แล้วเลือกข้อมูล 3 ตัวแรกจากการเรียงลำดับนั้น
  // Math.random() - Math.random() จะทำการสุ่มค่าที่เป็นบวกและลบ แล้วเรียงลำดับข้อมูลใน array ตามค่าที่สุมได้
  // slice(0, 3) จะทำการเลือกข้อมูล 3 ตัวแรกจาก array ที่่มาจากการสุ่มเรียงลำดับ
  const recentProperties = data.properties.sort(() => Math.random() - Math.random()).slice(0, 3);

  return (
    <>
      <section className='px-4 py-6'>
        <div className='m-auto container-xl lg:container'>
          <h2 className='mb-6 text-3xl font-bold text-center text-blue-500'>Recent Properties</h2>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {recentProperties === 0 ? (
              <p>No Properties Found</p>
            ) : (
              recentProperties.map(property => <PropertyCard key={property._id} property={property} />)
            )}
          </div>
        </div>
      </section>

      <section className='max-w-lg px-6 m-auto my-10'>
        <Link
          href='/properties'
          className='block px-6 py-4 text-center text-white bg-black rounded-xl hover:bg-gray-700'>
          View All Properties
        </Link>
      </section>
    </>
  );
}
