import React from 'react'
import './Carousel.css';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import dom1 from '../../assets/dom1.jpg';
import dom2 from '../../assets/dom2.jpg';
import dom3 from '../../assets/dom3.jpg';
import dom4 from '../../assets/dom4.jpg';

const galleryImages = [ dom1, dom2, dom3, dom4]
const Carousel = () => {
    const scrollRef = React.useRef(null);
    const scroll = (direction) => {
      const { current } = scrollRef;
  
      if(direction === 'left') {
        current.scrollLeft -= 300;
      } else {
        current.scrollLeft += 300;
      }
    }
    return (
        <div className="app__gallery flex__center">
            <div className="app__gallery-images">
              <div className="app__gallery-images_container" ref={scrollRef}>
                {galleryImages.map((image, index) => (
                  <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                    <img src={image} alt="gallery"/>
                    <BsInstagram className="gallery__image-icon"/>
                  </div>
                ))}
              </div>
              <div className="app__gallery-images_arrows">
                <BsArrowLeftShort className="gallery__arrow-icons" onClick={() => scroll('left')}/>
                <BsArrowRightShort className="gallery__arrow-icons" onClick={() => scroll('right')}/>
              </div>
            </div>
        </div>
  )
}

export default Carousel;
