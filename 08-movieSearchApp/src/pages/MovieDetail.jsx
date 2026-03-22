import { useNavigate, useParams } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    description: "Dreams within dreams.",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    description: "Why so serious?",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    description: "Love transcends dimensions.",
  },
  {
    id: 4,
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    description: "Class warfare, Korean style.",
  },
  {
    id: 5,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    description: "What is real?",
  },
];

function MovieDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const movie = movies.find((m) => m.id === Number(id));

  return (
    <>
      <div>
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
          <p>{movie.genre}</p>
          <p>{movie.description}</p>
        </div>

        <button onClick={() => navigate(-1)}>back</button>
      </div>
    </>
  );
}

export default MovieDetail;
