import React from 'react'

const Allbrand = (props) => {
    return (
        <>
            {/* <div className='w-100'> */}
                {/* <div className="w-1140 m-auto"> */}
                    <div className='brandcard gap-5'>
                        <div className='brandimg d-flex justify-content-center align-items-center'>
                            <img src={props.shimg} alt="" className='cursor-pointer'/>
                            {/* <span className='d-flex flex-column icon'>
                                <span>{props.icon}</span>
                                <span>{props.icon2}</span>
                            </span> */}
                        </div>
                        {/* <div className='d-section d-flex flex-column pd-l-24'>
                            <p className='m-0 f-inter f-14 mb-2'>{props.name}</p>
                            <p className='m-0 f-18 mb-2'>{props.price}</p>
                            <div className="d-flex">
                                <img src={props.ratimg} alt="" className='w30' />
                                <span className='f-12 ms-2'>{props.txt}</span>
                            </div>
                        </div> */}
                    </div>
                {/* </div> */}
            {/* // </div> */}
        </>
    )
}

export default Allbrand
