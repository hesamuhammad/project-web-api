import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container
} from 'reactstrap';

const items = [
  {
    src: 'https://www.tribaeast.com/wp-content/uploads/2017/07/Singapore-1-Altitude-Viewing-Gallery-Sunset-View-800x400.png',
    altText: 'Slide 1',
    caption: 'Anywhere'
  },
  {
    src: 'https://lh3.googleusercontent.com/9XANu0kkl94p8G9WgLUL14Ot1ROi1a1Hbw1Tpzb78Z9HaMsxywAA0sbLm0cwWt15PIfIHxUmds_7QONbYkowaWAMXbBSKFCb6SwfyKOWRV4FfHqJOXdqCVvwEPfEJiIRRmCf5frq8W8YcLbi9fj5dvFJezbcTpgqz-OKcWh9MaI0Pj6IaKgrQPkTq6dgjSQIpkqhdbJYWPMLvWrHxiyPWDZEmMGRIzd8cidTCVQHG3uPk8MowwnBpgy2Ptr3U_PU8JtuN3u90Xnp-noeGSYOMOmgRWBFig1rokY9AQjAPp6-e40OTGSjdpmJhomrVDyLZIBtPvOwS9_5TlNmtLG2x5i23rBQmuVyqSAJsshervLggFikmPGHx4VxfaRbiih2pH47F6mvjbY5U14yKCGFEO8PqdYmBpAS2hWjme5evNuN8Uj6fbvXMAAQ1KCOVfPHEtjz0LPJrntsGj_cy0RiVvN2YV6CMe2c0YPadHRDbKUbwQdod99HB6q6nSzzm8qWXmpaY8QSe9A0wdm7Uf5mNE8vNNGMLIg4UBgxZNfrGeom_Rvubt2SOufPsV8-RT7ZCsumOg=w800-h400-p',
    altText: 'Slide 2',
    caption: 'Anytime'
  },
  {
    src: 'https://www.pentasia.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdGpKIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e345e18802353f2726ceec61269b1d820d054012/Malta3-Pentasia-800x400.jpg',
    altText: 'Slide 3',
    caption: 'Anyone'
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="imgslider" src={item.src} alt={item.altText}
        />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>

      <Container
        style={{ marginTop: "50px", paddingBottom: "80px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Deutsche_Bahn_AG-Logo.svg/1280px-Deutsche_Bahn_AG-Logo.svg.png" alt='gambar logo'
            style={{ width: "90px" }} />
          <h1
            style={{ marginLeft: "10px" }}>DATABASE Inc.</h1>
        </div>
        <h4 style={{ fontStyle: "italic" }}>We gather database around the world...</h4>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}

        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </Container>
    </div>
  );
}

export default Example;