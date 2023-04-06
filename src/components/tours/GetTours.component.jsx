import ListTours from './ListTours.component';

function GetTours(props) {
  const { tours, set } = props;
  return (
    <div>
      {tours.map((tour) => {
        return <ListTours {...tour} key={tour.id} tours={tours} set={set} />;
      })}
    </div>
  );
}
export default GetTours;
