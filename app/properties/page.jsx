// PropertiesPage is not meaning to single page property
import Link from 'next/link';
import properties from '@/properties.json';
import PropertyCard from '@/components/PropertyCard';

export default function PropertiesPage() {
  return (
    <div>
      <section class='px-4 py-6'>
        <div class='container-xl lg:container m-auto px-4 py-6'>
          {properties.length === 0 ? (
            <p>No poperties found</p>
          ) : (
            <div class='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {properties.map(property => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
          {/* <div class='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {properties.map(property => (
              <div>{property.name}</div>
            ))}
          </div> */}
        </div>
      </section>
      <h1 className='text-3xl'>Properties</h1>
      <Link href='/'>Go Home</Link>
      <br />
      <Link href='/property'>Go to Property</Link>
      <br />
      <Link href='/properties/add'>Go Add</Link>
    </div>
  );
}
