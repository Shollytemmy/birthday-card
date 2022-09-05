import {birthDatas} from './birthData'
import BirthRemainder from './BirthRemainder/BirthRemainder'
import React, {useState} from 'react';
import './index.css';

function App() {
  const[clear, setClear] = useState(birthDatas)

  const handleDelete = (id) =>{
    let newData = clear.filter((birthday) => birthday.id !== id );
    setClear(newData)
  }


  return (
    <div className="container">
      <p className='bith-count'>{clear.length} {clear.length > 1 ? 'bithdays' : 'birthday'} today </p>
      {clear.map((birthdata) => {
        return (
          <div key={birthdata.id}>
            <BirthRemainder {...birthdata} />{" "}
            <button
              onClick={() => handleDelete(birthdata.id)}
              className="data-btn"
            >
              remove
            </button>
          </div>
        );
      })}

      <span className='btn-span'>
        <button onClick={() => setClear([])} className="clear-btn">
          Clear All
        </button>
      </span>
    </div>
  );
}

export default App;
