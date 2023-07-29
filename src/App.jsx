import "./App.css";
import MoviesList from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <div className="title">Movie List Section</div>
        <MoviesList />
      </section>
    </div>
  );
}

export default App;
