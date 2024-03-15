import InfoBox from './InfoBox';

export default function InfoBoxes() {
  return (
    <>
      {/* Renters and Owners */}
      <section>
        <div className='m-auto container-xl lg:container'>
          <div className='grid grid-cols-1 gap-4 p-4 rounded-lg md:grid-cols-2'>
            <InfoBox
              heading='For Renters'
              backgroundColor='bg-gray-100'
              buttonInfo={{
                text: 'Browse Properties',
                link: '/properties',
                backgroundColor: 'bg-black'
              }}>
              Find your dream rental property. Bookmark properties and contact owners.
            </InfoBox>
            <InfoBox
              heading='For Property Owners'
              backgroundColor='bg-blue-200'
              buttonInfo={{
                text: 'Add Properties',
                link: '/properties/add',
                backgroundColor: 'bg-blue-500'
              }}>
              List your properties and reach potential tenants. Rent as an airbnb or long term.
            </InfoBox>
          </div>
        </div>
      </section>
    </>
  );
}
