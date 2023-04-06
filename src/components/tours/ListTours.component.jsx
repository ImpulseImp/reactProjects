function ListTours(props) {
  const { name, image, info, price, id, tours, set } = props;

  const deleteTour = (id) => {
    const filteredToures = tours.filter((tour) => tour.id !== id);
    set(filteredToures);
    console.log(filteredToures);
  };
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt='' />
      <p>{info}</p>
      <p>{price}</p>
      <div>
        <button
          onClick={() => {
            deleteTour(id);
          }}
        >
          delete
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            console.log(alltoures);
          }}
        >
          refresh
        </button>
      </div>
    </div>
  );
}
export default ListTours;
