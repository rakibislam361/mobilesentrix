import React from 'react'
import Slider from 'react-slick'

function HomeSlider() {
   const settings = {
     dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      cssEase: "linear"
  };
 
  const SlideImage = [
    { image : "assets/img/h4-slide.png"},
    { image : "assets/img/h4-slide2.png"},
    { image : "assets/img/h4-slide3.png"},
    { image : "assets/img/h4-slide4.png"},
  ];
  
  return (
     <div className="slider-area">
        <div className="block-slider block-slider4">
            <ul className id="bxslider-home4">
                <Slider {...settings}>
                  {SlideImage.map((value, key, map) => {
                    return (
                            <li id="key">
                                <img src={value.image} alt={value.image} />
                                  <div className="caption-group">
                                    <h2 className="caption title">
                                      iPhone <span className="primary">6 <strong>Plus</strong></span>
                                    </h2>
                                    <h4 className="caption subtitle">Dual SIM</h4>
                                    <a className="caption button-radius" href="#"><span className="icon" />Shop now</a>
                                  </div>
                            </li>
                          );
                    })}
                  </Slider>
            </ul>
          </div>
      </div> 
  )
}

export default HomeSlider