// PropertiesPage is not meaning to single page property
import Link from 'next/link';

export default function PropertiesPage() {
  return (
    <div>
      <h1 className='text-3xl'>Properties</h1>
      <Link href='/'>Go Home</Link>
      <br />
      <Link href='/property'>Go to Property</Link>
      <br />
      <Link href='/properties/add'>Go Add</Link>
    </div>
  );
}
