import MovieCard from "../components/MovieCard";
import { useState } from "react";

const movies = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "The Dark Knight", year: 2008 },
  { id: 3, title: "Interstellar", year: 2014 },
  { id: 4, title: "Parasite", year: 2019 },
  { id: 5, title: "The Matrix", year: 1999 },
];

function Home() {
  const [search, setSearch] = useState("");

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
          <MovieCard key={movie.id} title={movie.title} year={movie.year} id={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
