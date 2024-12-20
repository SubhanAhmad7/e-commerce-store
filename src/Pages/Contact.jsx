import React from 'react'
import { MapPinCheck, Phone, Mail } from 'lucide-react';
import bgi from '../Components/Images/bg.png'


function Contact() {
  return (
    <div>
      <div className='container mt-5 mb-5'>
        <div className='text-center mb-5'>
          <img className='img-fluid mb-5 mt-5'style={{height:"150px"}} src={bgi} alt="" />
          <h1>Contact</h1>
        </div>
        <div className='row'>
          <div className='col-md-6 border border-1 border-gray mb-5'>
            <h5 className='mt-4 text-center'>Send Message</h5>
            <input className='form-control p-2 mt-5' type="email" placeholder='Enter your Email' />
            <input className='form-control mt-3' style={{ height: "120px" }} type="text" placeholder='How can we help you?' />
            <button className='btn btn-success form-control mt-3 mb-3 p-2 rounded-pill '>Submit</button>
          </div>
          <div className='col-md-6 border border-1 border-gray mb-5'>
            <h5 className='mt-4 text-center'><MapPinCheck /> Address</h5>
            <p className="text-center mt-2">Coza Store Center 8th floor, 379 <br /> Hudson St, New York, NY 10018 US</p>
            <h5 className='mt-4 text-center'><Phone /> Let's Talk</h5>
            <p className="text-center mt-2 text-success">+1 800 1236879</p>
            <h5 className='mt-4 text-center'><Mail /> Sale & Support</h5>
            <p className="text-center mt-2 text-success">contact@example.com</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact