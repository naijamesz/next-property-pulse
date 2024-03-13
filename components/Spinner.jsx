'use client';
import CircleLoader from 'react-spinners/CircleLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};

export default function Spinners({ loading }) {
  return (
    <CircleLoader
      color='#3b82f6'
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label='Loading CircleLoader'
      speedMultiplier={1}
    />
  );
}
