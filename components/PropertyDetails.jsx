import { FaCheck, FaBed, FaBath, FaRulerCombined, FaTimes } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import PropertyMap from '@/components/PropertyMap';
export default function PropertyDetails({ property }) {
  return (
    <main>
      <div className='p-6 text-center bg-white rounded-xl shadow-md md:text-left'>
        <div className='mb-4 text-gray-500'>{property.type}</div>
        <h1 className='mb-4 text-3xl font-bold'>{property.name}</h1>
        <div className='flex justify-center mb-4 text-gray-500 align-middle md:justify-start'>
          <FaLocationDot className='inline mr-2 text-lg text-orange-700' />{' '}
          <p className='text-orange-700'>
            {property.location.street}, {property.location.city}, {property.location.state} {property.location.zipcode}
          </p>
        </div>

        <h3 className='p-2 my-6 text-lg font-bold text-center text-white bg-gray-800'>Rates & Options</h3>
        <div className='flex flex-col justify-around md:flex-row'>
          <div className='flex items-center justify-center pb-4 mb-4 border-b border-gray-200 md:border-b-0 md:pb-0'>
            <div className='mr-2 font-bold text-gray-500'>Nightly </div>
            <div className='text-2xl font-bold'>
              {property.rates.nightly ? (
                `$${property.rates.nightly.toLocaleString()}`
              ) : (
                <FaTimes className='inline-block text-red-700' />
              )}
              {/* <FaXmark className='inline-block mr-2 text-red-700' /> */}
            </div>
          </div>
          <div className='flex items-center justify-center pb-4 mb-4 border-b border-gray-200 md:border-b-0 md:pb-0'>
            <div className='mr-2 font-bold text-gray-500'>Weekly</div>
            <div className='text-2xl font-bold text-blue-500'>
              {' '}
              {property.rates.weekly ? (
                `$${property.rates.weekly.toLocaleString()}`
              ) : (
                <FaTimes className='text-red-700' />
              )}
            </div>
          </div>
          <div className='flex items-center justify-center pb-4 mb-4 md:pb-0'>
            <div className='mr-2 font-bold text-gray-500'>Monthly</div>
            <div className='text-2xl font-bold text-blue-500'>
              {' '}
              {property.rates.monthly ? (
                `$${property.rates.monthly.toLocaleString()}`
              ) : (
                <FaTimes className='text-red-700' />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='p-6 mt-6 bg-white rounded-xl shadow-md'>
        <h3 className='mb-6 text-lg font-bold'>Description & Details</h3>
        <div className='flex justify-center gap-4 mb-4 text-xl text-blue-500 space-x-9'>
          <p>
            <FaBed className='inline mr-2' />
            {property.beds} <span className='hidden sm:inline'>Beds</span>
          </p>
          <p>
            <FaBath className='inline mr-2' />
            {property.baths} <span className='hidden sm:inline'>Baths</span>
          </p>
          <p>
            <FaRulerCombined className='inline mr-2 ' />
            {property.square_feet} <span className='hidden sm:inline'> sqft</span>
          </p>
        </div>
        <p className='mb-4 text-center text-gray-500'>{property.description}</p>
        {/* <p className='mb-4 text-gray-500'>
          We have a beautiful apartment located near the commons. It is a 2 bedroom apartment with a full kitchen and
          bathroom. It is available for weekly or monthly rentals.
        </p> */}
      </div>

      <div className='p-6 mt-6 bg-white rounded-xl shadow-md'>
        <h3 className='mb-6 text-lg font-bold'>Amenities</h3>

        <ul className='grid grid-cols-1 list-none md:grid-cols-2 lg:grid-cols-3'>
          {property.amenities.map((amenity, index) => (
            <li key={index}>
              <FaCheck className='inline-block mr-2 text-blue-600' /> {amenity}
            </li>
          ))}
        </ul>
      </div>
      <div className='p-6 mt-6 bg-white rounded-xl shadow-md'>
        <PropertyMap property={property} />
      </div>
    </main>
  );
}
