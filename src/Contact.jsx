import React from 'react'

export default function Contact() {
  return (
    <div>
    <section className='Contact mt-5 mb-5'>
    <div className='container justify-content-center align-items-center d-flex flex-column'>
    <h1 className=' fw-bold color-db heading-text mt-5'>CONTACT ME
    </h1>
    <div className='divider d-flex align-items-center'>
        <div className='divider-line bg-darkBlue rounded devide-left me-4'></div>
        <div className='divider-icon'>
        <svg className="svg-inline--fa stars color-db fa-star " aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
        </div>
        <div className='divider-line bg-darkBlue  rounded devide-right ms-4'></div>
        </div>
        <form className='col-md-6'>
        <div className="mb-3 mt-5 ">
        <input  className="form-control form-control-lg border-0 border-bottom rounded-0 fs-4 mb-3 p-4 text-black-50 outline-0" type="text" placeholder="Name" aria-label=".form-control-lg example"/>
        <input  className="form-control form-control-lg  border-0 border-bottom rounded-0 fs-4 mb-3 p-4 outline-0" type="text" placeholder="Email Address" aria-label=".form-control-lg example"/>
        <input  className="form-control form-control-lg  border-0 border-bottom rounded-0 fs-4 mb-3 p-4 outline-0" type="text" placeholder="Phone Number" aria-label=".form-control-lg example"/>
        <textarea  className="form-control form-control-lg  border-0 border-bottom rounded-0 fs-4 mb-3 p-4 outline-0 " rows="5" type="text" placeholder="Message" aria-label=".form-control-lg example"/>
        <button className="btn btn-green mt-3 btn-xl py-2 px-5" id="sendMessageButton" type="submit">Send</button>
        </div>
      </form>


        </div>
        </section>






   
    
    </div>
  )
}
