import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end JS framework',
  },
  {
    title: 'What do React?',
    content: 'React is a favorite JS library',
  },
  {
    title: 'What for React?',
    content: 'React is a freaking headache',
  },
];

const App = () => {
  return (
    <div>
      <Search/>
    </div>
  );
};

export default App;
