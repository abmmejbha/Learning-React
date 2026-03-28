import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieContext, movies } from "./context/Context";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <>
      <MovieContext.Provider value={{ movies }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </BrowserRouter>
      </MovieContext.Provider>
    </>
  );
}
export default App;
