import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Dutch',
    value: 'nl'
  },
  {
    label: 'French',
    value: 'fr'
  },
  {
    label: 'German',
    value: 'de'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
  {
    label: 'Irish',
    value: 'ga'
  },
  {
    label: 'Japanese',
    value: 'ja'
  },
  {
    label: 'Latin',
    value: 'la'
  },
  {
    label: 'Maori',
    value: 'mi'
  },
  {
    label: 'Polish',
    value: 'pl'
  },
  {
    label: 'Russian',
    value: 'ru'
  },
  {
    label: 'Spanish',
    value: 'es'
  },
  {
    label: 'Swedish',
    value: 'sv'
  },
  {
    label: 'Yiddish',
    value: 'yi'
  }
]

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
        <label>Enter Text</label>
          <input value={text} onChange={(event) => setText(event.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language}/>
    </div>
  );
};

export default Translate;
