import {createContext} from "react"

export const MovieContext = createContext()

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

export { movies };