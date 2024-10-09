import React from 'react'

const Sale20pr = (props) => {
  return (
    <div>
      <div className='w-220 d-flex flex-column'style={{height:"270px"}} >
        {/* <div className="h-230 "> */}
        {/* img-fluid */}
            <img src={props.saleimg} alt=""  width={"100%"} className='border border-1 shadow-sm p-3 bg-body rounded'/>
            <div>
                <p className='m-0 fs-14'>{props.saletxt}</p>
                <b style={{color:"#108934"}}>{props.saleoff}</b>
            </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Sale20pr
