import React from 'react'
import './product.css'
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

const handleclick = ()=>{
   prompt('enter your info')
    }
    return (
    <div>
      
       <div className='nav'> 
       <div className='ab'>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <ul class="navbar-nav">
       <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            EN
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">India</a></li>
            <li><a class="dropdown-item" href="#">USA</a></li>
            <li><a class="dropdown-item" href="#">Uk</a></li>
          </ul>
        </li>
        </ul>
        <ul class="navbar-nav">
       <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle en " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            USD
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">INR</a></li>
            <li><a class="dropdown-item" href="#">Pound</a></li>
            <li><a class="dropdown-item" href="#">ERU</a></li>
          </ul>
        </li>
        </ul>
        </nav> </div>
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
           <a href='#' className='bc4'>HOME</a> 
           <a href='#' className='bc5'>BAGS</a> 
           <a href='#' className='bc5' >SNEAKERS</a> 
           <a href='#' className='bc5'>BELT</a> 
           <a href='#' className='bc5'>CONTACT</a> 
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
          <button className='button'onClick={handleclick} >More</button>
          <div className='banner'>
            <h3 className='text'>Adidas Men Running</h3>
            <h3 className='text1'>Sneakers</h3>
            <p className='text2'>perfomance and design.Taken right to the edge.</p>
            <span className='text3'>SHOP NOW</span>
            </div>
            <div className='imgs'>
            <img className='img' src={shoe} alt='img'/>
            </div>
          <div>
           
          <nav className='na'>
            <div className='a'>
              <div className='item-nav'>
            <p className='ea'>13 Items</p><br/>
            <p className='ea'>sort By</p>
            <div class="btn-group">
  <button type="button" class="btn btn-Light dropdown-toggle name " data-bs-toggle="dropdown" aria-expanded="false">
    NAME
  </button>
    <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Brand</a></li>
    <li><a class="dropdown-item" href="#">shoe</a></li>
    <li><a class="dropdown-item" href="#">Belt</a></li></ul></div>
    <p className='ea'>Show</p>
    <div class="btn-group">
  <button type="button" class="btn btn-Light button1 dropdown-toggle name "  data-bs-toggle="dropdown" aria-expanded="false">
    13
  </button>
    <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">14</a></li>
    <li><a class="dropdown-item" href="#">15</a></li>
    <li><a class="dropdown-item" href="#">16</a></li></ul></div>
    </div>
  </div>
  <span><CgMenuGridR size={35} className="menu"/><HiMenu size={35} /></span>
  </nav>
          </div>
          <div className='grid'>
            <div className='list-grid'>
            <span><img className='im' src={p1} alt='nike'/>
            
            <p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <div class="d-flex justify-content-center">
            <svg width="124" height="16" viewBox="0 0 124 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M68.7921 6.33728L64.5406 9.85925L65.7914 15.5833L61.6604 12.1252L57.2634 15.3993L58.9622 9.73926L54.9961 6.03931L60.1766 5.99927L62.1232 0.438354L63.6264 6.07434L68.7921 6.33728Z" fill="#FFC600"/>
<path d="M41.3409 6.33728L37.0894 9.85925L38.3402 15.5833L34.2092 12.1252L29.8122 15.3993L31.511 9.73926L27.5449 6.03931L32.7254 5.99927L34.672 0.438354L36.1752 6.07434L41.3409 6.33728Z" fill="#FFC600"/>
<path d="M13.8922 6.33728L9.64072 9.85925L10.8915 15.5833L6.76051 12.1252L2.36348 15.3993L4.06228 9.73926L0.0961914 6.03931L5.27665 5.99927L7.22331 0.438354L8.7265 6.07434L13.8922 6.33728Z" fill="#FFC600"/>
<path d="M96.2418 6.33728L91.9904 9.85925L93.2411 15.5833L89.1102 12.1252L84.7131 15.3993L86.4119 9.73926L82.4458 6.03931L87.6263 5.99927L89.5729 0.438354L91.0761 6.07434L96.2418 6.33728Z" fill="#FFC600"/>
<path d="M123.692 6.33728L119.441 9.85925L120.692 15.5833L116.561 12.1252L112.164 15.3993L113.863 9.73926L109.896 6.03931L115.077 5.99927L117.024 0.438354L118.527 6.07434L123.692 6.33728Z" fill="#C1C8CE"/>
</svg></div>
  <div className='flex pt-3'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          
          <div className='list-grid'>
            <span><img className='im' src={bag} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <div class="d-flex justify-content-center">
            <svg width="124" height="16" viewBox="0 0 124 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M68.7921 6.33728L64.5406 9.85925L65.7914 15.5833L61.6604 12.1252L57.2634 15.3993L58.9622 9.73926L54.9961 6.03931L60.1766 5.99927L62.1232 0.438354L63.6264 6.07434L68.7921 6.33728Z" fill="#FFC600"/>
<path d="M41.3409 6.33728L37.0894 9.85925L38.3402 15.5833L34.2092 12.1252L29.8122 15.3993L31.511 9.73926L27.5449 6.03931L32.7254 5.99927L34.672 0.438354L36.1752 6.07434L41.3409 6.33728Z" fill="#FFC600"/>
<path d="M13.8922 6.33728L9.64072 9.85925L10.8915 15.5833L6.76051 12.1252L2.36348 15.3993L4.06228 9.73926L0.0961914 6.03931L5.27665 5.99927L7.22331 0.438354L8.7265 6.07434L13.8922 6.33728Z" fill="#FFC600"/>
<path d="M96.2418 6.33728L91.9904 9.85925L93.2411 15.5833L89.1102 12.1252L84.7131 15.3993L86.4119 9.73926L82.4458 6.03931L87.6263 5.99927L89.5729 0.438354L91.0761 6.07434L96.2418 6.33728Z" fill="#FFC600"/>
<path d="M123.692 6.33728L119.441 9.85925L120.692 15.5833L116.561 12.1252L112.164 15.3993L113.863 9.73926L109.896 6.03931L115.077 5.99927L117.024 0.438354L118.527 6.07434L123.692 6.33728Z" fill="#C1C8CE"/>
</svg></div>
 
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          <div className='list-grid'>
            <span><img className='im' src={bag1} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <div class="d-flex justify-content-center">
            <svg width="124" height="16" viewBox="0 0 124 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M68.7921 6.33728L64.5406 9.85925L65.7914 15.5833L61.6604 12.1252L57.2634 15.3993L58.9622 9.73926L54.9961 6.03931L60.1766 5.99927L62.1232 0.438354L63.6264 6.07434L68.7921 6.33728Z" fill="#FFC600"/>
<path d="M41.3409 6.33728L37.0894 9.85925L38.3402 15.5833L34.2092 12.1252L29.8122 15.3993L31.511 9.73926L27.5449 6.03931L32.7254 5.99927L34.672 0.438354L36.1752 6.07434L41.3409 6.33728Z" fill="#FFC600"/>
<path d="M13.8922 6.33728L9.64072 9.85925L10.8915 15.5833L6.76051 12.1252L2.36348 15.3993L4.06228 9.73926L0.0961914 6.03931L5.27665 5.99927L7.22331 0.438354L8.7265 6.07434L13.8922 6.33728Z" fill="#FFC600"/>
<path d="M96.2418 6.33728L91.9904 9.85925L93.2411 15.5833L89.1102 12.1252L84.7131 15.3993L86.4119 9.73926L82.4458 6.03931L87.6263 5.99927L89.5729 0.438354L91.0761 6.07434L96.2418 6.33728Z" fill="#FFC600"/>
<path d="M123.692 6.33728L119.441 9.85925L120.692 15.5833L116.561 12.1252L112.164 15.3993L113.863 9.73926L109.896 6.03931L115.077 5.99927L117.024 0.438354L118.527 6.07434L123.692 6.33728Z" fill="#C1C8CE"/>
</svg></div>
  <br/><br/>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          <div className='list-grid'>
            <span><img className='im' src={shoe2} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <div class="d-flex justify-content-center">
            <svg width="124" height="16" viewBox="0 0 124 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M68.7921 6.33728L64.5406 9.85925L65.7914 15.5833L61.6604 12.1252L57.2634 15.3993L58.9622 9.73926L54.9961 6.03931L60.1766 5.99927L62.1232 0.438354L63.6264 6.07434L68.7921 6.33728Z" fill="#FFC600"/>
<path d="M41.3409 6.33728L37.0894 9.85925L38.3402 15.5833L34.2092 12.1252L29.8122 15.3993L31.511 9.73926L27.5449 6.03931L32.7254 5.99927L34.672 0.438354L36.1752 6.07434L41.3409 6.33728Z" fill="#FFC600"/>
<path d="M13.8922 6.33728L9.64072 9.85925L10.8915 15.5833L6.76051 12.1252L2.36348 15.3993L4.06228 9.73926L0.0961914 6.03931L5.27665 5.99927L7.22331 0.438354L8.7265 6.07434L13.8922 6.33728Z" fill="#FFC600"/>
<path d="M96.2418 6.33728L91.9904 9.85925L93.2411 15.5833L89.1102 12.1252L84.7131 15.3993L86.4119 9.73926L82.4458 6.03931L87.6263 5.99927L89.5729 0.438354L91.0761 6.07434L96.2418 6.33728Z" fill="#FFC600"/>
<path d="M123.692 6.33728L119.441 9.85925L120.692 15.5833L116.561 12.1252L112.164 15.3993L113.863 9.73926L109.896 6.03931L115.077 5.99927L117.024 0.438354L118.527 6.07434L123.692 6.33728Z" fill="#C1C8CE"/>
</svg></div>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          
          <div className='list-grid'>
            <span><img className='im' src={shoe3} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <div class="d-flex justify-content-center">
            <svg width="124" height="16" viewBox="0 0 124 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M68.7921 6.33728L64.5406 9.85925L65.7914 15.5833L61.6604 12.1252L57.2634 15.3993L58.9622 9.73926L54.9961 6.03931L60.1766 5.99927L62.1232 0.438354L63.6264 6.07434L68.7921 6.33728Z" fill="#FFC600"/>
<path d="M41.3409 6.33728L37.0894 9.85925L38.3402 15.5833L34.2092 12.1252L29.8122 15.3993L31.511 9.73926L27.5449 6.03931L32.7254 5.99927L34.672 0.438354L36.1752 6.07434L41.3409 6.33728Z" fill="#FFC600"/>
<path d="M13.8922 6.33728L9.64072 9.85925L10.8915 15.5833L6.76051 12.1252L2.36348 15.3993L4.06228 9.73926L0.0961914 6.03931L5.27665 5.99927L7.22331 0.438354L8.7265 6.07434L13.8922 6.33728Z" fill="#FFC600"/>
<path d="M96.2418 6.33728L91.9904 9.85925L93.2411 15.5833L89.1102 12.1252L84.7131 15.3993L86.4119 9.73926L82.4458 6.03931L87.6263 5.99927L89.5729 0.438354L91.0761 6.07434L96.2418 6.33728Z" fill="#FFC600"/>
<path d="M123.692 6.33728L119.441 9.85925L120.692 15.5833L116.561 12.1252L112.164 15.3993L113.863 9.73926L109.896 6.03931L115.077 5.99927L117.024 0.438354L118.527 6.07434L123.692 6.33728Z" fill="#C1C8CE"/>
</svg></div>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          <div className='list-grid'>
            <span><img className='im' src={shoe4} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <div class="d-flex justify-content-center">
            <svg width="124" height="16" viewBox="0 0 124 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M68.7921 6.33728L64.5406 9.85925L65.7914 15.5833L61.6604 12.1252L57.2634 15.3993L58.9622 9.73926L54.9961 6.03931L60.1766 5.99927L62.1232 0.438354L63.6264 6.07434L68.7921 6.33728Z" fill="#FFC600"/>
<path d="M41.3409 6.33728L37.0894 9.85925L38.3402 15.5833L34.2092 12.1252L29.8122 15.3993L31.511 9.73926L27.5449 6.03931L32.7254 5.99927L34.672 0.438354L36.1752 6.07434L41.3409 6.33728Z" fill="#FFC600"/>
<path d="M13.8922 6.33728L9.64072 9.85925L10.8915 15.5833L6.76051 12.1252L2.36348 15.3993L4.06228 9.73926L0.0961914 6.03931L5.27665 5.99927L7.22331 0.438354L8.7265 6.07434L13.8922 6.33728Z" fill="#FFC600"/>
<path d="M96.2418 6.33728L91.9904 9.85925L93.2411 15.5833L89.1102 12.1252L84.7131 15.3993L86.4119 9.73926L82.4458 6.03931L87.6263 5.99927L89.5729 0.438354L91.0761 6.07434L96.2418 6.33728Z" fill="#FFC600"/>
<path d="M123.692 6.33728L119.441 9.85925L120.692 15.5833L116.561 12.1252L112.164 15.3993L113.863 9.73926L109.896 6.03931L115.077 5.99927L117.024 0.438354L118.527 6.07434L123.692 6.33728Z" fill="#C1C8CE"/>
</svg></div>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          <div className='list-grid'>
            <span><img className='im' src={shoe5} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <div class="d-flex justify-content-center">
            <svg width="124" height="16" viewBox="0 0 124 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M68.7921 6.33728L64.5406 9.85925L65.7914 15.5833L61.6604 12.1252L57.2634 15.3993L58.9622 9.73926L54.9961 6.03931L60.1766 5.99927L62.1232 0.438354L63.6264 6.07434L68.7921 6.33728Z" fill="#FFC600"/>
<path d="M41.3409 6.33728L37.0894 9.85925L38.3402 15.5833L34.2092 12.1252L29.8122 15.3993L31.511 9.73926L27.5449 6.03931L32.7254 5.99927L34.672 0.438354L36.1752 6.07434L41.3409 6.33728Z" fill="#FFC600"/>
<path d="M13.8922 6.33728L9.64072 9.85925L10.8915 15.5833L6.76051 12.1252L2.36348 15.3993L4.06228 9.73926L0.0961914 6.03931L5.27665 5.99927L7.22331 0.438354L8.7265 6.07434L13.8922 6.33728Z" fill="#FFC600"/>
<path d="M96.2418 6.33728L91.9904 9.85925L93.2411 15.5833L89.1102 12.1252L84.7131 15.3993L86.4119 9.73926L82.4458 6.03931L87.6263 5.99927L89.5729 0.438354L91.0761 6.07434L96.2418 6.33728Z" fill="#FFC600"/>
<path d="M123.692 6.33728L119.441 9.85925L120.692 15.5833L116.561 12.1252L112.164 15.3993L113.863 9.73926L109.896 6.03931L115.077 5.99927L117.024 0.438354L118.527 6.07434L123.692 6.33728Z" fill="#C1C8CE"/>
</svg></div>
 <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          
          <div className='list-grid'>
            <span><img className='im1' src={shoe5} alt='nike'/><p className='h'>HOT</p></span>
            <span className='ov'><BsSuitHeart size={30} className='heart' /><BsCart2 className='heart' size={30}/></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <div class="d-flex justify-content-center">
          <svg width="124" height="16" viewBox="0 0 124 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M68.7921 6.33728L64.5406 9.85925L65.7914 15.5833L61.6604 12.1252L57.2634 15.3993L58.9622 9.73926L54.9961 6.03931L60.1766 5.99927L62.1232 0.438354L63.6264 6.07434L68.7921 6.33728Z" fill="#FFC600"/>
<path d="M41.3409 6.33728L37.0894 9.85925L38.3402 15.5833L34.2092 12.1252L29.8122 15.3993L31.511 9.73926L27.5449 6.03931L32.7254 5.99927L34.672 0.438354L36.1752 6.07434L41.3409 6.33728Z" fill="#FFC600"/>
<path d="M13.8922 6.33728L9.64072 9.85925L10.8915 15.5833L6.76051 12.1252L2.36348 15.3993L4.06228 9.73926L0.0961914 6.03931L5.27665 5.99927L7.22331 0.438354L8.7265 6.07434L13.8922 6.33728Z" fill="#FFC600"/>
<path d="M96.2418 6.33728L91.9904 9.85925L93.2411 15.5833L89.1102 12.1252L84.7131 15.3993L86.4119 9.73926L82.4458 6.03931L87.6263 5.99927L89.5729 0.438354L91.0761 6.07434L96.2418 6.33728Z" fill="#FFC600"/>
<path d="M123.692 6.33728L119.441 9.85925L120.692 15.5833L116.561 12.1252L112.164 15.3993L113.863 9.73926L109.896 6.03931L115.077 5.99927L117.024 0.438354L118.527 6.07434L123.692 6.33728Z" fill="#C1C8CE"/>
</svg></div>
  <div className='flex'>
    <p className='price'>$299,43</p> <p className='p1'>$534,33</p><p className='p2'>24% Off</p></div>
          </div>
          <div className='list-grid'>
            <span><img className='im' src={bag} alt='nike'/><p className='h'>HOT</p></span>
            <p className='t1'>Nike Air Max 270 React</p>
            <div class="d-flex justify-content-center">
            <svg width="124" height="16" viewBox="0 0 124 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M68.7921 6.33728L64.5406 9.85925L65.7914 15.5833L61.6604 12.1252L57.2634 15.3993L58.9622 9.73926L54.9961 6.03931L60.1766 5.99927L62.1232 0.438354L63.6264 6.07434L68.7921 6.33728Z" fill="#FFC600"/>
<path d="M41.3409 6.33728L37.0894 9.85925L38.3402 15.5833L34.2092 12.1252L29.8122 15.3993L31.511 9.73926L27.5449 6.03931L32.7254 5.99927L34.672 0.438354L36.1752 6.07434L41.3409 6.33728Z" fill="#FFC600"/>
<path d="M13.8922 6.33728L9.64072 9.85925L10.8915 15.5833L6.76051 12.1252L2.36348 15.3993L4.06228 9.73926L0.0961914 6.03931L5.27665 5.99927L7.22331 0.438354L8.7265 6.07434L13.8922 6.33728Z" fill="#FFC600"/>
<path d="M96.2418 6.33728L91.9904 9.85925L93.2411 15.5833L89.1102 12.1252L84.7131 15.3993L86.4119 9.73926L82.4458 6.03931L87.6263 5.99927L89.5729 0.438354L91.0761 6.07434L96.2418 6.33728Z" fill="#FFC600"/>
<path d="M123.692 6.33728L119.441 9.85925L120.692 15.5833L116.561 12.1252L112.164 15.3993L113.863 9.73926L109.896 6.03931L115.077 5.99927L117.024 0.438354L118.527 6.07434L123.692 6.33728Z" fill="#C1C8CE"/>
</svg></div>
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