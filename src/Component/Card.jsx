import React from 'react'

function Card(props) {
    console.log(props);
    
  return (
    <div>
      <div className='w-33'>
        <img src={props.cardimage} alt="" />
        <h3>{props.cardheading}</h3>
      </div>
    </div>
  )
}

export default Card
