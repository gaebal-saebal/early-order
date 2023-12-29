import Link from 'next/link';
import React from 'react';
import HomeBack from '../icon/home/HomeBack';

const BackButton = () => {
  return (
    <Link href={'/'}>
      <HomeBack />
    </Link>
  );
};

export default BackButton;
