import React from 'react';
import Card from './Card';
import { StaticImage } from 'gatsby-plugin-image';

const CustomerCard = ({ customer }) => (
  <Card className="mb-8">
    <p className="text-xl font-semibold">{customer.title}</p>
    <p className="mt-6">{customer.content}</p>
    <div className="flex items-center mt-8">
    <StaticImage src="../images/5-stars.png" alt="5 star review for Pacific Pain & Wellness Group Offices in Torrance, CA" className="" />

    </div>
  </Card>
);

export default CustomerCard;
