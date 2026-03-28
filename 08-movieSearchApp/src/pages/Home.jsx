import { useContext, useState } from "react";
import MovieCard from "../components/MovieCard";
import { MovieContext } from "../context/Context";

function Home() {
  const [search, setSearch] = useState("");

  const { movies } = useContext(MovieContext);

  const filtered = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <div>
        <h1>Movie Search App</h1>
        <input
          placeholder="Search Movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {filtered.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
            id={movie.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
