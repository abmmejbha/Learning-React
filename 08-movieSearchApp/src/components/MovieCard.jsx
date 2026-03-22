import { Link } from "react-router-dom";

function MovieCard({ id, title, year }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <h2>{title}</h2>
        <p>{year}</p>
      </Link>
    </div>
  );
}

export default MovieCard;
