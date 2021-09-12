import React from 'react';
import { Intro, LayoutContainer, ShowCard } from 'components/Home';

const Home: React.FC = () => {
  return (
    <LayoutContainer>
      <ShowCard />
      <ShowCard />
      <ShowCard />
      <ShowCard />
      <ShowCard />
      <ShowCard />
      <Intro />
      <Intro />
      <Intro />
      <Intro />
    </LayoutContainer>
  );
};

export default Home;
