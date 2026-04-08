import Quiz from "./components/quiz.jsx";
import "./index.css";

function App() {
  return <div className="app-container"> 
    { " "}
    <h1>Quiz App</h1>
    { " "}
    <p>Welcome to the Quiz App! Test your knowledge with our fun quizzes.</p> 

    <Quiz />
  </div>
}

export default App;