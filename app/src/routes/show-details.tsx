import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getShow } from '../API/api';

const ShowDetails = () => {
  const [show, setShow] = useState();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (typeof id === 'string') {
        const data = await getShow(id);
        setShow(data);
      }
    })();
  }, []);

  // if (show === undefined) return;
  if (show !== undefined) {
    const { Title, Year, Runtime, Genre, Director, Plot, Poster, Type, BoxOffice } = show;

    return (
      <>
        <div className="show-identification">
          <h1>{Title}</h1>
          <h2>({Year})</h2>
        </div>
        <img src={Poster} alt={Title} />
        <div className="show-info">
          <p>{Plot}</p>
          <ul>
            <li>{Runtime}</li>
            <li>{Genre}</li>
            <li>{Director}</li>
            <li>{Type}</li>
            <li>{BoxOffice}</li>
          </ul>
        </div>
      </>
    );
  }
  return <h1>Loading...</h1>;
};

export default ShowDetails;
