/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const EventCard = ({ card }) => {
  const { id, name, price, description, image } = card || {};

  return (
    <div>
      <div className="flex justify-center m-5" data-aos="fade-up">
        <div className="relative flex w-11/12 flex-col rounded-xl text-gray-700 shadow-md">
          <div className="relative mx-2 mt-2 h-[250px] overflow-hidden rounded-xl text-gray-700">
            <img className="h-full w-full" src={image} />
          </div>

          <div className="p-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 rounded-md p-1">
                {name}
              </p>
            </div>

            <p className="p-1 block font-sans text-[16px] leading-normal text-orange-700 bg-gray-300 antialiased font-semibold  w-28 border rounded-sm">
              $Price: {price}
            </p>

            {description.length > 80 ? (
              <p className="mb-2 block font-sans leading-normal text-gray-500 antialiased font-normal">
                {" "}
                {description.slice(0, 80)} <span>...</span>{" "}
              </p>
            ) : (
              <p className="mb-2 block font-sans leading-normal text-gray-700 antialiased font-normal">
                {" "}
                {description}
              </p>
            )}
          </div>

          {/* ///CardDetails/${id} */}

          <div>
            <Link to={`/eventDetails/${id}`}>
              <div className="relative">
                <button className=" absolute bottom-4 right-2 h-8 w-28 border bg-sky-500  rounded-md text-[white]">
                  See Details
                </button>
              </div>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
