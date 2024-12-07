import "./HomePageEvents.css";

const HomePageEvents = () => {
  return (
    <div className="container mt-5">
      <h1>Events</h1>

      <div>
        <h3>
          <a href="https://google.com" className="no_underline" title="Events">
            See all events →
          </a>
        </h3>
      </div>

      <div className="row justify-content-center h-auto gap-5">
        <div className="col center-block text-center rounded-5 position-relative p-5">
          <img
            src="upcoming-event.jpg"
            className="img-home-page-events"
            alt="Upcoming Event"
          />
          <div className="position-absolute bottom-0 w-100 text-center">
            <h4>Upcoming Event</h4>
            <p>A description of the upcoming event.</p>
          </div>
        </div>

        <div className="col center-block text-center rounded-5 position-relative p-5">
          <img
            src="previous-event.jpg"
            className="img-home-page-events"
            alt="Previous Event"
          />
          <div className="position-absolute bottom-0 w-100 text-center ">
            <h4>Previous Event</h4>
            <p>A description of the previous event.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageEvents;
