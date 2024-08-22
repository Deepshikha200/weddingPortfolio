// import React from 'react';
// import "./Header.css";

// const Gallery = ({ weddingRef, clubsRef, eventsRef }) => {
//   const categories = {
//     wedding: [
//       '_ATP8950.jpg',
//       '_ATP9320.jpg',
//       '9E0A0044.jpg',
//       '9E0A0051.jpg',
//       '9E0A0109.jpg',
//       '9E0A0220.jpg',
//       '9E0A5389.jpg',
//       '9E0A5437.jpg'
//     ],
//     clubs: [
//       'DSC02046.jpg',
//       'DSC02042.jpg',
//       'DSC02036.jpg',
//       '9E0A8569.jpg',
//       '9E0A8498.jpg',
//       '9E0A8485.jpg',
//       '9E0A8428.jpg',
//       '9E0A8423.jpg',
//       '9E0A8414.jpg',
//       '9E0A8410.jpg',
//     ],
//     events: [
//       '1J2A0503.jpg',
//       '1J2A0505.jpg',
//       '1J2A0521.jpg',
//       '1J2A9573.jpg',
//       '1J2A9816.jpg',
//       '1J2A9887.jpg',
//     ]
//   };

//   return (
//     <div className='gallery-container'>
//       <h2 className='text-center' id='gallery'>~View Gallery~</h2>
//       <div className='gallery-grid'>
//         <div className='category-section' ref={weddingRef}>
//           <h3 className='category-title'>Wedding</h3>
//           <div className='images-grid'>
//             {categories.wedding.map((image, idx) => (
//               <div className='image-item' key={idx}>
//                 <img src={`${image}`} alt={`wedding ${idx}`} />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className='category-section' ref={clubsRef}>
//           <h3 className='category-title'>Clubs</h3>
//           <div className='images-grid'>
//             {categories.clubs.map((image, idx) => (
//               <div className='image-item' key={idx}>
//                 <img src={`${image}`} alt={`clubs ${idx}`} />
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className='category-section' ref={eventsRef}>
//           <h3 className='category-title'>Events</h3>
//           <div className='images-grid'>
//             {categories.events.map((image, idx) => (
//               <div className='image-item' key={idx}>
//                 <img src={`${image}`} alt={`events ${idx}`} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
import React from 'react';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import "./Header.css";

const Gallery = ({ weddingRef, clubsRef, eventsRef }) => {
  const categories = {
    wedding: [
      '_ATP8950.jpg',
      '_ATP9320.jpg',
      '9E0A0044.jpg',
      '9E0A0051.jpg',
      '9E0A0109.jpg',
      '9E0A0220.jpg',
      '9E0A5389.jpg',
      '9E0A5437.jpg'
    ],
    clubs: [
      'DSC02046.jpg',
      'DSC02042.jpg',
      'DSC02036.jpg',
      '9E0A8569.jpg',
      '9E0A8498.jpg',
      '9E0A8485.jpg',
    
    ],
    events: [
      '1J2A0503.jpg',
      '1J2A0505.jpg',
      '1J2A0521.jpg',
      '1J2A9573.jpg',
      '1J2A9816.jpg',
      '1J2A9887.jpg',
    ]
  };

  return (
    <div className='gallery-container'>
      <h2 className='text-center' id='gallery'>~View Gallery~</h2>
      <div className='gallery-grid'>
        <div className='category-section' ref={weddingRef}>
          <h3 className='category-title'>Wedding</h3>
          <div className='images-grid'>
            {categories.wedding.map((image, idx) => (
              <div className='image-item' key={idx}>
                <img data-src={`${image}`} alt={`wedding ${idx}`} className="lazyload" />
              </div>
            ))}
          </div>
        </div>
        <div className='category-section' ref={clubsRef}>
          <h3 className='category-title'>Clubs</h3>
          <div className='images-grid'>
            {categories.clubs.map((image, idx) => (
              <div className='image-item' key={idx}>
                <img data-src={`${image}`} alt={`clubs ${idx}`} className="lazyload" />
              </div>
            ))}
          </div>
        </div>
        <div className='category-section' ref={eventsRef}>
          <h3 className='category-title'>Events</h3>
          <div className='images-grid'>
            {categories.events.map((image, idx) => (
              <div className='image-item' key={idx}>
                <img data-src={`${image}`} alt={`events ${idx}`} className="lazyload" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
