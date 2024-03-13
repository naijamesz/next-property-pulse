'use client';

import CircleLoader from 'react-spinners/CircleLoader';

const override = {
  borderColor: '#3b52ff',
  display: 'block',
  margin: '100px auto',
};
export default function LoadingPage({ loading }) {
  return (
    <div>
      <CircleLoader
        color='#3b82f6'
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label='Loading CircleLoader'
        speedMultiplier={1}
      />
    </div>
  );
}
