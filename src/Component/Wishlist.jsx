import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const Wishlist = (props) => {
  return (
    <div>
      <div className="conatiner-fluid">
        <div className="container">
          <div style={{ width: "auto" }}>
            <div style={{ backgroundColor: "#f5f5f5" }}>
              <div style={{ width: "100%" }} className='position-relative d-flex justify-content-center'>
                <img src={props.wslist} alt="" className='' />
                <span className='position-absolute' style={{ top: "7%", right: "7%", backgroundColor: "white", borderRadius: "50%" }}>{props.icon}</span>
              </div>
              <div className='btn btn-dark d-flex justify-content-center align-items-center' style={{ borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}><FaShoppingCart className='me-2' style={{}} />Add to cart</div>
            </div>
            <div>
              <p style={{fontWeight:"500",fontSize:"16px"}} className='poppins mb-0 mt-2'>{props.txt}</p>
              <div className='d-flex'>
                <span style={{color:"#DB4444",fontWeight:"500",fontSize:"16px",marginBottom:"0px"}} className='me-2 poppins'>{props.price}</span>
                <span className='text-decoration-line-through' style={{opacity:"60%",fontWeight:"500",fontSize:"16px"}}>{props.price2}</span>
              </div>
                <img src={props.star} alt="" className='w-50 h-auto' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist
