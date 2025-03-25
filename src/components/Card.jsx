import React from 'react'
import './Card.css';

const Card = ({ item }) => {
    
  return (
    <div className='countryCard'>
        <div className='country-image'>
            <img src={item.png} alt={item.common.toLowerCase()} />        
        </div>
        <div className='content'>
            <h3>{item.common}</h3>
        </div>
    </div>
  )
}

export default Card