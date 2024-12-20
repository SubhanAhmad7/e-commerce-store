import React from 'react'
import p1 from '../Components/Images/product-02.jpg'
import p2 from '../Components/Images/product-03.jpg'
import p3 from '../Components/Images/product-05.jpg'
import p4 from '../Components/Images/product-06.jpg'
import p5 from '../Components/Images/product-07.jpg'
import p6 from '../Components/Images/product-08.jpg'
import p7 from '../Components/Images/product-09.jpg'
import p8 from '../Components/Images/product-10.jpg'
import p9 from '../Components/Images/product-11.jpg'
import p10 from '../Components/Images/product-12.jpg'
import p11 from '../Components/Images/product-13.jpg'
import p12 from '../Components/Images/product-16.jpg'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react';

function Shop() {
  return (
    <div>
      <div className='container mt-5'>
        <div className='d-flex mb-2'>
          <Link className='text-decoration-none text-secondary me-3' to="/shop"><h6>All products</h6></Link>
          <Link className='text-decoration-none text-secondary me-3' to="/shop"><h6>Women</h6></Link>
          <Link className='text-decoration-none text-secondary me-3' to="/shop"><h6>Men</h6></Link>
          <Link className='text-decoration-none text-secondary me-3' to="/shop"><h6>Bag</h6></Link>
          <Link className='text-decoration-none text-secondary me-3' to="/shop"><h6>Watches</h6></Link>
          <Link className='text-decoration-none text-secondary me-3' to="/shop"><h6>Shoes</h6></Link>
          <div className='mx-auto me-0'>
            <Link className='text-decoration-none text-black' to="/search"><Search color='green' />Search</Link>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <div className="card mt-5">
              <img src={p1} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">Herschel supply</p>
                <h6>$16.64</h6>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card mt-5">
              <img src={p2} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">Only Check Trouser</p>
                <h6>$25.50</h6>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card mt-5">
              <img src={p3} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">Front Pocket Jumper</p>
                <h6>$25.50</h6>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card mt-5">
              <img src={p4} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">Vintage Inspired Classic</p>
                <h6>$93.50</h6>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card mt-5">
              <img src={p12} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">Square Neck Back</p>
                <h6>$29.40</h6>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card mt-5">
              <img src={p5} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">Shirt in Stretch Cotton</p>
                <h6>$52.60</h6>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card mt-5">
              <img src={p6} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">Pieces Metallic Printed</p>
                <h6>$18.60</h6>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card mt-5">
              <img src={p7} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">Converse All Star Hi Plimsolls</p>
                <h6>$75.74</h6>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card mt-5">
              <img src={p8} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">Femme T-Shirt In Stripe</p>
                <h6>$25.84</h6>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card mt-5">
              <img src={p9} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">Herschel supply</p>
                <h6>$63.14</h6>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card mt-5">
              <img src={p10} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">Herschel supply</p>
                <h6>$63.34</h6>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card mt-5">
              <img src={p11} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">T-Shirt with Sleeve</p>
                <h6>$40.20</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center ms-auto mb-5 me-5"><Link className="btn btn-success py-2 px-5 mt-5 text-white rounded-pill" to="/shop"> Load More</Link></div>
      </div>
    </div>
  )
}

export default Shop