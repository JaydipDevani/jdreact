import React from 'react'
import Footer from '../Page/Footer';
import Header from '../Page/Header';


const Ricksupport = () => {
    return (
        <div>
            {/* <Navbar bg="light" data-bs-theme="light" className='d-flex justify-content-between px-4 fw-bold'>
                <div>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                </div>
                <div>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className='fw-bolder fs-5 d-flex align-items-center'>Docs</Nav.Link>
                        <Nav.Link href="#features" className='fw-bolder fs-5 d-flex align-items-center'>About</Nav.Link>
                        <Nav.Link href="#pricing"><button className='fw-bold fs-6 px-2 py-1 font-13 rounded border border-warning bg-light btn-hover'>Support Us</button></Nav.Link>
                    </Nav>
                </div>
            </Navbar> */}
            <Header />

            <div className='pt-4'>
                <div className="center">
                    <h1>Support The Rick and Morty API</h1>
                    <p>
                        <strong>Help to maintain The Rick and Morty API's infrastructure!</strong>
                    </p>
                    <p>
                        If you are using the API for your app, your online tutorials or your coding challenges, please consider supporting us to help keep the project alive
                    </p>
                    <p>
                        We are not getting any money from this and we use our free time to keep the API running and the data up to date. Every contribution, however big or small, is super valuable for our future.
                    </p>
                    <p>Thanks!</p>
                    <div className='mt-2'>
                        <img src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" alt="" className='me-3 buycoffe'/>
                        <img src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png" alt="" className='buycoffe'/>
                    </div>
                </div>
            </div>

            {/* <div className='footer'>
                <div className='footer-1 d-flex justify-content-center'>
                    <ul className='d-flex m-1'>
                        <li><a href="" className='text-gray fw-bolder fs-6'>CHARACTERS : 826</a></li>
                        <li><a href="" className='text-gray fw-bolder fs-6'>LOCATION : 126</a></li>
                        <li><a href="" className='text-gray fw-bolder fs-6'>EPISODES : 51</a></li>
                    </ul>
                </div>
                <div className='d-flex justify-content-center'>
                    <span className='text-gray'>SERVER STATUS</span>
                </div>
                <div></div>
                <div></div>
            </div> */}
            <Footer />
        </div>
    )
}

export default Ricksupport
