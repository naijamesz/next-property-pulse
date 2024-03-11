'use client';
import Link from 'next/link';
import { useRouter, useParams, useSearchParams, usePathname } from 'next/navigation';
// Single property
export default function PropertyPage() {
  const router = useRouter();
  /*   const searchParams = useSearchParams();
  const { id } = useParams();
  const name = searchParams.get('name');
  const pathname = usePathname(); */
  return (
    <div>
      <button onClick={() => router.push('/')} className='bg-blue-600 p-2'>
        Go Home {/* {pathname} {id} {name} */}
      </button>
      <Link href='/'>
        <h1 className='text-4xl'>PropertyPage</h1>
      </Link>
    </div>
  );
}
