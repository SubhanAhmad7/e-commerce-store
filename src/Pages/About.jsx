import React from 'react'
import img from '../Components/Images/about-01.jpg'
import bgi from '../Components/Images/bg.png'
import img2 from '../Components/Images/about-02.jpg'

function About() {
  return (
    <div className='container mt-5'>
      <div className='text-center mb-5'>
        <img className='img-fluid mb-5 mt-5' style={{ height: "150px" }} src={bgi} alt="" />
        <h1>About Us</h1>
      </div>
      <div className='row mb-5'>
        <div className='col-md-8'>
          <div>
            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non <br /> auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. <br /> Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas <br /> varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique <br /> senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas <br /> convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim <br /> dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum <br /> euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit. <br /></p>

            <p className='mt-4'> Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam <br /> aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut <br /> gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam  <br />pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. <br /> Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. <br /></p>

            <p className='mt-4 mb-5'> Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
          </div>
        </div>
        <div className='col-md-4'>
          <img className='mt-4' src={img} alt="" style={{ height: "400px" }} />
        </div>
      </div>
      <div className='row mb-5'>
        <div className='col-md-4'>
          <img className='mt-5 mb-5' src={img2} alt="" style={{ height: "370px" }} />
        </div>
        <div className='col-md-8'>
          <div>
            <h4 className='text-center'>Our Mission</h4>
            <p className='mt-4 ms-5'>Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed <br /> consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac <br />turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida.<br /> Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit <br />egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut<br /> mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum,<br /> nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod.<br /> Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.</p>
            <div>
              <div className='border-3 border-start ms-5'>
                <p className='mt-4 mb-5 ms-5'> Creativity is just connecting things. When you ask creative people how they did <br /> something, they feel a little guilty because they didn't really do it, they just saw <br /> something. It seemed obvious to them after a while. <br />- Steve Job’s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About