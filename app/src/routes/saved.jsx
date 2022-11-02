import { useEffect, useState } from 'react';

import { getShows } from '../API/api';

const Saved = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const jsonShows = await getShows();
        console.log(jsonShows);
        setShows(jsonShows);

        console.log(jsonShows);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <h1>Saved Shows</h1>
      <div className="shows-container">
        {shows.map((show) => {
          const {
            Title,
            // Year,
            // Runtime,
            // Genre,
            // Director,
            // Plot,
            Poster,
            // Type,
            // BoxOffice,
            id,
          } = show;
          return (
            <section key={id} className="show-card">
              <img src={Poster} alt={Title} />
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Saved;
