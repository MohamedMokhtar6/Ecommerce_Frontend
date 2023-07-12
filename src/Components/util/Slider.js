import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Slider({ images }) {
  return (
    <div>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        {images.map((item, index) => {
          return (
            <div key={index}>
              <img src={item} style={{ height: "300px" }} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Slider;
