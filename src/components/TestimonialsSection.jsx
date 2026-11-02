const testimonials = [
  {
    name: "Rahul Sahani",
    location: "Noida",
    text:
      "The team completely transformed our apartment. The design was beautiful and the entire process was very smooth.",
    image: `${import.meta.env.BASE_URL}project-living-room.JPG`,
  },
  {
    name: "Roshni Kumari",
    location: "Greater Noida",
    text:
      "We loved the design of our living room and kitchen. The team understood exactly what we wanted.",
    image: `${import.meta.env.BASE_URL}project-bedroom.JPG`,
  },
  {
    name: "Atul",
    location: "Delhi NCR",
    text:
      "Very professional team and excellent quality of work. Our home now feels completely different.",
    image: `${import.meta.env.BASE_URL}project-kitchen.JPG`,
  },
];

function TestimonialsSection({ showHeading = true }) {
  return (
    <section className="testimonials-section">

      {showHeading && (
        <div className="testimonials-heading">

          <div>
            <p className="section-label">
              TESTIMONIALS
            </p>

            <h2>
              What Our Clients
              <br />
              Say.
            </h2>
          </div>

          <p>
            Real experiences from our interior design clients.
          </p>

        </div>
      )}

      <div className="testimonials-grid">

        {testimonials.map((testimonial) => (

          <article
            className="testimonial-card"
            key={testimonial.name}
          >

            <div className="testimonial-image-wrapper">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
                loading="lazy"
              />
            </div>

            <div className="testimonial-stars">
              ★★★★★
            </div>

            <p className="testimonial-text">
              "{testimonial.text}"
            </p>

            <strong>
              {testimonial.name}
            </strong>

            <span className="testimonial-location">
              {testimonial.location}
            </span>

          </article>

        ))}

      </div>

    </section>
  );
}

export default TestimonialsSection;
