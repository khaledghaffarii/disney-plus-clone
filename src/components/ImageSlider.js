import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

function ImageSlider() {


 let settings = {
   dots: true,
   infinite: true,
   speed: 800,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
 };



    return (
      <Carousel {...settings}>
        <Wrap>
          <a>
            <img src="/images/slider-badging.jpg" alt="" />
          </a>
        </Wrap>

        <Wrap>
          <a>
            <img src="/images/slider-scale.jpg" alt="" />
          </a>
        </Wrap>

        <Wrap>
          <a>
            <img src="/images/slider-badag.jpg" alt="" />
          </a>
        </Wrap>

        <Wrap>
          <a>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2D79190EE1ECBA1C48713150D430582515E92D47E824FB15BBB53CEA30D9B3BA/scale?width=1440&aspectRatio=3.91&format=jpeg"
              alt=""
            />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5E814613F6B18A9FE66B65EB49F75310A725668027051A9F502497124CE06B4B/scale?width=1440&aspectRatio=3.91&format=jpeg"
              alt=""
            />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A38B478F4FFCBF16886C14872D13CB64EC615E97B380028FC51162EC61495800/scale?width=1440&aspectRatio=3.91&format=jpeg"
              alt=""
            />
          </a>
        </Wrap>
        <Wrap>
          <a>   
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/83363D03F4F637E001C0FF3BE7AE5B6461E498E1673A2EB944276D6399263C01/scale?width=1440&aspectRatio=3.91&format=jpeg"
              alt=""
            />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2A48A0BD869191F88F25C46001A94B8146C43C0B8AA69220733A46444B49E80F/scale?width=1440&aspectRatio=3.91&format=jpeg"
              alt=""
            />
          </a>
        </Wrap>
      </Carousel>
    );
}

export default ImageSlider
 const Carousel = styled(Slider)`
   margin-top: 20px;
   & > button {
     opacity: 0;
     height: 100%;
     width: 5vw;
     z-index: 1;
     &:hover {
       opacity: 1;
       transition: opacity 0.2s ease 0s;
     }
   }
   ul li button {
     &:before {
       font-size: 10px;
       color: rgb(150, 158, 171);
     }
   }
   li.slick-active button:before {
     color: white;
   }
   .slick-list {
     overflow: initial;
   }
   .slick-prev {
     left: -75px;
   }
   .slick-next {
     right: -75px;
   }
 `;

 const Wrap = styled.div`
   border-radius: 4px;
   cursor: pointer;
   position: relative;
   a {
     border-radius: 4px;
     box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
       rgb(0 0 0 / 73%) 0px 16px 10px -10px;
     cursor: pointer;
     display: block;
     position: relative;
     padding: 4px;
     img {
       width: 100%;
       height: 100%;
     }
     &:hover {
       padding: 0;
       border: 4px solid rgba(249, 249, 249, 0.8);
       transition-duration: 300ms;
     }
   }
 `;