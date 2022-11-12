import React from 'react'
import img from'../src/imgs/cabin.png'
import img2 from'../src/imgs/cake.png'
import img3 from'../src/imgs/circus.png'
import img4 from'../src/imgs/game.png'
import img5 from'../src/imgs/safe.png'
import img6 from'../src/imgs/submarine.png'
export default function Portfolio() {
  return (
    <div>
    <section className='portfolio mt-5 mb-5 pt-5' id='Portfolio'>
    <div className='container justify-content-center align-items-center d-flex flex-column'>
    <h1 className=' fw-bold color-db heading-text'>PORTFOLIO</h1>
    <div className='divider d-flex align-items-center'>
        <div className='divider-line bg-darkBlue rounded devide-left me-4'></div>
        <div className='divider-icon'>
        <svg className="svg-inline--fa stars color-db fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
        </div>
        <div className='divider-line bg-darkBlue  rounded devide-right ms-4'></div>
        </div>
    <div className='row mt-5 justify-content-center'>
    <div className='col-md-3 mb-5 portfolio1 rounded-pill'>
    <div className="portfolio-item mx-auto position-relative " data-toggle="modal" data-target="#portfolioModal1">
    <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
    <svg className="svg-inline--fa fa-plus fa-w-14 fa-3x plus" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
    </div>
    <img src={img} className='w-100 h-100'/>
    </div>
    </div>
    <div className='col-md-3 mb-5 portfolio1'>
    <div className="portfolio-item mx-auto position-relative" data-toggle="modal" data-target="#portfolioModal1">
    <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
    <svg className="svg-inline--fa fa-plus fa-w-14 fa-3x plus" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
    </div>
    <img src={img2} className='w-100 h-100'/>
    </div>
    </div>
    <div className='col-md-3 mb-5 portfolio1'>
    <div className="portfolio-item mx-auto position-relative" data-toggle="modal" data-target="#portfolioModal1">
    <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
    <svg className="svg-inline--fa fa-plus fa-w-14 fa-3x plus" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
    </div>
    <img src={img3} className='w-100 h-100'/>
    </div>
    </div>
    <div className='col-md-3 mb-5 portfolio1'>
    <div className="portfolio-item mx-auto position-relative" data-toggle="modal" data-target="#portfolioModal1">
    <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
    <svg className="svg-inline--fa fa-plus fa-w-14 fa-3x plus" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
    </div>
    <img src={img4} className='w-100 h-100'/>
    </div>
    </div>
    <div className='col-md-3 mb-5 portfolio1'>
    <div className="portfolio-item mx-auto position-relative" data-toggle="modal" data-target="#portfolioModal1">
    <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
    <svg className="svg-inline--fa fa-plus fa-w-14 fa-3x plus" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
    </div>
    <img src={img5} className='w-100 h-100'/>
    </div>
    </div>
    <div className='col-md-3 mb-5 portfolio1'>
    <div className="portfolio-item mx-auto position-relative" data-toggle="modal" data-target="#portfolioModal1">
    <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
    <svg className="svg-inline--fa fa-plus fa-w-14 fa-3x plus" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
    </div>
    <img src={img6} className='w-100 h-100'/>
    </div>
    </div>
    
    </div>
    
    
    </div>
    </section>
    
    
    </div>
  )
}
