import React, { useState } from 'react';


function ShowList(props) {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  function addItem() {
    let newList = [...list, input];
    if (input.trim() === '') {
      setInput('');
      return;
    }
    setList(newList);
    setInput('');
  }

  function removeItem(index) {
      // eslint-disable-next-line no-restricted-globals
      let confirmed = confirm('Are you sure you want to remove!');
      if(!confirmed) return;
      let newList = list.filter((item, key) => key !== index);
      setList(newList);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      addItem();
    }
  }

  return (
    <div>
      <div>
        <input type="text" 
          value={input}
          onKeyDown={handleKeyDown}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => addItem()} >Create</button>
      </div>
      <div className='show-list'>
        {list.map((item, index) => (
          <div key={index}>
            {item} 
            <button onClick={() => removeItem(index)}>Del</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;