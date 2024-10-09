import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ronaldonike from '../unisole/Images/ronaldo_Nike.png'
import ronaldo_logo_nike from '../unisole/Images/ronaldo_logo_nike.png'
import kohli_puma from '../unisole/Images/kohli_puma.png'
import kohli_puma_logo from '../unisole/Images/kohli_puma_logo.png'
import jordan from '../unisole/Images/jordan.png'
import jordan_logo from '../unisole/Images/jordan_logo.png'
import varun_reebook from '../unisole/Images/varun_reebook.png'
import varun_reebook_logo from '../unisole/Images/varun_reebook_logo.png'
import frame1 from '../unisole/Images/Frame 1.png'
import frame2 from '../unisole/Images/Frame 2.png'
import frame3 from '../unisole/Images/Frame 3.png'
import frame4 from '../unisole/Images/Frame 4.png'
import areyoureadyimg from '../unisole/Images/areyouready.png'
import _cutomer_img1 from '../unisole/Images/_customer_img1.png'
import _cutomer_img2 from '../unisole/Images/_customer_img2.png'
import rating45 from '../unisole/Images/Rating5.png'
import purple_bg_girl from '../unisole/Images/purple_bg_girl.png'

function Topbrands() {
    return (
        <>
            <div>
                <div className="w-100">
                    <div className="w-1140 m-auto">
                        <div className='d-flex align-item-center mb-5'>
                            <div className="w-50">
                                <p className='fs-2 inter fw-bold'>We provide best customer experiences</p>
                            </div>
                            <div className="w-50 ps-3 border border-2 border-dark border-start-1 border-end-0 border-top-0 border-bottom-0">
                                <p className='m-0 h-112 line-h-112'>We ensure our customers have the best shopping experience</p>
                            </div>
                        </div>
                        <div className='d-flex gap-5 mb-5'>
                            <div className="w-25" style={{ width: "291px", height: "125px" }}>
                                <div>
                                    <img src={frame1} alt="" style={{ width: "40px", height: "35px" }} />
                                    <p className='fw-bold inter'>Original Products</p>
                                    <p className='inter'>We provide money back guarantee if the product are not original.</p>
                                </div>
                            </div>
                            <div className="w-25">
                                <div>
                                    <img src={frame2} alt="" style={{ width: "40px", height: "35px" }} />
                                    <p className='fw-bold inter'>Satisfaction Guarantee</p>
                                    <p className='inter'>Exchange the product you’ve purchased if doesn’t fit on you.</p>
                                </div>
                            </div>
                            <div className="w-25">
                                <div>
                                    <img src={frame3} alt="" style={{ width: "40px", height: "35px" }} />
                                    <p className='fw-bold inter'>New Arrival Everyday</p>
                                    <p className='inter'>We updates our collection almost everyday.</p>
                                </div>
                            </div>
                            <div className="w-25">
                                <div>
                                    <img src={frame4} alt="" style={{ width: "40px", height: "35px" }} />
                                    <p className='fw-bold inter'>Fast & Free Shipping</p>
                                    <p className='inter'>We offer fast and free shipping for our loyal customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* cards */}
            <div className="container-fluid">
                <div className="w-1140 m-auto">
                    <p className='reem-kufi fs-3 text-decoration-underline mt-3'>Explore Top Brands</p>
                    <CardGroup className='d-flex gap-3'>
                        <Card className='d-flex flex-column topbrandcard px-5 py-2'>
                            <div className="d-flex justify-content-center">
                                <Card.Img variant="top" src={ronaldonike} />
                            </div>
                            <Card.Body>
                                <Card.Title className='topcardtitleimg d-flex justify-content-center'>
                                    <img src={ronaldo_logo_nike} alt="" />
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className='d-flex flex-column topbrandcard px-5 py-2'>
                            <div className="d-flex justify-content-center">
                                <Card.Img variant="top" src={kohli_puma} />
                            </div>
                            <Card.Body>
                                <Card.Title className='topcardtitleimg d-flex justify-content-center topcardtitleset'>
                                    <img src={kohli_puma_logo} alt="" />
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className='d-flex flex-column topbrandcard px-5 py-2'>
                            <div className="d-flex justify-content-center">
                                <Card.Img variant="top" src={jordan} />
                            </div>
                            <Card.Body>
                                <Card.Title className='topcardtitleimg d-flex justify-content-center topcardtitleset'>
                                    <img src={jordan_logo} alt="" />
                                </Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className='d-flex flex-column topbrandcard px-5 py-2'>
                            <div className="d-flex justify-content-center">
                                <Card.Img variant="top" src={varun_reebook} />
                            </div>
                            <Card.Body>
                                <Card.Title className='topcardtitleimg d-flex justify-content-center'>
                                    <img src={varun_reebook_logo} alt="" />
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </div>

            {/* image leg girl */}
            <div className='w-100 position-relative'>
                <div className="w-1140 m-auto" style={{ boxSizing: "border-box" }}>
                    <img src={areyoureadyimg} alt="" className='w-100 h-auto margin-top--118 margin-bottom--250' />
                    <div className='btn position-absolute are-you-ready-btn fs-3 fw-700'>Explore
                        {/* <div className="btn fs-3 p-0 inter fw-700">Explore</div> */}
                    </div>
                </div>
            </div>
            {/* customer review */}
            <div className="w-100 mb-5" style={{ marginTop: "-80px" }}>
                <div className="container">
                    <div className="m-auto">
                        <div style={{ height: "62px", width: "552px", display: "flex", margin: "auto", justifyContent: 'center' }} className='mb-5' >
                            <p style={{ lineHeight: "62.5px", marginRight: "10px" }} className='fw-bold'>―</p>
                            <p style={{ fontSize: "45px", fontWeight: "500", lineHeight: "62.5px" }}>Customer Review</p>
                            <p style={{ lineHeight: "68.5px", marginLeft: "10px" }} className='fw-bold'>―</p>
                        </div>
                        <div className='d-flex gap-5'>
                            <div className="w-50" style={{ backgroundColor: "#F3F3F3", border: "2px", borderRadius: "25px" }}>
                                <div style={{ width: "499.54px", padding: "30px 0px" }} className='m-auto d-flex align-items-center gap-3'>
                                    <div style={{ width: "166px", height: "auto", backgroundColor: "#D9D9D9", borderRadius: "10px" }} className='d-flex'>
                                        <img src={_cutomer_img1} alt="" className='img-fluid' />
                                    </div>
                                    {/* width: "346px" */}
                                    <div style={{ height: "112px" }}>
                                        <p className='poppins-medium-italic mw-100 fs-3 m-0'>Ava Joshi</p>
                                        <img src={rating45} alt="" className='w-25 h-auto mb-2' />
                                        <p className='poppins-medium-italic fw-normal m-0'>Pretty good. Nice colour. An excellent product from crocs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-50" style={{ backgroundColor: "#F3F3F3", border: "2px", borderRadius: "25px" }}>
                                <div style={{ width: "499.54px", padding: "30px 0px" }} className='m-auto d-flex align-items-center gap-3'>
                                    <div style={{ width: "166px", height: "169px", backgroundColor: "#D9D9D9", borderRadius: "10px" }} className='d-flex'>
                                        <img src={_cutomer_img2} alt="" className='img-fluid' />
                                    </div>
                                    {/* width: "346px" */}
                                    <div style={{ height: "112px" }}>
                                        <p className='poppins-medium-italic mw-100 fs-3 m-0'>Otis bisnoy</p>
                                        <img src={rating45} alt="" className='w-25 h-auto mb-2' />
                                        <p className='poppins-medium-italic fw-normal m-0'>Valuable Product. Chipest Prices. Only Brand Name Unisole.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 35% off */}
            <div className='container-fluid p-0 d-flex mb-5'>
                <div className="w-50">
                    <img src={purple_bg_girl} alt="" className='w-100' />
                </div>
                <div className="w-50 inter" style={{ padding: "66px 75px 20px 75px", letterSpacing: "4%", backgroundColor: "black", borderRadius: "0px 10px 10px 0px" }}>
                    <p className='text-white inter' style={{ fontSize: "36px" }}>35% off only this friday and get special gift</p>
                    <div className="btn bg-light border border-2 border-light">
                        <div className="d-flex">
                            <p className='m-0 me-4' style={{ fontWeight: "600" }}>Grab it now</p>
                            <p className='m-0 fw-bold'>⟶</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* email checking */}
            <div className="container-fluid mb-4">
                <div style={{ width: "750px" }} className='m-auto'>
                    <h2 align="center">Subscribe to our newsletter to get updates  <br /> to our latest collections</h2>
                    <p className='text-center' style={{ fontWeight: "600", opacity: "60%" }}>Get 20% off on your first order just by subscribing to our newslatter</p>
                    <div className='d-flex justify-content-center mb-3'>
                        <input type="email" name="" id="" placeholder='Enter your email' className='me-2' style={{ border: "1px solid #D9D9D9", borderRadius: "10px", padding: "4px 20px", width: "360px", paddingRight: "0px" }} />
                        <button className='bg-dark text-white inter' style={{ borderRadius: "10px", fontSize: "18px", padding: "0px 18px" }}>Subscribe</button>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <p className='text-center inter' style={{ fontWeight: "600", opacity: "80%" }}>You will be able to unsubscribe at any time. <br /> Read our Privacy Policy <font className="inter text-decoration-underline" style={{ color: "black" }} >here</font></p>
                        {/* <p>here</p> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Topbrands;