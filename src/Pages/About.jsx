const About = () => {
  return (
    <div>
      <div className="flex-col justify-center border bg-slate-300 w-2/3 mx-auto m-10 p-5">
        <h2 className="text-center font-poppins text-2xl font-semibold m-5">
          We Created <span className="text-red-500">Events</span> That Lasts
        </h2>
        <p className="text-center">
          From Concerts and Music Festivals to Theater and Performing Arts, Film
          Screenings and Premieres, Comedy Shows, Sports Events to Musical
          Functions. We offer full range of Events Management Services that
          scale to your needs & budget.
        </p>
      </div>

      <div className="mt-10 mb-10">
        <div className="grid justify-center md:grid-cols-2  lg:grid-cols-3 max-w-7xl mx-auto md:pl-10 space-y-3">
          <div className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body items-center ">
              <h2 className="card-title">Event Planning and Coordination</h2>
              <p>
                Entertainment event management companies take charge of every
                aspect of event planning, from conceptualization to execution.
                They work closely with clients to understand their vision,
                budget, and goals, and then craft a tailored plan to turn that
                vision into reality.
              </p>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body items-center ">
              <h2 className="card-title">Venue Selection and Management</h2>
              <p>
                Choosing the right venue is crucial to the success of any event.
                These companies have the expertise to identify suitable
                locations, negotiate contracts, and manage all logistical
                aspects of the venue, including seating, staging, and technical
                requirements.
              </p>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body items-center">
              <h2 className="card-title">Artist and Talent Management</h2>
              <p>
                Securing top-notch performers, artists, and talent is a
                specialty of event management companies. They handle
                negotiations, contracts, and logistics to ensure that artists
                are well-prepared and the audience is entertained to the
                fullest.
              </p>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body items-center">
              <h2 className="card-title">Production and Technical Support</h2>
              <p>
                Event management companies oversee the technical aspects of an
                event, including sound, lighting, visuals, and special effects.
                They collaborate with technical teams to ensure flawless
                execution, creating a captivating and immersive experience.
              </p>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body items-center">
              <h2 className="card-title">Marketing and Promotion</h2>
              <p>
                Successful events require effective marketing and promotion
                strategies. These companies develop comprehensive marketing
                plans, manage advertising campaigns, and leverage social media
                to create buzz and sell tickets.
              </p>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body items-center">
              <h2 className="card-title">Security and Safety</h2>
              <p>
                Ensuring the safety and security of attendees is paramount.
                Event management companies work with security professionals to
                implement robust safety measures and emergency response plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
