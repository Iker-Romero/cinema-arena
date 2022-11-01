import { useEffect, useState } from 'react';

import getData from '../utilities/get-data';
import DisplayShow from './display-show';

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

const Input = (props: { id: string; type: string }) => {
  const { id, type } = props;

  const [show, setShow] = useState<ShowType>({
    Title: 'Spider-Man',
    Year: '2002',
    Runtime: '03 May 2002',
    Genre: 'Action, Adventure, Sci-Fi',
    Director: 'Sa Raimi',
    Plot: 'After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg',
    Type: 'movie',
  });

  useEffect(() => {
    async () => {
      const getShow = await getData(
        'http://www.omdbapi.com/?i=tt3896198&apikey=135bc54d',
        `&t=${show.Title}`,
      );

      setShow(getShow());
      console.log(show);
    };
  }, []);

  return (
    <>
      <input
        type={type}
        id={id}
        onChange={(e) => setShow({ ...show, Title: e.target.value })}
      />
      <DisplayShow show={show} />
    </>
  );
};

export default Input;
