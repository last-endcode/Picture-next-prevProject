import React, { useState } from 'react';
import cardigan from './data-cardigan';

function Review() {
  const [index, setIndex] = useState(0);
  const {
    id,
    img,
    name,
    price,
    product_title,
    product_text,
    composition_title,
    composition_text,
  } = cardigan[index];

  const checkIndex = (number) => {
    if (number > cardigan.length - 1) {
      return 0;
    }
    if (number < 0) {
      return cardigan.length - 1;
    }
    return number;
  };

  const nextShirt = (e) => {
    // console.log(e.target);
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const prevShirt = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const randomShirt = () => {
    let randomNumber = Math.floor(Math.random() * cardigan.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    // update
    setIndex(checkIndex(randomNumber));
  };

  return (
    <>
      <article className='shirt'>
        <div className='image-container'>
          <p className='number'>
            0{id}/0{cardigan.length}
          </p>
          <img src={img} alt={name} className='img-shirt' />
          <div className='button-container'>
            <div>
              <button className='prevBtn' onClick={prevShirt}>
                prev
              </button>
              <button className='nextBtn' onClick={nextShirt}>
                next
              </button>
            </div>
            <button className='randomBtn' onClick={randomShirt}>
              random
            </button>
          </div>
        </div>
        <div className='shirt-info'>
          <h1 className='name'>{name}</h1>
          <h2 className='price'>IDR {price}</h2>
          <h3 className='product_title'>{product_title}</h3>
          <p className='product_text'>{product_text}</p>
        </div>
      </article>
    </>
  );
}

export default Review;
