import React from 'react'
import './product.css'
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import {BsFillPersonFill } from "react-icons/bs"; 
import {BsCart2 } from "react-icons/bs"
import {BsSuitHeart} from "react-icons/bs";
import  ecom from './image/ecom.PNG';
import  shoe from './image/shoe.png';
import {HiMenu} from "react-icons/hi";
import {CgMenuGridR} from "react-icons/cg";
import p1 from './image/p1.png';
import bag from './image/bag.png';
import bag1 from './image/bag1.png';
import shoe2 from './image/shoe2.png';
import shoe3 from './image/shoe3.png';
import shoe4 from './image/shoe4.png';
import shoe5 from './image/shoe5.png';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import mastercard from './image/mastercard.jpg';
import visa from './image/visa.png';
import wu from './image/wu.png';
import paypal from  './image/paypal.jpg';



function Product() {
  return (
    <div>
       <div className='nav'> 
            <label className='aa'>EN</label> 
            <AiFillCaretDown size={30}/> 
            <label className='ab'>USD</label> 
            <AiFillCaretDown size={30}/> 
            <label className='bc'></label> 
            < BsFillPersonFill size={30}/> 
            <label>My Profile</label> 
            <label className='bc1'></label> 
            <BsCart2 size={30}/> 
            <label className='bc1'>Items</label> 
            <label className='bc2'>$0.00</label> 
            <AiOutlineSearch size={25}/> 
            </div>
            <hr></hr>
     <div >
       <nav>
         <div >
         <div> 
                <label className='a1'></label> 
            <img src={ecom} width='50' height='50'/> 
           <label className='bc3'>E-Comm</label> 
           <label className='bc4'>HOME</label> 
           <label className='bc5'>BAGS</label> 
           <label className='bc5'>SNEAKERS</label> 
           <label className='bc5'>BELT</label> 
           <label className='bc5'>CONTACT</label> 
           </div>
           </div>
       </nav>
     </div>
     <div>
       <div>
         <div  className='title'><p className='di'>Home</p>
         <p>/Hot Deal</p></div>
       </div>
     </div><br/>
     <div className='div'>
       <span className='hot-deal '>
          <p className='nike  ' href='#'>Nike <span className='no'>2</span></p>
          <p className='nike1 ' href='#'>Airmax <span className='no'>48</span></p>
          <p className='nike 'href='#'>Nike <span className='no'>14</span></p>
          <p className='nike' href='#'>Adidas <span className='no'>15</span></p>
          <p className='nike' href='#'>vans <span className='no'>23</span></p>
          <p className='nike' href='#'>All Stars <span className='no'>1</span></p>
          <p className='nike' href='#'>Adidas <span className='no'>95</span></p>
          </span>
         </div>
     <div className='prices-part'>
       <p className='price'>PRICES</p>
       <p className='rang'>Ranger:<span className='ranger'>$13.99-25.99</span></p>
       <input type={'range'}/>
       </div>
       <div className='circlepath'>
         <p className='color'>COLOR </p>
         <div className='c0'>
         <span className='circle'></span>
         <span class="c1"></span>
          <span class="c2"></span>
          <span class="c3"></span>
          <span class="c4"></span>
          <span class="c5"></span></div>
       </div>
       <div className='hot-deal'>
       <p className='nike ' href='#'>Nike <span className='no'>99</span></p>
          <p className='nike1' href='#'>Nike <span className='no'>99</span></p>
          <p className='nike ' href='#'>Adidas <span className='no'>99</span></p>
          <p className='nike ' href='#'>Adidas <span className='no'>99</span></p>
          </div>
          <button className='button'>More</button>
          <div className='banner'>
            <h3 className='text'>Adidas Men Running</h3>
            <h3 className='text1'>Sneakers</h3>
            <p className='text2'>perfomance and design.Taken right to the edge.</p>
            <span className='text3'>SHOP NOW</span>
            </div>
            <div className='imgs'>
            <img className='img' src={shoe} alt='img'/>
            </div>
          <div >
          <nav className='na'>
            <div className='a'>
            <p className='ea'>13 Items</p><br/>
            <p className='ea'>sort By</p>
            <select className='ea' >
    <option >Name</option>
    </select>
    <p className='ea'>Show</p>
  <select>
    <option className='ea'>13</option>
  </select></div>
  <span><CgMenuGridR size={35} className="menu"/><HiMenu size={35} /></span>
  
    </nav>
          </div>
          <div className='grid'>
            <div className='list-grid'>
            <span><img className='im' src={p1} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <span class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </span><br/><br/>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          
          <div className='list-grid'>
            <span><img className='im' src={bag} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t'>Nike Air Max 270 React</p>
            <span class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </span>
  <br/><br/>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          <div className='list-grid'>
            <span><img className='im' src={bag1} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <span class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </span>
  <br/><br/>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          <div className='list-grid'>
            <span><img className='im' src={shoe2} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <span class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </span>
  <br/><br/>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className='list-grid'>
            <span><img className='im' src={shoe3} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <span class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </span>

  <br/><br/>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          <div className='list-grid'>
            <span><img className='im' src={shoe4} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <span class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </span><br/><br/>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          <div className='list-grid'>
            <span><img className='im' src={shoe5} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <span class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </span>
  <br/><br/>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          
          <div className='list-grid'>
            <span><img className='im1' src={shoe5} alt='nike'/><p className='h'>HOT</p></span>
            <span className='ov'><BsSuitHeart size={30} className='heart' /><BsCart2 className='heart' size={30}/></span>
            <p className='t1'>Nike Air Max 270 React</p>
          <p>
          <span class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </span>
          </p>
          <br/><br/>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          <div className='list-grid'>
            <span><img className='im' src={bag} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <span class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </span>
  <br/><br/>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          </div><br/>
          <div >
          <div> 
     <div className='js'> 
         <label className='js1'>1</label> 
         <label className='js2'>2</label> 
         <label className='js3'>3</label> 
         <label className='js2'>4</label> 
         <label className='js2'>5</label> 
     </div> 
 </div>
 </div>
 <br/><br/>
 <div className='footer'>
 <div className='footer1'>
   <div className='foot'>
   <p className='f-t1'><img src={ecom} className='img2'/>E-comm<br/></p>
   <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p><br/></div>
   <div className='foot'>
   <span className='f-t1'>Follow Us</span>
   <p><p className='para1'>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p><FaFacebookF className='facebook' /><FaTwitter className='facebook'/></p></div>
   <div className='foot'>
 <span className='f-t1'>Contact Us</span>
 <br/>
 <p className='para2'>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p></div>
 </div>
 <div className='info-all'>
 <div className='info-part'>
   <label>Information</label>
   <ul>About Us</ul>
   <ul>Information</ul>
   <ul>Privacy Policy</ul>
   <ul>Terms & Conditions</ul>
</div>
<div className='info-part'>
   <label>Service</label>
   <ul>About Us</ul>
   <ul>Information</ul>
   <ul>Privacy Policy</ul>
   <ul>Terms & Conditions</ul>
</div>
<div className='info-part'>
   <label>My Account</label>
   <ul>About Us</ul>
   <ul>Information</ul>
   <ul>Privacy Policy</ul>
   <ul>Terms & Conditions</ul>
</div>
<div className='info-part'>
   <label>Our Offers</label>
   <ul>About Us</ul>
   <ul>Information</ul>
   <ul>Privacy Policy</ul>
   <ul>Terms & Conditions</ul>
</div>
</div>
<hr className='hr'></hr>
<div className='image'>
 <div className='copyri8'>© 2018 Ecommerce theme by www.bisenbaev.com
  </div>
  <div>
    <div>
     <img src={wu}  className='size'/>
     <img src={mastercard}  className='size1'/>
     <img src={paypal}  className='size2'/>
     <img src={visa}  className='size3'/>
     </div></div>

   </div>
   
 </div> 
 

       
      
    </div>
  )
}

export default Product