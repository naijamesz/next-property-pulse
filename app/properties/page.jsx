import Link from 'next/link';
// import { fetchProperties } from '@/utils/requests';
// import PropertyCard from '@/components/PropertyCard';
import PropertySearchForm from '@/components/PropertySearchForm';
import Properties from '@/components/Properties';

export default async function PropertiesPage() {
  return (
    <>
      <section className='py-4 bg-blue-700'>
        <div className='flex flex-col items-start px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <PropertySearchForm />
        </div>
      </section>
      <Properties />
    </>
  );
}

// PropertiesPage is not meaning to single page property

// export default async function PropertiesPage() {
//   const properties = await fetchProperties();
//   return (
//     <>
//       <section className='py-4 bg-blue-700'>
//         <div className='flex flex-col items-start px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
//           <PropertySearchForm />
//         </div>
//       </section>
//       <section className='px-4 py-6'>
//         <div className='px-4 py-6 m-auto container-xl lg:container'>
//           {properties.length === 0 ? (
//             <p>No properties found</p>
//           ) : (
//             <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
//               {properties.map(property => (
//                 <PropertyCard key={property._id} property={property} />
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//       <Properties />
//     </>
//   );
// }
