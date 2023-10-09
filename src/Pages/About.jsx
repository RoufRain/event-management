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
              <h2 className="card-title">Our Vision</h2>
              <p>
                Our vision is to be recognized as a global leader in the
                entertainment event management industry, known for our
                unwavering commitment to creativity, precision, and client
                satisfaction. We envision a world where every event we touch
                becomes a masterpiece, where audiences are transported into
                magical realms of entertainment, and where our name is
                synonymous with outstanding event experiences. We aspire to
                inspire, delight, and unite people through the power of
                entertainment.
              </p>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body items-center ">
              <h2 className="card-title">Our Approach</h2>
              <p>
                At EventIment, we approach every project with a unique blend of
                creativity and precision. We understand that successful events
                require meticulous planning, artistic flair, and flawless
                execution. Our approach is based on: Tailored Solutions: We
                collaborate closely with our clients to understand their
                specific goals and visions, crafting customized event plans that
                align perfectly with their objectives. Attention to Detail: We
                leave no stone unturned when it comes to event logistics,
                technical requirements, and safety measures.
              </p>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body items-center">
              <h2 className="card-title">Our Goals</h2>
              <p>
                Our primary goal at EventIment Entertainment Event Management is
                to create unforgettable and immersive entertainment experiences
                that leave a lasting impact on audiences. We strive to be at the
                forefront of event innovation, consistently pushing the
                boundaries to deliver exceptional, one-of-a-kind entertainment
                events. Whether it's a music festival, a theater production, or
                a sports extravaganza, our aim is to exceed expectations and set
                new standards for excellence in event management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
