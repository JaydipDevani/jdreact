import './App.css';
import Card from './Component/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Allreactcomponent from './Component/Allreactcomponent';
import Rickandmotry from './Component/Rickandmotry';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
// import Home from './Page/Home';
// import Contact from './Page/Contact';
import About from './Page/About';
import Ricksupport from './Component/Ricksupport';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Usestate from './Page/Usestate';
import Flyio from './Component/Flyio';
import Flyheader from './Page/Flyheader';
import Flyfooter from './Page/Flyfooter';
import BestShoes from './unisole/BestShoes';
// import Slider1 from './unisole/Slider1';
import Allbrand from './unisole/Allbrand';
import Sthos_sek from './unisole/Sthos_sek';
import Uni_footer from './unisole/Uni_footer';
import Sale20pr from './unisole/Sale20pr';
import Signin_up from './unisole/Signin_up';
import Wishlist from './Component/Wishlist';
import Cart2 from './unisole/Cart2';
import Billing from './unisole/Billing';
import Addtocart from './unisole/Addtocart';

// images
import img1 from './unisole/Images/best of shoes 1.png'
import ratting1 from './unisole/Images/Rating.png'
import img2 from './unisole/Images/best of shoes 2.png'
import ratting5 from './unisole/Images/Rating5.png'
import img3 from './unisole/Images/best of shoes 3.png'
import ratting2 from './unisole/Images/Rating2.png'
import img4 from './unisole/Images/best of shoes 4.png'
import img5 from './unisole/Images/best of shoes 5.png'
import img6 from './unisole/Images/best of shoes 6.png'
import slp1 from './unisole/Images/best of slipper 1.png'
import slp2 from './unisole/Images/best of slipper 2.png'
import slp3 from './unisole/Images/best of slipper 3.png'
import slp4 from './unisole/Images/best of slipper 4.png'
import slp5 from './unisole/Images/best of slipper 5.png'
import slp6 from './unisole/Images/best of slipper 6.png'
import mjd1 from './unisole/Images/best of mojdi 1.png'
import mjd2 from './unisole/Images/best of mojdi 2.png'
import mjd3 from './unisole/Images/best of mojdi 3.png'
import mjd4 from './unisole/Images/best of mojdi 4.png'
import mjd5 from './unisole/Images/best of mojdi 5.png'
import mjd6 from './unisole/Images/best of mojdi 6.png'
import brd1 from './unisole/Images/nike.png'
import brd2 from './unisole/Images/puma.png'
import brd3 from './unisole/Images/reebook.png'
import brd4 from './unisole/Images/NB.png'
import brd5 from './unisole/Images/fila.png'
import brd6 from './unisole/Images/adidas.png'
import brd7 from './unisole/Images/asics.png'
import sli1 from './unisole/Images/slider - 1.png'
import sathos from './unisole/Images/sathos_sek.png'
import sale20 from './unisole/Images/shoesale20.png'
import mojdisale20 from './unisole/Images/mojdisale20.png'
import slippersale20 from './unisole/Images/slippersale20.png'
import crocssale20 from './unisole/Images/crocssale20.png'
import mojdisale30 from './unisole/Images/mojdisale30.png'
import shoessale30 from './unisole/Images/shoessale30.png'
import slippersale30 from './unisole/Images/slippersale30.png'
import crocssale30 from './unisole/Images/crocssale30.png'
import wh_shoe1 from './unisole/Images/wh_shoes1.png'
import wh_shoe2 from './unisole/Images/wh_shoes2.png'
import wh_shoe3 from './unisole/Images/wh_shoes3.png'
import wh_shoe4 from './unisole/Images/wh_shoes4.png'
import wh_shoe5 from './unisole/Images/wh_shoes5.png'
import wh_shoe6 from './unisole/Images/wh_shoes6.png'
import wh_shoe7 from './unisole/Images/wh_shoes7.png'
import wh_shoe8 from './unisole/Images/wh_shoes8.png'
import wh_shoe9 from './unisole/Images/wh_shoes9.png'
import wh_shoe10 from './unisole/Images/wh_shoes10.png'
import wh_shoe11 from './unisole/Images/wh_shoes11.png'
import wh_shoe12 from './unisole/Images/wh_shoes12.png'
import star5 from './unisole/Images/5star_65.png'
import cartimg1 from './unisole/Images/cart2_img1.png';
import cartimg2 from './unisole/Images/cart2_img2.png';
import cartimg3 from './unisole/Images/cart2_img3.png';
import cartimg4 from './unisole/Images/cart2_img4.png';
import star5_157 from './unisole/Images/star5_157.png'


// icon
import { FaHeart, FaCartPlus } from "react-icons/fa";
import Topbrands from './unisole/Topbrands';
import styled from '@emotion/styled/macro';
import Dustbin from '@mui/icons-material/DeleteOutlineOutlined';
import Eye from '@mui/icons-material/RemoveRedEyeOutlined';
import Discount from '@mui/icons-material/LocalOffer';

function App() {
  return (
    // <>
    //   <div className="header bgcolor">
    //     <div className="container">
    //       <div className="w-50">
    //         <h1 className='h1'>Gallery</h1>
    //       </div>
    //       <div className="w-50">
    //         <p><font>Home</font> / Gallery</p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="header">
    //     <div className="c-card flex gap">
    //         <Card cardimage="https://www.cdmi.in/gallery_category/thumbnail/Screen.jpg" cardheading="78th Independence Day Celebrati..."/>
    //         <Card cardimage="https://www.cdmi.in/gallery_category/thumbnail/guru-purnima-360.jpg" cardheading="Guru Purnima - 2024"/>
    //         <Card cardimage="https://www.cdmi.in/gallery_category/thumbnail/thum.jpg" cardheading="Project Fair - 2024"/>
    //         <Card cardimage="https://www.cdmi.in/gallery_category/thumbnail/Untitled-14.jpg" cardheading="Dindoli Opening Ceremony"/>
    //         <Card cardimage="https://www.cdmi.in/gallery_category/thumbnail/sarthana-thumbnail.jpg" cardheading="Sarthana Opening Ceremony"/>
    //         <Card cardimage="https://www.cdmi.in/gallery_category/thumbnail/thumb.jpg" cardheading="Parents Meeting 2024"/>
    //         <Card cardimage="https://www.cdmi.in/gallery_category/thumbnail/new.png" cardheading="BrainBlast Challenge"/>
    //         <Card cardimage="https://www.cdmi.in/gallery_category/thumbnail/sport-24.jpg" cardheading="Sport Mania 2024"/>
    //         <Card cardimage="https://www.cdmi.in/gallery_category/thumbnail/26th-january.jpg" cardheading="26th january 2024"/>
    //     </div>
    //   </div>
    // </>


    // <>
    //   <Allreactcomponent />
    // </>

    // <div>
    //   <Rickandmotry />
    //   {/* <Sixcard jdimg="https://rickandmortyapi.com/api/character/avatar/174.jpeg" name="Albert Einstein" human="Dead - Human" live="Earth (Replace Dimension)" time="A Rickle In Time"/>
    //   <Sixcard jdimg="https://rickandmortyapi.com/api/character/avatar/174.jpeg" name="Albert Einstein" human="Dead - Human" live="Earth (Replace Dimension)" time="A Rickle In Time"/>
    //   <Sixcard jdimg="https://rickandmortyapi.com/api/character/avatar/174.jpeg" name="Albert Einstein" human="Dead - Human" live="Earth (Replace Dimension)" time="A Rickle In Time"/>
    //   <Sixcard jdimg="https://rickandmortyapi.com/api/character/avatar/174.jpeg" name="Albert Einstein" human="Dead - Human" live="Earth (Replace Dimension)" time="A Rickle In Time"/>
    //   <Sixcard jdimg="https://rickandmortyapi.com/api/character/avatar/174.jpeg" name="Albert Einstein" human="Dead - Human" live="Earth (Replace Dimension)" time="A Rickle In Time"/>
    //   <Sixcard jdimg="https://rickandmortyapi.com/api/character/avatar/174.jpeg" name="Albert Einstein" human="Dead - Human" live="Earth (Replace Dimension)" time="A Rickle In Time"/> */}
    // </div>



    // <>
    //   <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/contact">Contact</Link>
    //         </li>
    //       </ul>
    //     </nav>

    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //     <Switch>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/contact">
    //         <Contact />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    // </>

    <>
      {/* <Ricksupport /> */}
      {/* <Rickandmotry /> */}
      {/* <Ricksupport /> */}
      {/* <Router>
        <Switch>
          <Route exact path="/">
               <Rickandmotry />
             </Route>
             <Route path="/about">
               <About />
             </Route>
             <Route path="/ricksupport">
               <Ricksupport />
             </Route>
           </Switch>
      </Router> */}

      <Usestate />


      {/* <Flyio /> */}
      {/* <Flyheader /> */}
      {/* <Flyfooter /> */}

      {/* <BestShoes /> */}
      {/* <div className='w-100'>
        <div className="w-1140 m-auto">
          <p className='reem-kufi fs-3 text-decoration-underline mt-3'>Best of shoes</p>
          <div className="d-flex scroll overflow-auto border border-3 p-3 gap-4">
            <BestShoes shimg={img1} icon={<FaHeart />} icon2={<FaCartPlus />} name="Air Zoom Pegasus 37 Running Shoes" price="₹1,599" ratimg={ratting1} txt="243" />
            <BestShoes shimg={img2} icon={<FaHeart />} icon2={<FaCartPlus />} name="Nike Cosmic Unity Amalgam Men’s Shoes" price="₹4,449" ratimg={ratting5} txt="98" />
            <BestShoes shimg={img3} icon={<FaHeart />} icon2={<FaCartPlus />} name="Nike Men's Shoes Cosmic Unity Amalgam" price="₹1,739" ratimg={ratting2} txt="1,002" />
            <BestShoes shimg={img4} icon={<FaHeart />} icon2={<FaCartPlus />} name="Nike Air Max Sc Running Shoes" price="₹9,500" ratimg={ratting2} txt="1,002" />
            <BestShoes shimg={img5} icon={<FaHeart />} icon2={<FaCartPlus />} name="new balance Men's Propel Running Shoe" price="₹1,500" ratimg={ratting2} txt="1,002" />
            <BestShoes shimg={img6} icon={<FaHeart />} icon2={<FaCartPlus />} name="1500 Sneakers For Men " price="₹2,500" ratimg={ratting2} txt="1,002" />
          </div>
        </div>
      </div> */}

      {/* best of slipper */}
      {/* <div className='w-100'>
        <div className="w-1140 m-auto">
          <p className='reem-kufi fs-3 text-decoration-underline mt-3'>Best of slipper</p>
          <div className="d-flex scroll overflow-auto border border-3 p-3 gap-3">
            <BestShoes shimg={slp1} icon={<FaHeart />} icon2={<FaCartPlus />} name="Mens Reebok Male Drift Flip" price="₹100" ratimg={ratting1} txt="243" />
            <BestShoes shimg={slp2} icon={<FaHeart />} icon2={<FaCartPlus />} name="Reef Men's Flip-Flop" price="₹300" ratimg={ratting5} txt="98" />
            <BestShoes shimg={slp3} icon={<FaHeart />} icon2={<FaCartPlus />} name="Marine Logo Print Sliders" price="₹95" ratimg={ratting2} txt="1,002" />
            <BestShoes shimg={slp4} icon={<FaHeart />} icon2={<FaCartPlus />} name="Nike Air Max Cirro" price="₹9,500" ratimg={ratting2} txt="1,002" />
            <BestShoes shimg={slp5} icon={<FaHeart />} icon2={<FaCartPlus />} name="Adidas men’s Drift Flip" price="₹67" ratimg={ratting2} txt="1,002" />
            <BestShoes shimg={slp6} icon={<FaHeart />} icon2={<FaCartPlus />} name="BMW men’s top Slipper" price="₹100" ratimg={ratting2} txt="1,002" />
          </div>
        </div>
      </div> */}

      {/* Brands */}
      <div className='w-100'>
        <div className="w-1140 m-auto">
          <p className='reem-kufi fs-3 text-decoration-underline mt-3'>Brands</p>
          <marquee behavior="loop" direction="" scrollamount="10" >
            <div className="d-flex p-3 gap-5">
              {/* scroll overflow-auto border border-3  */}
              <Allbrand shimg={brd1} />
              <Allbrand shimg={brd2} />
              <Allbrand shimg={brd3} />
              <Allbrand shimg={brd4} />
              <Allbrand shimg={brd5} />
              <Allbrand shimg={brd6} />
              <Allbrand shimg={brd7} />
            </div>
          </marquee>
        </div>
      </div>

      {/* best of mojdi */}
      {/* <div className='w-100'>
        <div className="w-1140 m-auto">
          <p className='reem-kufi fs-3 text-decoration-underline mt-3'>Best of  Mojdi  ethnic  Shoe</p>
          <div className="d-flex scroll overflow-auto border border-3 p-3 gap-3">
            <BestShoes shimg={mjd1} icon={<FaHeart />} icon2={<FaCartPlus />} name="FAUSTO Men's Ethnic Embroidery Juttis and Mojari" price="₹100" ratimg={ratting1} txt="243" />
            <BestShoes shimg={mjd2} icon={<FaHeart />} icon2={<FaCartPlus />} name="Vellinto Mojaris Ethnic Designer Juttis  For Men" price="₹150" ratimg={ratting5} txt="98" />
            <BestShoes shimg={mjd3} icon={<FaHeart />} icon2={<FaCartPlus />} name="SGS PresentMen Ethnic Designer Juttis Nagras Mojaris" price="₹95" ratimg={ratting2} txt="1,002" />
            <BestShoes shimg={mjd4} icon={<FaHeart />} icon2={<FaCartPlus />} name="House of Pataudi Men Embellished Lightweight Mojaris " price="₹80" ratimg={ratting2} txt="1,002" />
            <BestShoes shimg={mjd5} icon={<FaHeart />} icon2={<FaCartPlus />} name="Red Gold Punjabi Leather Men's Khussa Jutti" price="₹67" ratimg={ratting2} txt="1,002" />
            <BestShoes shimg={mjd6} icon={<FaHeart />} icon2={<FaCartPlus />} name="Maroon Brown Punjabi Leather Men's Khussa Jutti" price="₹100" ratimg={ratting2} txt="1,002" />
          </div>
        </div>
      </div> */}

      {/* <div className="w-100">
        <Sthos_sek sth1={sathos} />
      </div> */}

      {/* <div className="w-100 mb-4">
        <div className="w-1140 m-auto d-flex gap-4">
          <div className="w-50">
            <p className='reem-kufi fs-3 text-decoration-underline mt-3'>Men’s Shoes  20% - 60%</p>
            <div className="h-650 border border-1 rounded py-3 px-5 d-flex justify-content-between flex-wrap">
              <Sale20pr saleimg={sale20} saletxt="Sport Shoes" saleoff="25% off" />
              <Sale20pr saleimg={mojdisale20} saletxt="MACTREE Men's Leather Loafers" saleoff="30% off" />
              <Sale20pr saleimg={slippersale20} saletxt="Nike Offcourt Adjust Men's Slides" saleoff="40% off" />
              <Sale20pr saleimg={crocssale20} saletxt="Men’s Croces" saleoff="60% off" />
            </div>
          </div>

          <div className="w-50">
            <p className='reem-kufi fs-3 text-decoration-underline mt-3'>Women Shoes  30% - 60%</p>
            <div className="w-645 h-650 border border-1 rounded py-3 px-5 d-flex justify-content-between flex-wrap">
              <Sale20pr saleimg={mojdisale30} saletxt="Pink Women's Punjabi Leather Jutti" saleoff="25% off" />
              <Sale20pr saleimg={shoessale30} saletxt="Puma Women's Pink Running Shoes" saleoff="35% off" />
              <Sale20pr saleimg={slippersale30} saletxt="FLITE Women Slipper" saleoff="45% off" />
              <Sale20pr saleimg={crocssale30} saletxt="CROCS Sling Back Clogs For Girls" saleoff="55% off" />
            </div>
          </div>

        </div>
      </div> */}

      <div className="w-100">
        {/* <div className="w-1140 m-auto"> */}
        <div>
          {/* <Topbrands /> */}
        </div>
        {/* </div> */}
      </div>

      {/* <div className='conatiner-fluid'>
          <Signin_up />
        </div> */}

      <div className="container-fluid">
        <div className="container overflow-auto">
          <div className='d-flex align-items-center justify-content-between mb-4'>
            <p className='poppins m-0' style={{ fontWeight: "600", fontSize: "20px" }}>Wishlist (4)</p>
            <button style={{ padding: "10px 30px", border: "1px solid #00000080", borderRadius: "4px", fontSize: "16px", fontWeight: "500", backgroundColor: "white" }}>Move All To Bag</button>
          </div>

          <div className='border border-2 p-1'>
            <div>

            <div className='d-flex justify-content-evenly'>
              <Wishlist wslist={wh_shoe1} icon={<Dustbin />} txt="Air Pegasus 37 Running Shoes" price="₹960" price2={"₹1160"} />
              <Wishlist wslist={wh_shoe2} icon={<Dustbin />} txt="Nike Cosmic Unity Men’s Shoes" price="₹1960" />
              <Wishlist wslist={wh_shoe3} icon={<Dustbin />} txt="Nike Men's Shoes Amalgam" price="₹550" />
              <Wishlist wslist={wh_shoe4} icon={<Dustbin />} txt="Nike Air Max Sc Running Shoes" price="₹750" />
            </div>

            {/* Just For You */}
            <div className="d-flex align-items-center justify-content-between mt-4 mb-5">
              <p style={{ fontWeight: "400", fontSize: "20px", left: "30px" }} className='poppins m-0 just-before'>Just For You</p>
              <button style={{ padding: "10px 30px", border: "1px solid #00000080", borderRadius: "4px", fontSize: "16px", fontWeight: "500", backgroundColor: "white" }}>See All</button>
            </div>
            <div className='d-flex mb-5 justify-content-evenly'>
              <Wishlist wslist={wh_shoe5} icon={<Eye />} txt="Spider-Man, Nike Sneakers" price="₹960" price2={"₹1160"} star={star5} />
              <Wishlist wslist={wh_shoe6} icon={<Eye />} txt="PF Flyers Grounders Hi Shoes" price="₹1160" star={star5} />
              <Wishlist wslist={wh_shoe7} icon={<Eye />} txt="HRX by Hrithik Roshan" price="₹560" star={star5} />
              <Wishlist wslist={wh_shoe8} icon={<Eye />} txt="Mast & Harbour Men Sneakers" price="₹200" star={star5} />
            </div>

            <div className='d-flex mt-4 justify-content-evenly'>
              <Wishlist wslist={wh_shoe9} icon={<Eye />} txt="Sport Shoes" price="₹960" price2={"₹1160"} star={star5} />
              <Wishlist wslist={wh_shoe10} icon={<Eye />} txt="Men Textured Contrast Sneakers" price="₹1160" star={star5} />
              <Wishlist wslist={wh_shoe11} icon={<Eye />} txt="U.S. POLO ASSN. Jogging Shoes" price="₹560" star={star5} />
              <Wishlist wslist={wh_shoe12} icon={<Eye />} txt="X Sneakers for Men" price="₹200" star={star5} />
            </div>
            </div>
          </div>

        </div>
      </div>

        <div>
          <Cart2 shimg1={cartimg1} shimg2={cartimg2} shimg3={cartimg3} shimg4={cartimg4} p="Nike Mens Air Zoom Pegasus 37 Flyease Running Shoe" ratting={star5_157} price="₹163" strike="₹200" dis={<Discount />} discount="Save 30% right now" detail="Product Details:" />
        </div>

        <div className='w-100'>
          <Billing />
        </div>

        <div>
          <Addtocart />
        </div>

      <div>
        <Uni_footer />
      </div>

      {/* <div className="w-100">
        <Slider1 sl1={sli1} />
      </div> */}

    </>
  );
}

export default App;
