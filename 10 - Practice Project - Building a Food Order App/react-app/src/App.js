import React from 'react';
import { Header } from 'shared/layout';
import Meals from './components/meals/Meals';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
