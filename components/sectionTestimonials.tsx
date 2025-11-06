import Image from "next/image";

export default function SectionTestimonials() {
  return (
    <section className="section-centered section-white" data-animate-slide-up-on-intersect-frame>
      <div className="section-content">
        <div className="section-text" data-animate-slide-up-on-intersect>
          <h3 className="section-title">
            WHAT THE DOLPHINS SAY ABOUT AQUA
          </h3>
        </div>
        <div className="section-media" data-animate-slide-up-on-intersect>
          <div className="aqua-cards two-col testimonial-cards">
            <article className="aqua-card">
              <Image className="testimonial-image" src="/assets/images/testimonials-peter-mccormack.jpg" alt="Peter McCormack" width={200} height={200} />
              <h5 className="aqua-testimonial-name">
                Peter McCormack
              </h5>
              <p className="aqua-testimonial-title">
                Mr. Obnoxious
              </p>
              <p>
                "Some people want to use Bitcoin and some want to use Tether. AQUA is the wallet I have been waiting for with Bitcoin, Lightning and Tether."
              </p>
            </article>

            <article className="aqua-card">
              <Image className="testimonial-image" src="/assets/images/testimonials-btc-sessions.jpg" alt="Ben Perrin" width={200} height={200} />
              <h5 className="aqua-testimonial-name">
                Ben Perrin
              </h5>
              <p className="aqua-testimonial-title">
                BTC Sessions
              </p>
              <p>
                "This is almost exactly what I want from a daily spending wallet. Receive on chain, Lightning or Liquid."
              </p>
            </article>

            <article className="aqua-card">
              <Image className="testimonial-image" src="/assets/images/testimonials-oliver-koblizek.jpg" alt="Oliver Koblížek" width={200} height={200} />
              <h5 className="aqua-testimonial-name">
                Oliver Koblížek
              </h5>
              <p className="aqua-testimonial-title"></p>
              <p>
                "This is the wallet my mom would use, no technical fuss. It's a Bitcoin wallet that just works while still giving you all the features you expect."
              </p>
            </article>

            <article className="aqua-card">
              <Image className="testimonial-image" src="/assets/images/testimonials-hodler615.jpg" alt="Hodler615" width={200} height={200} />
              <h5 className="aqua-testimonial-name">
                Hodler615
              </h5>
              <p className="aqua-testimonial-title"></p>
              <p>
                "As someone who is always traveling, mostly to emerging countries, I think AQUA is genius. It solves multiple real world problems for me."
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
