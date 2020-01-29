import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB_VE2sdS1M8NreP6ylxNzoRCMseaeuxD7BhW3EA1ZqlzgZ-JU',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQD2Aw-wG3Rqrt6AVAqJ_eMixTlbsLH9PUkL50xIjGjde2WaTU',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0oQro2okocesPf5nfuroFW9C1KvRk8S-se2N518oanfg7N0qh',
    altText: 'Slide 3',
    caption: 'Slide 3'
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
        <img className="imgslider" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
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
  );
}

export default Example;