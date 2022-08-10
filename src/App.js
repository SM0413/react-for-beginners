import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((moive) => (
          <div key={moive.id}>
            <img alt="" src={moive.medium_cover_image} />
            <h2>{moive.title}</h2>
            <p>{moive.summary}</p>
            <ul>
              <li>
                {moive.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </li>
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
