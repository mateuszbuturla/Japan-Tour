import React, { useEffect } from 'react';
import { HomeHeader } from 'components/common';

interface Props {
  setTitle: Function;
}

function Home({ setTitle }: Props) {
  useEffect(() => {
    setTitle('Strona główna');
  }, []);
  return (
    <>
      <HomeHeader />
    </>
  );
}

export default Home;
