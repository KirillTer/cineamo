// 'use client'

import { ICinema, IListCinema } from "@/app/models/ICinema";
// import { cinemaApi } from "@/app/services/CinemaService";

async function fetchCinemas(page: number) {
    const response = await fetch(`https://api.cineamo.com/cinemas?page=${page}`)
    return response.json()
}

export default async function Cinema() {
 
    // const {
    //   data,
    // } = cinemaApi.useFetchAllCinemasQuery(1)
  
    const cinemas: IListCinema = await fetchCinemas(1)

    return ( 
      <>
        <ul>
            {cinemas && cinemas._embedded.cinemas.map(((item:ICinema) => (
                <li key={item.id}>{item.id}</li>
            )))}
        </ul>
      </>
    );
  }
