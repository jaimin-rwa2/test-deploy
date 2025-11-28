import { useParams } from "react-router";
import movies from "../assets/data.json";

export default function Product() {
  const { id } = useParams();
  //  movie: { id, poster, name, rating, last_updated, running_time }

  let { poster, name, rating, last_updated, running_time } = movies.find(
    (movie) => {
      return movie.id == id;
    }
  );

  let rename = null;
  if (name.length > 19) {
    rename = name.slice(0);
    name = name.slice(0, 20) + "...";
  }

  return (
    <>
      <section className="card-item mt-10">
        <div className="container mx-auto flex flex-wrap justify-center">
          <div className="rounded-lg overflow-hidden shadow-xl mx-7 mb-[48px] block">
            <div className="pb-5  ">
              <img src={poster} alt="" />
            </div>
            <div className="flex justify-between content-center pb-3.5 px-4">
              <h3 className="text-lg font-bold" title={rename}>
                {name}
              </h3>
              <p>
                <span>{rating}</span>/10
              </p>
            </div>
            <div className="flex justify-between pb-1 px-4">
              <p className="text-xs text-gray-600">LAST UPDATED</p>
              <p className="text-xs text-gray-600">RUNNING TIME</p>
            </div>
            <div className="flex justify-between pb-3.5 px-4">
              <p>{last_updated}</p>
              <p className="text-[regal-blue]">{running_time}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
