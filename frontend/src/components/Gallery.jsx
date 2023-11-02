import React from 'react';
import G from '../components/Gallery.module.css';
import img1 from '../images/gallery/img1.jpg';

const Gallery = () => {
  return (
    <>
      <div className={G.container}>
        <div className={G.cards}>
          <div className={G.card}>
            <img src={img1} alt="justimg" />
          </div>
          <div className={G.card}>2</div>
          <div className={G.card}>3</div>
          <div className={G.card}>4</div>
          <div className={G.card}>5</div>
          <div className={G.card}>6</div>
          <div className={G.card}>7</div>
          <div className={G.card}>8</div>
          <div className={G.card}>9</div>
          <div className={G.card}>10</div>
          <div className={G.card}>11</div>
          <div className={G.card}>12</div>
          <div className={G.card}>13</div>
          <div className={G.card}>14</div>
          <div className={G.card}>15</div>
          <div className={G.card}>16</div>
          <div className={G.card}>17</div>
          <div className={G.card}>18</div>
          <div className={G.card}>19</div>
          <div className={G.card}>20</div>
        </div>
      </div>
    </>
  )
}

export default Gallery;