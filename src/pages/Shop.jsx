import Card from "../components/Card";
import { useRef, useState } from "react";

export default function Shop() {
  const searchRef = useRef();

  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Avengers: Endgame",
      rating: 8.8,
      poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      last_updated: "SUN 8 SEPT - 10:00PM",
      running_time: "3HR 01MIN",
    },
    {
      id: 2,
      name: "Iron Man",
      rating: 7.9,
      poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
      last_updated: "MON 15 JULY - 8:30PM",
      running_time: "2HR 06MIN",
    },
    {
      id: 3,
      name: "Black Panther: Wakanda Forever",
      rating: 6.7,
      poster: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
      last_updated: "WED 20 MAR - 9:15PM",
      running_time: "2HR 41MIN",
    },
    {
      id: 4,
      name: "Doctor Strange in the Multiverse of Madness",
      rating: 6.9,
      poster: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
      last_updated: "FRI 2 FEB - 11:45PM",
      running_time: "2HR 06MIN",
    },
    {
      id: 5,
      name: "Spider-Man: No Way Home",
      rating: 8.3,
      poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      last_updated: "SAT 10 JUN - 7:30PM",
      running_time: "2HR 28MIN",
    },
    {
      id: 6,
      name: "Captain America: Civil War",
      rating: 7.8,
      poster: "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
      last_updated: "WED 22 FEB - 8:45PM",
      running_time: "2HR 27MIN",
    },
    {
      id: 7,
      name: "Guardians of the Galaxy",
      rating: 8.0,
      poster: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
      last_updated: "TUE 4 APR - 7:00PM",
      running_time: "2HR 01MIN",
    },
    {
      id: 8,
      name: "Avengers: Infinity War",
      rating: 8.4,
      poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      last_updated: "THU 18 MAY - 10:15PM",
      running_time: "2HR 29MIN",
    },
    {
      id: 9,
      name: "Captain America: The Winter Soldier",
      rating: 7.7,
      poster: "https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg",
      last_updated: "MON 13 MAR - 8:00PM",
      running_time: "2HR 16MIN",
    },
    {
      id: 10,
      name: "Iron Man 3",
      rating: 7.1,
      poster: "https://image.tmdb.org/t/p/w500/1Ilv6ryHUv6rt9zIsbSEJUmmbEi.jpg",
      last_updated: "SAT 1 JUL - 9:30PM",
      running_time: "2HR 10MIN",
    },
    {
      id: 11,
      name: "Black Widow",
      rating: 6.8,
      poster: "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
      last_updated: "MON 21 AUG - 10:00PM",
      running_time: "2HR 14MIN",
    },
    {
      id: 12,
      name: "Shang-Chi and the Legend of the Ten Rings",
      rating: 7.4,
      poster: "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
      last_updated: "THU 29 DEC - 8:20PM",
      running_time: "2HR 12MIN",
    },
    {
      id: 13,
      name: "Captain Marvel",
      rating: 6.8,
      poster: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
      last_updated: "FRI 6 OCT - 9:45PM",
      running_time: "2HR 04MIN",
    },
    {
      id: 14,
      name: "Eternals",
      rating: 6.3,
      poster: "https://image.tmdb.org/t/p/w500/b6qUu00iIIkXX13szFy7d0CyNcg.jpg",
      last_updated: "TUE 10 JAN - 7:15PM",
      running_time: "2HR 36MIN",
    },
    {
      id: 15,
      name: "Ant-Man and the Wasp",
      rating: 7.0,
      poster: "https://image.tmdb.org/t/p/w500/rv1AWImgx386ULjcf62VYaW8zSt.jpg",
      last_updated: "SAT 14 APR - 6:00PM",
      running_time: "1HR 58MIN",
    },
    {
      id: 16,
      name: "The Avengers",
      rating: 8.0,
      poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
      last_updated: "FRI 28 JUL - 8:00PM",
      running_time: "2HR 23MIN",
    },
    {
      id: 17,
      name: "Guardians of the Galaxy Vol. 2",
      rating: 7.6,
      poster: "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
      last_updated: "SUN 18 SEP - 9:00PM",
      running_time: "2HR 16MIN",
    },
    {
      id: 18,
      name: "Thor: Love and Thunder",
      rating: 6.2,
      poster: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
      last_updated: "MON 12 JUN - 7:00PM",
      running_time: "1HR 59MIN",
    },
    {
      id: 19,
      name: "Spider-Man: Far From Home",
      rating: 7.5,
      poster: "https://image.tmdb.org/t/p/w500/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
      last_updated: "WED 17 JAN - 8:30PM",
      running_time: "2HR 09MIN",
    },
    {
      id: 20,
      name: "Spider-Man: Homecoming",
      rating: 7.4,
      poster: "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
      last_updated: "FRI 20 MAR - 9:10PM",
      running_time: "2HR 13MIN",
    },
    {
      id: 21,
      name: "Doctor Strange",
      rating: 7.5,
      poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
      last_updated: "THU 11 AUG - 10:20PM",
      running_time: "1HR 55MIN",
    },
    {
      id: 22,
      name: "Thor: The Dark World",
      rating: 6.9,
      poster: "https://image.tmdb.org/t/p/w500/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg",
      last_updated: "TUE 3 OCT - 6:10PM",
      running_time: "1HR 52MIN",
    },
    {
      id: 23,
      name: "The Shawshank Redemption",
      rating: 9.3,
      poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      last_updated: "2025-08-06",
      running_time: "2 HR 22MIN",
    },
    {
      id: 24,
      name: "The Godfather",
      rating: 9.2,
      poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      last_updated: "2025-08-06",
      running_time: "2 HR 55MIN",
    },
  ]);

  const handleSearchForm = (e) => {
    e.preventDefault();
    const searchValue = searchRef.current.value;

    if (searchValue) {
      setMovies(() => {
        return moviesData.filter((movie) => {
          return movie.name.toLowerCase().includes(searchValue.toLowerCase());
        });
      });
    } else {
      setMovies(moviesData);
    }
  };

  return (
    <>
      <section className="card mt-10">
        <div className="container mx-auto">
          <form onSubmit={handleSearchForm}>
            <div className="w-full max-w-sm min-w-[200px]">
              <div className="relative">
                <input
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="UI Kits, Dashboards..."
                  ref={searchRef}
                />
                <button
                  className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </form>
          <div className="flex flex-wrap">
            {movies.map((movie) => {
              return <Card key={movie.id} movie={movie} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
