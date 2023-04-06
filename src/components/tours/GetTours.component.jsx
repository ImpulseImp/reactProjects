import ListTours from './ListTours.component';

function GetTours(props) {
  const { tours, setTOurs } = props;
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {tours.map((tour) => {
          return (
            <ListTours
              {...tour}
              key={tour.id}
              tours={tours}
              setTOurs={setTOurs}
            />
          );
        })}
      </div>
    </section>
  );
}
export default GetTours;
