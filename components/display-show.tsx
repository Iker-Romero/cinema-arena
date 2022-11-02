import React from 'react';
import { useState } from 'react';

export type ShowType = {
  Title: string;
  Year: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Plot: string;
  Poster: string;
  Type: string;
};

const DisplayShow = () => {
  const [show, setShow] = useState<ShowType>({
    Title: 'Spider-Man',
    Year: '2002',
    Runtime: '121 min',
    Genre: 'Action, Adventure, Sci-Fi',
    Director: 'Sa Raimi',
    Plot: 'After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg',
    Type: 'movie',
  });

  const { Title: title, Plot: plot, Poster: poster } = show;

  return (
    <figure className="search-result">
      <figcaption>{title}</figcaption>
      <div className="show-details">
        <img src={poster} alt={`${title} poster`} />
        <p>{plot}</p>
      </div>
    </figure>
  );
};

export default DisplayShow;
