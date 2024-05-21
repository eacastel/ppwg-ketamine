import React from 'react';
import Layout2 from '../components/layout/Layout2';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import ButtonKetamine from '../components/ButtonKetamine';

const Inside = () => {
  return (
    <Layout2>

      {/* First Section */}

      <section className="bg-hero-pattern bg-no-repeat bg-cover md:bg-custom-large bg-custom-small overflow-hidden">
        <div className="container mx-auto px-4 py-8 z-10 w-full">

          <div className="grid grid-cols-1 md:grid-cols-9 gap-4">
            <div className="md:col-span-5 text-left">
              <div className="mt-8">
                <div className="text-lg leading-6 font-semibold uppercase tracking-wide text-gray-700 py-4">Transform Your Life</div>
                <h1 className="mb-2 text-4xl font-poppins font-semibold tracking-tight leading-tight md:text-5xl">Safe In-Clinic<br />Ketamine Therapy</h1>
                <p className="text-lg leading-8 text-gray-800 max-w-prose">
                  Is traditional care not getting the results you’re looking for? It’s time to try something new: Holistic, evidence-based programs, including <strong>ketamine therapy</strong> and integration, to help you achieve personal and clinical breakthroughs.
                </p>
                <div className="my-6 border-b border-gray-200 w-full"></div>
                <div className="text-base leading-8 text-gray-800">
                  Affordable treatments as low as<br /><span className="font-semibold text-2xl">$650 per session</span><br />
                  <span className=' text-sm leading-none'>Health insurance is not accepted at this time.</span>
                </div>
                <div className="inline-block pt-4 mt-6 py-6 ">
                <ButtonKetamine size="lg">Am I a Candidate?</ButtonKetamine>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-1"></div>
          </div>
        </div>
        <div className="md:hidden">
        <StaticImage src="../images/hero-banner-mobile.png" alt="happy smiling 30 year old attractive brunette in a thick cotton sweater" className="w-full object-cover z-10 md:hidden"  />
        </div>
      </section>
      <div className="bg-blue-600 w-full h-2"></div>


      {/* Second Section */}

      <section id="approach" className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Headline Centered */}
          <div className="text-center mb-10">
            <div className="text-xl font-normal mb-4 text-gray-600">Experience the Difference in Comprehensive Care</div>
            <h2 className="mb-2 text-4xl font-poppins font-semibold tracking-tight leading-tight md:text-5xl">Choose Pacific Pain & Wellness for Ketamine</h2>
          </div>

          {/* Grid layout for video and text content for md and lg screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image/Video Thumbnail */}
            <StaticImage src="../images/relax-top.jpg" alt="Woman relaxing at home after on-site ketamine infusions" className="mx-auto rounded-lg"  />

            {/* Text Content */}
            <div className="space-y-5">
              <p className="text-xl text-bold text-gray-700">
              Choosing Pacific Pain & Wellness Group (PPWG) for ketamine infusion therapy ensures unparalleled safety, supervision, and comprehensive care. At PPWG, ketamine infusions are administered by experienced, board-certified doctors specializing in pain management and mental health.
              </p>
              <p className="text-base text-gray-600">
              The clinic’s integrative approach blends cutting-edge treatments with traditional therapies, offering a holistic solution for both mind and body. This model aims to significantly and lastingly improve mental health and pain levels. Additionally, our state-of-the-art facility in Torrance, CA, provides a supportive and comfortable environment, enhancing the treatment experience.
              </p>
              <p className="text-base text-gray-600">
              PPWG’s multidisciplinary team of healthcare professionals offers personalized and professional care, crucial for effectively managing complex conditions. This structured, medically supervised treatment plan reduces risks associated with unsupervised ketamine use, maximizing therapeutic benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}

      <section id="process" className="py-20 bg-gradient-to-r from-blue-100 to-blue-300">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-xl font-normal mb-4 text-gray-600">The Process</div>
            <h2 className="mb-2 text-4xl font-poppins font-semibold tracking-tight leading-tight md:text-5xl">You deserve to feel better.</h2>
            <p className="font-normal text-xl leading-relaxed text-gray-700">
            Leading the Way in On-Site Ketamine Infusions: Expertly Supervised Mental Health and Pain Management Since 2015
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Process Step 1 */}
            <div className="bg-white shadow-lg rounded-xl p-8">
              <div className="text-purple-500 font-poppins text-6xl">01</div>
              <h3 className="font-poppins font-semibold text-xl mb-4">Take the Assessment</h3>
              <p className="font-normal text-lg leading-relaxed text-gray-700">
              Begin your path to wellness with a brief assessment to understand if Ketamine therapy suits your needs. Pacific Pain & Wellness Group has fine-tuned its ketamine protocol since 2013 to yield the most effective and long-lasting results for patients.
              </p>
            </div>

            {/* Process Step 2 */}
            <div className="bg-white shadow-lg rounded-xl p-8">
              <div className="text-purple-500 font-poppins text-6xl">02</div>
              <h3 className="font-poppins font-semibold text-xl mb-4">Make an appointment</h3>

                <p className="font-normal text-lg leading-relaxed text-gray-700">
                If qualified, you can <a href="https://pacificpaingroup.com/request-an-appointment" target="_blank" className="text-blue-600 hover:text-blue-800">schedule a consultation</a> with one of our healthcare professionals at our state-of-the-art facility by filling out the consultation information form. <strong>Same week appointments available.</strong>
              </p>
            </div>

            {/* Process Step 3 */}
            <div className="bg-white shadow-lg rounded-xl p-8">
              <div className="text-purple-500 font-poppins text-6xl">03</div>
              <h3 className="font-poppins font-semibold text-xl mb-4">Start feeling better</h3>
              <p className="font-normal text-lg leading-relaxed text-gray-700">
              After you submit your assessment our staff will contact you to schedule an on-site ketamine infusion appointment and provide a safe and supportive environment for your healing journey. Get started today!
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
        
                <ButtonKetamine size="lg">Take The Asessment</ButtonKetamine>
                </div>
        </div>
      </section>


      {/* Fourth Section */}


      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-2 text-4xl font-poppins font-semibold tracking-tight leading-tight md:text-5xl">Client Success Stories</h2>
            <p className="font-medium text-lg">Better Together</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="space-y-4">
            <div className="flex justify-center">
            <StaticImage src="../images/testimonial-beth.jpg" alt="John's ketamine testimonial" className="mx-auto rounded-full lg:w-3/4" />
            </div>
              <p className="text-center text-gray-600">“Everyone was helpful and attentive, from the front desk staff, to the nurse and the PA. The appt ran on time. My issue was addressed and I was scheduled for my procedure the very next week. Office is clean and comfortable. I would highly recommend the services of Pacific Pain & Wellness”</p>
              <p className="text-center font-semibold">Kery W.</p>
              <p className="text-center text-sm text-gray-500">Pacific Pain & Wellness Client</p>
            </div>
            {/* Testimonial 2 */}
            <div className="space-y-4">
            <div className="flex justify-center">
            <StaticImage src="../images/testimonial-alice.jpg" alt="John's ketamine testimonial" className="mx-auto rounded-full lg:w-3/4" />
            </div>
              <p className="text-center text-gray-600">“This is a very respectable and professional place the staff is is nice and welcoming, I keep coming back because they make me feel comfortable with myself.”</p>
              <p className="text-center font-semibold">Alice C.</p>
              <p className="text-center text-sm text-gray-500">Pacific Pain & Wellness Client</p>
            </div>
            {/* Testimonial 3 */}
            <div className="space-y-4">
            <div className="flex justify-center">
            <StaticImage src="../images/testimonial-john.jpg" alt="John's ketamine testimonial" className="mx-auto rounded-full lg:w-3/4" />
            </div>
              <p className="text-center text-gray-600">“I loved my experience here. I came here with chronic pain & depression & received TMS & ketamine therapy. Changed my life, for the BETTER . I came for treatments Every day (xcept weekends) for many weeks. I looked forward to each visit as I continued to feel the Positive effects of the treatments I receeived. ”</p>
              <p className="text-center font-semibold">Joshua B.</p>
              <p className="text-center text-sm text-gray-500">Pacific Pain & Wellness Client</p>
            </div>
          </div>
        </div>
      </section>


      {/* Fifth Section */}


      <section id="contact" className="bg-gradient-to-r from-blue-500 to-teal-500 py-20">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-4xl font-bold text-white mb-4">Transform Your Tomorrow Today.</h2>
            <p className="text-lg text-white mb-6"> Discover how personalized, in-clinic ketamine therapy, administered by caring and experienced professionals, can unlock a future of well-being and endless potential.</p>
            
            <div className="inline-block pt-4 mt-6 py-6 ">
            <ButtonKetamine size="lg" variant="secondary">Take the Assessment</ButtonKetamine>
            </div>

          </div>
          <StaticImage src="../images/change-your-life-today-v3.png" alt="Pacific Pain & Wellness Group Logo" className="w-full md:w-1/2 h-auto" />
        </div>
      </section>


    </Layout2>
  );
};

export default Inside;