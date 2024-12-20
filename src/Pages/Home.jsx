import React from 'react'
import slide1 from '../Components/Images/slide-01.jpg'
import slide2 from '../Components/Images/slide-02.jpg'
import slide3 from '../Components/Images/slide-03.jpg'
import banner1 from '../Components/Images/banner-01.jpg'
import banner2 from '../Components/Images/banner-02.jpg'
import banner3 from '../Components/Images/banner-03.jpg'
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

function Home() {
  return (
    <div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active d" data-bs-interval="10000">
            <img className='' src={slide1} style={{ width: "100%" }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Women Collection 2025</h5>
              <p>New Spring Season</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img className='' src={slide2} style={{ width: "100%" }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Men Collection 2025</h5>
              <p>New Spring Season</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className='' src={slide3} style={{ width: "100%" }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Shoes Collection</h5>
              <p>Men and Women</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className='container mt-5 mb-5'>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <div className='d-flex border border-3 p-3'>
              <div>
                <h4 className='mt-3'>Women</h4>
                <h5 className='mt-3'>Spring</h5>
              </div>
              <div>
                <img className='align-self-end' src={banner1} style={{ width: "97%" }} alt="" />
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='d-flex border border-3 p-3'>
              <div>
                <h4 className='mt-3'>Men</h4>
                <h5 className='mt-3'>Spring</h5>
              </div>
              <div>
                <img className='' src={banner2} style={{ width: "88%" }} alt="" />
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-5'>
            <div className='d-flex border border-3 p-3'>
              <div>
                <h4 className='mt-3'>Accocireis</h4>
                <h5 className='mt-3'>Brand</h5>
              </div>
              <div>
                <img className='' src={banner3} style={{ width: "108%" }} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='text-center fw-bold'>
          <h1 className='mb-5'>PRODUCTS OVERVIEW</h1>
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
          <div className=" ms-auto me-5 mb-5"><Link className="btn btn-success py-2 px-5 mt-5 text-white rounded-pill" to="/shop"> Load More</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Home