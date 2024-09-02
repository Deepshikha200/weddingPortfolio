import React from 'react';
import "./Header.css";

const images = [
  "_ATP8950.jpg",
  "_ATP9320.jpg",
  "9E0A0044.jpg",
  "9E0A0051.jpg",
  "9E0A0109.jpg",
  "9E0A0220.jpg",
  "9E0A5437.jpg",
  'DSC02046.jpg',
  'DSC02042.jpg',
  'DSC02036.jpg',

  '9E0A8485.jpg',
  '1J2A0503.jpg',

  '1J2A9573.jpg',
  '1J2A9816.jpg',
  '1J2A9887.jpg',
];

const ScrollGallery = () => {
  return (
    <section className="container insta_con">
      <h2 className='text-center' id=''>~View Gallery~</h2>

      <div className="instagram_flex">
        <div className="instagram_scroll">
          {images.concat(images).map((src, index) => (
            <img key={index} src={src} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollGallery;
