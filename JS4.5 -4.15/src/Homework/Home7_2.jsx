// реализация поиска по списку 

import React, { useState } from 'react';

const Home7_2 = () => {
  const [query, setQuery] = useState('');
  const items = ['dad','mam']

  const filteredItems = items.filter(
    item => item.toLowerCase().includes(query.toLowerCase())
  );

  

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filteredItems.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
};

export default Home7_2;