import React from 'react'

const Sthos_sek = (props) => {
  return (
    <div>
      <div className='position-relative'>
        <div className='w-100'>
          <img src={props.sth1} className='w-100 h-783' alt="" />
        </div>
        <div>
          <button type="button" className="position-absolute text-light text-uppercase baloo-paaji2 sthos-btn1">Explore Our Collection</button>
          <button type="button" className="position-absolute text-light text-uppercase baloo-paaji2 sthos-btn2">Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Sthos_sek
