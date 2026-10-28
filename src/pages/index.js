import { Helmet } from 'react-helmet';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout2 from '../components/layout/Layout2';
import ButtonKetamine from '../components/ButtonKetamine';

const Actions = ({ section, light = false }) => (
  <div className="ketamine-actions">
    <ButtonKetamine section={section} variant={light ? 'secondary' : 'primary'} />
    <a
      href="tel:+13104377399"
      className={`ketamine-button ketamine-button--${light ? 'light-outline' : 'outline'}`}
      data-service="ketamine"
      data-cta="call-cta"
      data-section={section}
    >
      Call (310) 437-7399
    </a>
  </div>
);
const faqs = [
  [
    'What will the assessment tell me?',
    'The private assessment helps you explore our in-clinic program, your preferences and your next step. It does not provide a diagnosis or establish medical eligibility. You can choose whether to request follow-up from our team.',
  ],
  [
    'What does a ketamine consultation involve?',
    'Start with the private assessment or call our team. Our team will explain scheduling, costs and what to expect at a clinical evaluation. A clinician will review your treatment history and whether ketamine may be appropriate for you.',
  ],
  [
    'Do you offer ketamine for mental health and for pain?',
    'Yes. Pacific Pain & Wellness Group provides in-clinic ketamine care for mental health and pain. Your evaluation helps determine the appropriate treatment approach for your needs.',
  ],
  [
    'How much does ketamine treatment cost?',
    'Ketamine treatment is $650 per session, with a five-session minimum totaling $3,250. Our team will explain the applicable treatment plan and confirm your total before you begin.',
  ],
  [
    'Do you accept insurance for ketamine treatment?',
    'Ketamine treatment at Pacific Pain & Wellness Group is self-pay and is not covered by insurance. Please speak with our team about treatment costs before scheduling.',
  ],
  [
    'Can I visit from Long Beach or elsewhere in Los Angeles?',
    'Yes. Our clinic is in Torrance at 23150 Crenshaw Blvd, Suite 100. We welcome patients from the South Bay, Long Beach and Greater Los Angeles. Pacific Pain & Wellness Group also has a Manhattan Beach office. Our team will confirm the location for your ketamine appointment.',
  ],
  [
    'What happens after I send a request?',
    'Our office will follow up using your preferred contact method to discuss a consultation and next steps. Sending a request does not confirm an appointment or commit you to treatment.',
  ],
];
const IndexPage = () => (
  <Layout2>
    <PageMetadata />
    <div className="ketamine-page" id="top">
      <section className="ketamine-hero" aria-labelledby="hero-title">
        <div className="ketamine-container">
          <div className="ketamine-hero-copy">
            <p className="ketamine-eyebrow">Pacific Pain & Wellness Group · Torrance, CA</p>
            <h1 id="hero-title">
              Ketamine Therapy
              <br />
              in Torrance
            </h1>
            <p className="ketamine-lead">
              Physician-led ketamine treatment for mental health and pain.
            </p>
            <div className="ketamine-clinician">
              <StaticImage
                src="../images/dr-kartik-ananth.jpg"
                alt="Dr. Kartik Ananth"
                width={96}
                height={96}
                loading="eager"
                className="ketamine-clinician-photo"
              />
              <div>
                <strong>Dr. Kartik Ananth, MD, MBA</strong>
                <span>Board-certified in psychiatry and pain management</span>
                <span>Experienced, physician-led care in Torrance.</span>
              </div>
            </div>
            <Actions section="hero" />
            <p className="ketamine-note">
              5 short questions. Private. See your next step before sharing contact details.
            </p>
            <a href="#pricing" className="ketamine-price-summary">
              $650 per session <span>· Five-session minimum: $3,250</span>
              <small>Self-pay treatment · View pricing details →</small>
            </a>
            <p className="ketamine-reassurance">
              No payment or treatment commitment is required to request follow-up.
            </p>
          </div>
        </div>
        <div className="ketamine-hero-mobile">
          <StaticImage
            src="../images/hero-banner-mobile.png"
            alt="Woman relaxing at home"
            loading="eager"
          />
        </div>
      </section>
      <div className="ketamine-trust-strip">
        <div className="ketamine-container">
          <span>Ketamine care since 2015</span>
          <span>Physician-led, in-clinic care</span>
          <span>Pain & mental-health expertise</span>
        </div>
      </div>
      <section className="ketamine-section" id="ketamine-care" aria-labelledby="care-title">
        <div className="ketamine-container">
          <div className="ketamine-section-heading">
            <p className="ketamine-eyebrow">Care built around your needs</p>
            <h2 id="care-title">
              Two reasons to explore ketamine.
              <br />
              One experienced team.
            </h2>
            <p>
              Learn about ketamine treatment with a team that brings together mental-health and
              pain-management expertise.
            </p>
          </div>
          <div className="ketamine-care-grid">
            <article className="ketamine-care-card" id="ketamine-for-mental-health">
              <span className="ketamine-card-label">Mental-health treatment</span>
              <h3>Ketamine for Mental Health</h3>
              <p>
                Considering ketamine therapy for depression or other mental-health concerns? Our
                team can discuss your treatment history, explain the evaluation process, and help
                you understand whether an in-clinic ketamine consultation is an appropriate next
                step.
              </p>
              <ButtonKetamine section="care" />
            </article>
            <article className="ketamine-care-card" id="ketamine-for-pain">
              <span className="ketamine-card-label">Pain treatment</span>
              <h3>Ketamine for Pain</h3>
              <p>
                Explore ketamine treatment for chronic pain with our Torrance team. Discuss your
                pain-management history, what an evaluation involves, and the in-clinic treatment
                options that may be appropriate for you.
              </p>
              <ButtonKetamine section="care" />
            </article>
          </div>
        </div>
      </section>
      <section
        className="ketamine-section ketamine-soft"
        id="approach"
        aria-labelledby="approach-title"
      >
        <div className="ketamine-container ketamine-split">
          <StaticImage
            src="../images/relax-top.jpg"
            alt="Woman resting comfortably at home"
            className="ketamine-rounded-image"
          />
          <div>
            <p className="ketamine-eyebrow">Experience that matters</p>
            <h2 id="approach-title">
              Ketamine care with
              <br />
              Pacific Pain & Wellness
            </h2>
            <p>
              Our Torrance team has provided in-clinic ketamine care since 2015, bringing together
              expertise in pain management and mental health.
            </p>
            <ul className="ketamine-proof-list">
              <li>
                <strong>Physician-led care</strong>
                <span>
                  Experienced, board-certified doctors guide your evaluation and treatment.
                </span>
              </li>
              <li>
                <strong>A plan for your needs</strong>
                <span>Discuss your treatment history, options and expectations with our team.</span>
              </li>
              <li>
                <strong>In-clinic supervision</strong>
                <span>Ketamine treatment takes place in our Torrance clinical setting.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        className="ketamine-section ketamine-process"
        id="process"
        aria-labelledby="process-title"
      >
        <div className="ketamine-container">
          <div className="ketamine-section-heading">
            <p className="ketamine-eyebrow">A clear next step</p>
            <h2 id="process-title">
              From your first questions
              <br />
              to your next step
            </h2>
          </div>
          <div className="ketamine-step-grid">
            <article className="ketamine-step">
              <span aria-hidden="true">01</span>
              <h3>Take the assessment</h3>
              <p>
                Explore your goals, preferences and practical next steps in a short, private
                assessment. Choose whether you would like our team to follow up.
              </p>
            </article>
            <article className="ketamine-step">
              <span aria-hidden="true">02</span>
              <h3>Speak with our team</h3>
              <p>
                If you request follow-up, our team will discuss scheduling, pricing and what to
                expect at a clinical evaluation.
              </p>
            </article>
            <article className="ketamine-step">
              <span aria-hidden="true">03</span>
              <h3>Review your treatment plan</h3>
              <p>
                A clinician evaluates whether ketamine is appropriate for you and explains the
                recommended treatment approach.
              </p>
            </article>
          </div>
          <Actions section="process" />
        </div>
      </section>
      <section className="ketamine-section" id="pricing" aria-labelledby="pricing-title">
        <div className="ketamine-container ketamine-pricing-grid">
          <div>
            <p className="ketamine-eyebrow">Know what to expect</p>
            <h2 id="pricing-title">Ketamine Treatment Cost</h2>
            <p>
              Clear pricing helps you plan your next step. Ketamine treatment at Pacific Pain
              & Wellness Group is self-pay and is not covered by insurance.
            </p>
            <p>
              Our team will explain the applicable treatment plan and confirm your total before you
              begin.
            </p>
          </div>
          <div className="ketamine-price-card">
            <p className="ketamine-price">
              <strong>$650</strong> per session
            </p>
            <p className="ketamine-course">
              Five-session minimum <strong>$3,250</strong>
            </p>
            <ButtonKetamine section="pricing" />
            <p className="ketamine-note">Taking the assessment does not commit you to treatment.</p>
          </div>
        </div>
      </section>
      <section
        className="ketamine-section ketamine-soft"
        id="testimonials"
        aria-labelledby="testimonial-title"
      >
        <div className="ketamine-container">
          <div className="ketamine-section-heading">
            <p className="ketamine-eyebrow">The patient experience</p>
            <h2 id="testimonial-title">What patients say about Pacific Pain & Wellness Group</h2>
            <p>These reviews describe individual experiences at our practice.</p>
          </div>
          <div className="ketamine-review-grid">
            <figure className="ketamine-review">
              <blockquote>
                “Everyone was helpful and attentive, from the front desk staff, to the nurse and the
                PA. The appointment ran on time. My issue was addressed and I was scheduled for my
                procedure the very next week. Office is clean and comfortable. I would highly
                recommend the services of Pacific Pain & Wellness.”
              </blockquote>
              <figcaption>
                <strong>Kery W.</strong>
                <span>General practice experience</span>
              </figcaption>
            </figure>
            <figure className="ketamine-review">
              <blockquote>
                “This is a very respectable and professional place the staff is is nice and
                welcoming, I keep coming back because they make me feel comfortable with myself.”
              </blockquote>
              <figcaption>
                <strong>Alice C.</strong>
                <span>General practice experience</span>
              </figcaption>
            </figure>
            <figure className="ketamine-review">
              <blockquote>
                “I loved my experience here. I came here with chronic pain & depression & received
                TMS & ketamine therapy. Changed my life, for the BETTER . I came for treatments
                every day (except weekends) for many weeks. I looked forward to each visit as I
                continued to feel the positive effects of the treatments I received.”
              </blockquote>
              <figcaption>
                <strong>Joshua B.</strong>
                <span>Combined TMS and ketamine experience</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="ketamine-section" id="faq" aria-labelledby="faq-title">
        <div className="ketamine-container ketamine-faq-wrap">
          <div className="ketamine-section-heading">
            <p className="ketamine-eyebrow">Your questions, answered</p>
            <h2 id="faq-title">About ketamine care at PPWG</h2>
          </div>
          <div className="ketamine-faq">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section
        className="ketamine-section ketamine-closing"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="ketamine-container ketamine-split">
          <div>
            <p className="ketamine-eyebrow">Let’s talk about your next step</p>
            <h2 id="contact-title">
              Talk With Our Torrance
              <br />
              Ketamine Team
            </h2>
            <p>
              Take the private assessment to explore ketamine care for mental health or pain.
              You can request follow-up or call our team to discuss your next step.
            </p>
            <Actions section="closing" light />
            <p className="ketamine-note">Private assessment · In-clinic care in Torrance</p>
          </div>
          <StaticImage
            src="../images/change-your-life-today-v3.png"
            alt="Three people smiling"
            className="ketamine-closing-image"
          />
        </div>
      </section>
      <nav className="ketamine-mobile-actions" aria-label="Contact our ketamine team">
        <ButtonKetamine section="mobile-bar">Take the assessment</ButtonKetamine>
        <a
          href="tel:+13104377399"
          className="ketamine-button ketamine-button--outline"
          data-service="ketamine"
          data-cta="call-cta"
          data-section="mobile-bar"
          aria-label="Call our ketamine team at 310 437 7399"
        >
          Call
        </a>
      </nav>
    </div>
  </Layout2>
);
const PageMetadata = () => (
  <Helmet htmlAttributes={{ lang: 'en' }}>
    <title>Ketamine Therapy in Torrance | Pacific Pain & Wellness Group</title>
    <meta
      name="description"
      content="Explore physician-led ketamine therapy for mental health and pain in Torrance. Serving South Bay and Long Beach. Take the private assessment."
    />
    <link rel="canonical" href="https://ketamine.pacificpaingroup.com/" />
    <meta property="og:title" content="Ketamine Therapy in Torrance | Pacific Pain & Wellness Group" />
    <meta
      property="og:description"
      content="Physician-led ketamine treatment for mental health and pain in Torrance, serving South Bay and Long Beach."
    />
    <meta property="og:url" content="https://ketamine.pacificpaingroup.com/" />
    <meta property="og:type" content="website" />
  </Helmet>
);
export default IndexPage;
