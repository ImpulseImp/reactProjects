import React, { useState, useEffect } from 'react';
import axios from 'axios';
const url = 'https://course-api.com/react-tours-project';
import GetTours from './GetTours.component';

function Tours() {
  const [tours, setTOurs] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setTOurs(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <GetTours tours={tours} set={setTOurs} />
    </div>
  );
}
export default Tours;
