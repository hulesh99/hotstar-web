import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CardCarousel = ({ cards }) => {
  // Configuration settings for the carousel
  const settings = {
    showArrows: true,
    emulateTouch: true,
    infiniteLoop: true,
    showThumbs: false,
    autoPlay: true,
    interval: 5000,
    showStatus: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Function to chunk the array into groups
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Chunk the cards array into groups of 7 images per slide
  const cardGroups = chunkArray(cards, 7);

  return (
    <div className="">
      <Carousel {...settings}>
        {cardGroups.map((group, idx) => (
          <div key={idx}>
            <div className="mx-7">
              {group.map((item, itemIdx) => (
                <img
                  key={itemIdx}
                  src={item.imageUrl}
                  alt={`Image ${idx * 7 + itemIdx + 1}`}
                  className="h-56 object-cover ml-3"
                  style={{ width: "12%" }}
                />
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardCarousel;
