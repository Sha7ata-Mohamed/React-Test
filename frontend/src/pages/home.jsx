import MovieCard from "../components/MovieCard"
import { useState } from "react"
function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "Inception", release_date: "2010" },
        { id: 2, title: "The Dark Knight", release_date: "2008" },
        { id: 3, title: "Interstellar", release_date: "2014" },
    ]
    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    };
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies..." className="search-input"
                    value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form>
            <button type="submit" className="search-button">search</button>
            <div className="movies-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery) && (
                        <MovieCard key={movie.id} movie={movie} />
                    )
                ))}
            </div>
        </div>
    )
}

export default Home