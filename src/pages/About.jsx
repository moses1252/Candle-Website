import "./About.css";

const careSteps = [
  "Allow enough time for the wax to melt completely to the edges of the container to prevent tunneling.",
  'Trim the wick to 1/4" tall before you relight your candle to keep the wax clean and burning nicely.',
  "Avoid burning your candle for more than 3 to 4 hours at a time.",
  "Never leave a burning candle unattended; extinguish it before leaving the room.",
  "Keep candles out of the reach of children and pets.",
  "Place candles on a stable, heat-resistant surface away from flammable objects.",
];

export default function About() {
  return (
    <div className="about">
      {/* Story */}
      <section className="about-story">
        <div className="container about-story-inner">
          <span className="about-moon">☾</span>
          <p className="eyebrow">✦ OUR STORY ✦</p>
          <h1 className="section-title">Moon's Candles 24.7</h1>
          <div className="about-text">
            <p>
              The moon has always held a special place in my heart. No matter
              where we are in life, no matter how different our journeys may be,
              we all look up at the same moon and shine beneath the same sky.
            </p>
            <p>
              Moon's Candles 24.7 was created with that feeling in mind that
              even in the darkest moments, there is always a light to guide us.
            </p>
            <p className="about-signature">— yaya</p>
          </div>
        </div>
      </section>

      {/* Candle care */}
      <section className="about-care">
        <div className="container">
          <h2 className="section-title">Candle care</h2>
          <div className="care-grid">
            {careSteps.map((step, i) => (
              <div className="care-item" key={i}>
                <span className="care-num">{i + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
