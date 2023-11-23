import React from 'react';
import G from '../components/Gallery.module.css';
import galleryArray from '../images/gallery/gallery.jsx';

const Gallery = () => {
  return (
    <>
      <div className={G.container}>
        <div className={G.cards}>
          {galleryArray.map((arr, i) => {
            return (
              <>
                <div className={G.card} key={i}>
                  <img src={arr.img} alt="" />
                  {/* <li>{arr.index}</li> */}
                </div>
              </>)
          })}

        </div>
      </div>
    </>
  )
}

export default Gallery;