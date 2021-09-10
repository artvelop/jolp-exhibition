import React from 'react';
import { FirstCard } from 'components/Home';

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: '#7700ff',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FirstCard />
    </div>
  );
};

export default Home;
