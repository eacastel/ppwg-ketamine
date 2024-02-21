import React from 'react';
import Button from '../components/Button';
import CallButton from '../components/CallButton';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import customerData from '../data/customer-data';
import { StaticImage } from 'gatsby-plugin-image';

const Index = () => (
  <Layout>
    <section id="top" className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2 p-2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-blue-800">
            Mental Health & <br />Pain Management Solutions
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
          Find relief with our personalized <br />and innovative treatments
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
            <CallButton phoneNumber="(310) 437-7399" size="lg">Call Us Now</CallButton>

          </p>
          <p className="mt-4 text-gray-600">Take the first step towards your new life</p>
        </div>
        <div className="lg:w-1/2">
        <StaticImage src="../images/heroimage.jpg" alt="Pacific Pain & Wellness Group Logo" className="rounded-md shadow" />
        </div>
      </div>
    </section>
    <section id="services" className="py-20 lg:pb-40 lg:pt-40">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold text-blue-800">Our Services</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-2">
            <Card className="mb-8">
              <p className="font-semibold text-3xl text-blue-800">Pain Management</p>
              <p className="font-semibold text-xl mt-4 text-gray-600">
              Uncover a life with less pain through innovative and personalized pain management treatments.
              </p>
              <p className="mt-4">
              We offer specific pain management treatments for complex regional pain syndrome (CRPS), neuropathic pain, migraines, as well as muscular, skeletal (bone), neuropathic (produced by injured nerves), post-surgical pain, and cancer pain.
              </p>
              <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
          </p>
            </Card>
          </div>
          <div className="flex-1 px-2">
            <Card className="mb-8">
              <p className="font-semibold text-3xl text-blue-800">Mental Health</p>
              <p className="font-semibold text-xl mt-4 text-gray-600">
              Discover a safe path towards mental balance with therapies tailored to your individual needs.
              </p>
              <p className="mt-4">
              We offer treatment for a range of mental health disorders, including anxiety, depression, and PTSD. Our licensed mental health providers have decades of collective experience providing psychiatric care and psychotherapy services to help individuals overcome these challenges.
              </p>
              <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
          </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="about"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">About Us</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Pacific Pain & Wellness Group is the premier pain management and mental health clinic in Torrance, CA, that offers a wide array of services. Our team of experts provides evidence-based personalized solutions to heal patients suffering from chronic pain and mental health conditions, utilizing both traditional and new treatments. We offer in-person and telehealth appointments to ensure accessible care for our patients.
          </p>
        </div>
      }
      secondarySlot={<StaticImage src="../images/Pacific-Pain-and-Wellness-Group.jpg" alt="Pacific Pain & Wellness Group Offices in Torrance, CA" className="rounded-md shadow" />}
    />
    <SplitSection
    id="dr-ananth"
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Dr. Kartik Ananth, MD, MBA
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Dr. Ananth has dedicated his life to helping patients overcome challenges so they can enjoy a fuller life. His initial interest  in medicine stemmed from his father, who was also a physician. As a child he admired his father’s knowledge and passion for patient care. From an early age, Dr. Ananth dove into science to learn more about how it can be used to help people.


          </p>
        </div>
      }
      secondarySlot={<StaticImage src="../images/dr-kartik-ananth.jpg" alt="Pacific Pain & Wellness Group Offices in Torrance, CA" className="rounded-md shadow" />}
    />
    <SplitSection
      id="about"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
          Our focus is on you - your comfort, your satisfaction, and your healing
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
        Our services are centered around you, with convenient and quick appointments for patients to see a provider via telehealth for mental health and in-person for pain management. We understand that pain and mental health are deeply interconnected, which is why we offer a complete mind and body solution to help you achieve overall wellness. Our state-of-the-art facility and convenient parking make every visit as easy and stress-free as possible. 
          </p>
        </div>
      }
      secondarySlot={<StaticImage src="../images/tms-room.jpg" alt="Pacific Pain & Wellness Group Offices in Torrance, CA" className="rounded-md shadow" />}
    />
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What our patients are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to begin your healing journey?</h3>
      <p className="mt-8 text-xl font-light">
      At Pacific Pain & Wellness, we are committed to helping you achieve sustainable relief and restoring your life.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
        <CallButton phoneNumber="(310) 437-7399" size="xl">Call Us Now</CallButton>
      </p>
    </section>
  </Layout>
);

export default Index;
