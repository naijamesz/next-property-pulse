'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { FaArrowLeft, FaBookmark } from 'react-icons/fa';
import { FaPaperPlane, FaShare } from 'react-icons/fa6';
import { fetchProperty } from '@/utils/requests';
import BookmarkButton from '@/components/BookmarkButton';
import ShareButtons from '@/components/ShareButtons';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';
import PropertyContactForm from '@/components/PropertyContactForm';
import Spinner from '@/components/Spinner';
import PropertyImages from '@/components/PropertyImages';
import PropertyDetails from '@/components/PropertyDetails';
import Link from 'next/link';

// Single property
export default function PropertyPage() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch single property by id
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.error('Error fetching property:', error);
      } finally {
        setLoading(false);
      }
    };
    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  if (!property && !loading) {
    return <h1 className='mt-10 text-2xl font-bold text-center'>Property Not Found</h1>;
  }
  return (
    <>
      {loading && <Spinner loading={loading} />}
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />
          <section>
            <div className='container px-6 py-6 m-auto'>
              <Link href='/properties' className='flex items-center text-blue-500 hover:text-blue-600'>
                <FaArrowLeft className='mr-2' /> Back to Properties
              </Link>
            </div>
          </section>

          <section className='bg-blue-50'>
            <div className='container px-6 py-10 m-auto'>
              <div className='grid w-full grid-cols-1 gap-6 md:grid-cols-70/30'>
                <PropertyDetails property={property} />
                <aside className='space-y-4'>
                  <BookmarkButton property={property} />
                  <ShareButtons property={property} />
                  <PropertyContactForm property={property} />
                </aside>
              </div>
            </div>
          </section>
          <PropertyImages images={property.images} />
        </>
      )}
    </>
  );
}
