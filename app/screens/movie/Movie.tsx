import { IMovie, IMovieList } from "@/app/models/IMovie";

async function fetchMovies(page: number) {
    const response = await fetch(`https://api.cineamo.com/movies?page=${page}`)
    return response.json()
}

export default async function Movie() {
 
    const cinemas: IMovieList = await fetchMovies(1)

    return ( 
      <>
        <ul>
            {cinemas && cinemas._embedded.movies.map(((item:IMovie) => (
                <li key={item.id}>{item.id}</li>
            )))}
        </ul>
      </>
    );
  }
