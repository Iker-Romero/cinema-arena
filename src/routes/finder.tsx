import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../../components/button';
import Label from '../../components/label';
import getData from '../../utilities/get-data';

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

const Finder = () => {
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

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    (async () => {
      console.log('ASYNC');
      const getShow = await getData(
        'http://www.omdbapi.com/?i=tt3896198&apikey=135bc54d',
        `&t=${show.Title}`,
      );

      setShow(getShow);
    })();
    console.log(show);
  }, [show.Title]); // We access to the property instead of the object to avoid infinite loop
  console.log(show);

  const { Title: title, Plot: plot, Poster: poster } = show;

  return (
    <>
      <h1>Films & Series Finder</h1>
      <Label targetID="finder" text="Search by title: " />
      <div className="search-area">
        <input
          type="text"
          id="finder"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            setShow({ ...show, Title: inputValue });
          }}
        >
          🔍
        </button>
      </div>
      <figure className="search-result">
        <figcaption>{title}</figcaption>
        <div className="show-details">
          <img src={poster} alt={`${title} poster`} />
          <p>{plot}</p>
        </div>
      </figure>
      <NavLink to="/show-form">
        <Button id="addShow" text="ADD NEW SHOW" color="#db0000" />
      </NavLink>
    </>
  );
};

export default Finder;
