import { useState } from 'react';

function ListTours(props) {
  const { name, image, info, price, id, tours, setTOurs } = props;

  const deleteTour = (id) => {
    const filteredToures = tours.filter((tour) => tour.id !== id);
    setTOurs(filteredToures);
    console.log(filteredToures);
  };
  const [readMore, setReadMore] = useState(false);
  console.log(info.substring(0, 50));
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>{price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type='button'
            className='info-btn'
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? 'show less' : 'Read more'}
          </button>
        </p>
      </div>
      <div>
        <button
          type='button'
          className='btn btn-block'
          onClick={() => {
            deleteTour(id);
          }}
        >
          delete
        </button>
      </div>
    </article>
  );
}
export default ListTours;
