import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end JS framework'
  },
  {
    title: 'What is React?',
    content: 'React is a favorite JS library'
  },
  {
    title: 'What is React?',
    content: 'React is a freaking headache'
  },
];
const App = () => {
  return (
    <div>
      <Accordion items={items}/>
    </div>
  );
};

export default App;
