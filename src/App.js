import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'Almost Green',
    value: 'green'
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
    <button onClick={()=> setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
    {showDropdown ?
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> : null
    }
    </div>
  );
};

export default App;
