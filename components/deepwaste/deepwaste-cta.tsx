const DEMO_URL = "/request-demo"

export function DeepWasteCta() {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>
          See what you&apos;re
          <br />
          missing today.
        </h2>
        <p>
          Get a free assessment of your cloud waste. Most customers find 15–30%
          savings within the first week.
        </p>
        <a href={DEMO_URL} className="cta-btn" target="_blank" rel="noopener noreferrer">
          Book a Demo
          <svg viewBox="0 0 18 18" fill="none">
            <path
              d="M3 9h12M10 4l5 5-5 5"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}
