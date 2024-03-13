import Image from 'next/image';
export default function PropertyHeaderImage({ image }) {
  return (
    <section>
      <div className='m-auto container-xl'>
        <div className='grid grid-cols-1'>
          <Image
            // src={`/images/properties/${image}`}
            src={image}
            alt=''
            className='object-cover h-[400px] w-full'
            height={0}
            width={0}
            sizes='100vw'
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
