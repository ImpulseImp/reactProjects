import React, { useState, useEffect } from 'react';
import axios from 'axios';
const url = 'https://course-api.com/react-tours-project';
import GetTours from './GetTours.component';
import Loading from './Loading/Loading.component';

function Tours() {
  const [tours, setTOurs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setTOurs(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setIsLoading(false);
  }, []);
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button
            type='button'
            className='btn'
            onClick={() => {
              setIsLoading(true);
              axios
                .get(url)
                .then((response) => {
                  setTOurs(response.data);
                  console.log(response.data);
                })
                .catch((error) => {
                  console.log(error);
                });
              setIsLoading(false);
            }}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <GetTours tours={tours} setTOurs={setTOurs} />
    </main>
  );
}
export default Tours;
