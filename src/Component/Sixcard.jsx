import React from 'react'

const Sixcard = (props) => {
  return (
    <>
      <div className='card'>
        <div className='only-img'>
          <img src={props.jdimg} alt="" />
        </div>
        <div className='discription d-bg d-flex flex-column p-2 justify-content-center'>
          <div className='d-section d-flex flex-column'>
            <h2 className='fs27 fw-bolder m-0 hover-fw'>{props.name}</h2>
            <li>{props.human}</li>
          </div>
          <div className='d-section d-flex flex-column'>
            <span className='text-gray'>Last Know Location</span>
            <p className='m-0 hover-fw'>{props.live}</p>
          </div>
          <div className='d-section d-flex flex-column'>
            <span className='text-gray'>First Seen in:</span>
            <p className='m-0 hover-fw'>{props.time}</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Sixcard
