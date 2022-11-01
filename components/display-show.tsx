import { ShowType } from './input';

const DisplayShow = (prop: { show: ShowType }) => {
  console.log(prop);
  const { show } = prop;
  console.log(show);
  const {
    Title: title,
    // Year: year,
    // Runtime: runtime,
    // Genre: genre,
    // Director: director,
    Plot: plot,
    Poster: poster,
    // Type: type,
  } = show;
  console.log(title);
  return (
    <>
      <figure>
        <figcaption>{title}</figcaption>
        <img src={poster} alt={`${title} poster`} />
        <p>{plot}</p>
      </figure>
    </>
  );
};

export default DisplayShow;
