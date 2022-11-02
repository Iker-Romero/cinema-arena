import axios from 'axios';

export type ShowType = {
  Title: string;
  Year: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Plot: string;
  Poster: string;
  Type: string;
  BoxOffice: string;
};

type ServerResponse = {
  data: ShowType[];
};

export const getShows = async () => {
  try {
    const { data } = await axios.get<ServerResponse>('http://localhost:8080/', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'aplication/json',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postShow = async (item: ShowType) => {
  try {
    const { data } = await axios.post('http://localhost:8080/shows', item);

    return data;
  } catch (error) {
    console.log(error);
  }
};
