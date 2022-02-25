import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 1300,
    autoplay:true,
    arrows: false,
    responsive: [
        {
          breakpoint: 651,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
      ]
};

const SliderContainer = styled.div`
    width: 100%;

`

const SlideContainer = styled.div`
    display: flex !important;
    justify-content: center !important;
    align-content: center !important;
    width: 100% !important;
    height: 100% !important;
    
`

const Image = styled.img`
    width: 15rem;
`

const StyledSlider = styled(Slider)`

  .slick-list {
    padding: 0 !important;
    width: 100% !important;
    height: 100% !important;
  };

  .slick-next, .slick-prev {
    background-color: #66FCF1;
    border-radius: 50%;
    width:2rem;
    height: 2rem;
    display: none;
    

    &:before {
        color:#1f2833;
        width:2rem;
        height: 2rem;
        font-size: xx-large;
        display: none;
    }
  }

    .slick-track {
    display: flex;
    };

    .slick-track .slick-slide {
    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;
    }
`;



function SkillsSlider() {

  return (
    <SliderContainer id='slider'>
        <StyledSlider {...settings}>
            <SlideContainer id='slide-container'>
                <Image src="/images/skills/HTML5_logo.png" alt="" />
            </SlideContainer>
            <SlideContainer>
                <Image src="/images/skills/css-3-removebg.png" alt="" />
            </SlideContainer>
            <SlideContainer>
                <Image src="/images/skills/js-logo-2-removebg.png" alt="" />
            </SlideContainer>
            <SlideContainer>
                <Image src="/images/skills/react-logo-removebg.png" alt="" />
            </SlideContainer>
            <SlideContainer>
                <Image src="/images/skills/mon.png" alt="" />
            </SlideContainer>
            <SlideContainer>
                <Image src="/images/skills/node-logo-removebg.png" alt="" />
            </SlideContainer>
            <SlideContainer>
                <Image src="/images/skills/python-logo.png" alt="" />
            </SlideContainer>

            
        </StyledSlider>

    </SliderContainer>
  )
}

export default SkillsSlider