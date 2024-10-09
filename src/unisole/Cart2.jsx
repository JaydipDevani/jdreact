import React from 'react'
import Favorite from '@mui/icons-material/FavoriteBorderOutlined';
import Cartreview from './Cartreview';

const Cart2 = (props) => {
  return (
    <div>
      <div className="container-fluid" style={{ backgroundColor: "#FAFAFB" }}>
        <div className="container">

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className='d-flex'>
                <div className='d-flex flex-column gap-2'>
                  <div style={{ width: "96px", height: "87px", borderBottom: "1px solid black" }} className='border border-1 border-dark'>
                    <img src={props.shimg1} alt="" className='img-fluid h-100' />
                  </div>
                  <div style={{ width: "96px", height: "87px" }} className='border border-1 border-dark'>
                    <img src={props.shimg2} alt="" className='img-fluid h-100' />
                  </div>
                  <div style={{ width: "96px", height: "87px" }} className='border border-1 border-dark'>
                    <img src={props.shimg3} alt="" className='img-fluid h-100' />
                  </div>
                </div>
                <div style={{ width: "547px", height: "494px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
                  <img src={props.shimg4} alt="" className='img-fluid' style={{ width: "450px", height: "494px" }} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <p style={{ fontSize: "28px", fontWeight: "700" }} className='plus-jakarta-sans m-0'>{props.p}</p>
              <img src={props.ratting} alt="" className='img-fluid mb-2 w-25' />
              <div className='d-flex'>
                <p className='plus-jakarta-sans m-0 me-2' style={{ fontWeight: "700", fontSize: "28px" }}>{props.price}</p>
                <p className='plus-jakarta-sans m-0 pt-2 text-decoration-line-through' style={{ fontWeight: "700", fontSize: "21px", opacity: "60%" }}>{props.strike}</p>
              </div>
              <div className='d-flex mb-4'>
                <p style={{ color: "#A1A1AA" }} className='m-0 me-2' >{props.dis}</p>
                <p className='m-0 plus-jakarta-sans' style={{ color: "#A1A1AA", fontWeight: "500", fontSize: "14px", lineHeight: "2" }} >{props.discount}</p>
              </div>
              <div>
                <p className='plus-jakarta-sans' style={{ fontWeight: "700", fontSize: "16px" }}>{props.detail}</p>
                <div className='w-75'>
                  <div className="d-flex justify-content-between">
                    <li style={{ fontWeight: "600", fontSize: "16px" }} className='plus-jakarta-sans' >Closure Type</li>
                    <p className='m-0 mb-2' style={{ color: "gray" }}>Lace-Up</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <li style={{ fontWeight: "600", fontSize: "16px" }} className='plus-jakarta-sans' >Type of heel</li>
                    <p className='m-0 mb-2' style={{ color: "gray" }}>No heels</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <li style={{ fontWeight: "600", fontSize: "16px" }} className='plus-jakarta-sans' >Water resistant level</li>
                    <p className='m-0 mb-2' style={{ color: "gray" }}>Not water resistant</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <li style={{ fontWeight: "600", fontSize: "16px" }} className='plus-jakarta-sans' >Sole Material</li>
                    <p className='m-0 mb-2' style={{ color: "gray" }}>Rubber</p>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <li style={{ fontWeight: "600", fontSize: "16px" }} className='plus-jakarta-sans' >Exterior Material</li>
                    <p className='m-0 mb-2' style={{ color: "gray" }}>Synthetic</p>
                  </div>
                  <div>
                    <p className='plus-jakarta-sans' style={{ fontWeight: "700", fontSize: "16px" }}>Colors</p>
                      <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
                <p className='plus-jakarta-sans' style={{fontWeight:"700",fontSize:"14px"}}>Reviews <font className='rounded-pill text-light' style={{backgroundColor:"gray",padding:"0px 4px",fontSize:"13px"}}>157</font></p>
              <hr />
              <Cartreview />
            </div>
            <div className="col-lg-6 col-md-12">
              <div className='d-flex align-items-center'>
                <button className='btn btn-dark me-2' style={{padding:"8px 30px"}}>Add to cart</button>
                <span style={{border:"1px solid #D4D4D8",borderRadius:"5px",padding:"6px"}}><Favorite style={{color:"#52525B"}} /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart2
