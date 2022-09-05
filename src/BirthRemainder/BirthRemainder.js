import React from 'react'
import "../index.css";


const BirthRemainder = ({ id, img, name, age }) => {
  // const {id,img, name, age,} = props.birthdata
  return (
    <article>
      <div className="main">
        <span>
          <img src={img} alt="" />
        </span>

        <div className="title">
          <h4>{name}</h4>
          <span style={{opacity: '0.6', fontWeight:'lighter', fontSize: '14px', fontWeight: '400', lineHeight: '21px'}}>{age}</span>
        </div>
      </div>
    </article>
  );
};

export default BirthRemainder
