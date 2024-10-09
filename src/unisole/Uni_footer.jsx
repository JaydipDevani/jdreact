import React from 'react'
import unisol_logo from './Images/unisol_logo.png'
import mastercard from './Images/Mastercard.png'
import visacard from './Images/Visa.png'
import paypal from './Images/PayPal.png'

const Uni_footer = () => {
    return (
        <div>
            <div className="w-100 p-5 footer-bg-color">
                <div className="w-1140 m-auto border border-2 border-top-0 border-start-0 border-end-0 border-bottom-1 border-dark">
                    <div className="d-flex margin-bottom-110">
                        <div id="w-40" className='margin-right-100'>
                            <img src={unisol_logo} alt="" />
                            <p className='inter'>Specializes in providing high-quality, stylish products for your wardrobe </p>
                        </div>
                        <div id="w-10">
                            <h5 className='text-uppercase inter'>shop</h5>
                            <div>
                                <p style={{ color: '#676767' }} className="m-0">All Collections</p>
                                <p style={{ color: '#676767' }} className="m-0">Winter Edition</p>
                                <p style={{ color: '#676767' }} className="m-0">Discount</p>
                            </div>
                        </div>
                        <div id="w-10">
                            <h5 className='text-uppercase inter'>COMPANY</h5>
                            <div>
                                <p style={{ color: '#676767' }} className="m-0">About Us</p>
                                <p style={{ color: '#676767' }} className="m-0">Contact</p>
                                <p style={{ color: '#676767' }} className="m-0">Affiliates</p>
                            </div>
                        </div>
                        <div id="w-10">
                            <h5 className='text-uppercase inter'>SUPPORT</h5>
                            <div>
                                <p style={{ color: '#676767' }} className="m-0">FAQs</p>
                                <p style={{ color: '#676767' }} className="m-0">Cookie Policy</p>
                                <p style={{ color: '#676767' }} className="m-0">Terms of Use</p>
                            </div>
                        </div>
                        <div id="w-30" className='padding-left-100'>
                            <h5 className='text-uppercase inter'>PAYMENT METHODS</h5>
                            <div id='w-190' className='d-flex justify-content-between'>
                                <img src={mastercard} alt="" className='h-w-2435'/>
                                <img src={visacard} alt="" className='h-w-2435'/>
                                <img src={paypal} alt="" className='h-w-2435'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Uni_footer
