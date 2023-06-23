import React, { useEffect, useReducer } from 'react';
import listData from './data/listData.json';

const listReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LIST':
      return action.payload;
    case 'REMOVE_LIST_ITEM':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

const App = () => {
  const [list, dispatch] = useReducer(listReducer, []);

  useEffect(() => {
    dispatch({ type: 'SET_LIST', payload: listData });
  }, []);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const handleRemoveItemFromList = id => {
    dispatch({ type: 'REMOVE_LIST_ITEM', payload: id });
  };

  return (
    <div>
      <h1>Lista</h1>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            {item.name}
            <button
              style={{ margin: '10px' }}
              onClick={() => handleRemoveItemFromList(item.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
