import React, { useEffect, useRef, useState } from 'react';

const reviews = [
  {
    "name": "Ali Adabzadeh",
    "quote": "Dr. Ananth was professional, attentive, and took the time to explain my condition and treatment options clearly.",
    "id": "Ci9DQUlRQUNvZENodHljRjlvT2kxdFYyNXNObVZNVFMwNFlrcFpNbTgxWDJoVldFRRAB",
    "url": "https://maps.app.goo.gl/wwJbL7v6Qt61EkLKA"
  },
  {
    "name": "Sherrell Miller",
    "quote": "I finally found a pain management doctor who took my pain seriously. … I felt heard and validated.",
    "id": "Ci9DQUlRQUNvZENodHljRjlvT21reFdrNVNWVTlKVkZaTWEwRmxUbWhJUjJOSk5XYxAB",
    "url": "https://maps.app.goo.gl/o9DkC7hTPEGuqWdh7"
  },
  {
    "name": "Becquie Venus",
    "quote": "He listened attentively to my concerns and provided feedback. He appears to be very knowledgeable in both pain management and psychiatry.",
    "id": "Ci9DQUlRQUNvZENodHljRjlvT25CZlRFMUZNMHhRWkV0UWEwMTRlRGxKVTFKeE1sRRAB",
    "url": "https://maps.app.goo.gl/QS6W9k9rvgWqapCP8"
  },
  {
    "name": "Michael Wilson",
    "quote": "I had my first visit at PP&WG and it was pleasant, clean and comfortable.",
    "id": "Ci9DQUlRQUNvZENodHljRjlvT2xWbllWVnJaVXAwU2psUVRHd3daM1l5YkVNemFHYxAB",
    "url": "https://maps.app.goo.gl/TzsdqQfCwk1a2sFR7"
  }
];

const ReviewCarousel = () => {
  const trackRef = useRef(null);
  const [visible, setVisible] = useState({ first: 0, last: 1, atStart: true, atEnd: false });

  const syncPosition = () => {
    const track = trackRef.current;
    if (!track || !track.firstElementChild) return;
    const cards = Array.from(track.children);
    const bounds = track.getBoundingClientRect();
    const shown = cards
      .map((card, index) => ({ index, bounds: card.getBoundingClientRect() }))
      .filter(card => card.bounds.left >= bounds.left - 2 && card.bounds.right <= bounds.right + 2)
      .map(card => card.index);
    const gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const step = cards[0].getBoundingClientRect().width + gap;
    const first = shown.length ? shown[0] : Math.min(reviews.length - 1, Math.round(track.scrollLeft / step));
    const next = {
      first,
      last: shown.length ? shown[shown.length - 1] : first,
      atStart: cards[0].getBoundingClientRect().left >= bounds.left - 2,
      atEnd: cards[cards.length - 1].getBoundingClientRect().right <= bounds.right + 2,
    };
    setVisible(previous =>
      Object.keys(next).every(key => previous[key] === next[key]) ? previous : next
    );
  };

  useEffect(() => {
    const track = trackRef.current;
    syncPosition();
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(syncPosition) : null;
    observer?.observe(track);
    window.addEventListener('resize', syncPosition);
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', syncPosition);
    };
  }, []);

  const move = direction => {
    const track = trackRef.current;
    const gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const step = track.firstElementChild.getBoundingClientRect().width + gap;
    const left = direction === 'start'
      ? 0
      : direction === 'end'
        ? track.scrollWidth
        : track.scrollLeft + direction * step;
    track.scrollTo({
      left,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };

  const onKeyDown = event => {
    if (event.target !== event.currentTarget) return;
    const directions = { ArrowLeft: -1, ArrowRight: 1, Home: 'start', End: 'end' };
    if (Object.prototype.hasOwnProperty.call(directions, event.key)) {
      event.preventDefault();
      move(directions[event.key]);
    }
  };

  return (
    <section
      className="ketamine-reviews"
      id="testimonials"
      aria-label="Google reviews of Pacific Pain & Wellness Group"
      aria-roledescription="carousel"
    >
      <div className="ketamine-container">
        <div
          className="ketamine-review-track"
          id="ketamine-review-track"
          ref={trackRef}
          tabIndex={0}
          aria-label="Patient reviews. Use the arrow keys or swipe to browse."
          onScroll={syncPosition}
          onKeyDown={onKeyDown}
        >
          {reviews.map((review, index) => (
            <figure
              className="ketamine-review"
              key={review.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`Review ${index + 1} of ${reviews.length}`}
            >
              <span className="ketamine-review-stars" role="img" aria-label="5 out of 5 stars">★★★★★</span>
              <blockquote>“{review.quote}”</blockquote>
              <figcaption>
                <strong>{review.name}</strong>
                <a href={review.url} target="_blank" rel="noopener noreferrer" aria-label={`Read ${review.name}'s review on Google`}>
                  Google review ↗
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="ketamine-review-controls">
          <p className="ketamine-review-context">Selected five-star reviews about general practice care.</p>
          <div className="ketamine-review-buttons">
            <button type="button" className="ketamine-review-navigation" aria-label="Previous reviews" aria-controls="ketamine-review-track" disabled={visible.atStart} onClick={() => move(-1)}>
              <span aria-hidden="true">←</span>
            </button>
            <span className="ketamine-review-status" role="status" aria-live="polite" aria-atomic="true">
              {visible.first + 1}{visible.last > visible.first ? `–${visible.last + 1}` : ''} of {reviews.length} reviews
            </span>
            <button type="button" className="ketamine-review-navigation" aria-label="Next reviews" aria-controls="ketamine-review-track" disabled={visible.atEnd} onClick={() => move(1)}>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
