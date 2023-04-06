function ListTours(props) {
  const { name, image, info, price, id, tours, setTOurs } = props;

  const deleteTour = (id) => {
    const filteredToures = tours.filter((tour) => tour.id !== id);
    setTOurs(filteredToures);
    console.log(filteredToures);
  };
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>{price}</span>
      <div className='tour-info'>
        {info}
        <h5>{name}</h5>
      </div>
      <div>
        <button
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
