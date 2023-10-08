/* eslint-disable react/prop-types */

import EventCard from "./EventCard";

const HomeEventCards = ({ Cards }) => {
  console.log(Cards);

  return (
    <div>
      <div>
        <h1>Our Services</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {Cards?.map((card) => (
          <EventCard key={card.id} card={card}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default HomeEventCards;
