import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MovieContext } from "../context/Context";

function MovieDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { movies } = useContext(MovieContext);
  const movie = movies.find((m) => m.id === Number(id));

  return (
    <>
      <div>
        <div>
          <h2> Movie Title: {movie.title}</h2>
          <p> Year: {movie.year}</p>
          <p> Genre: {movie.genre}</p>
          <p>{movie.description}</p>
        </div>

        <button onClick={() => navigate(-1)}>back</button>
      </div>
    </>
  );
}

export default MovieDetail;
