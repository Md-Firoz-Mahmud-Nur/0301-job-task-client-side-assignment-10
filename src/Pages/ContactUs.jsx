import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-blue-50 p-6 lg:p-12 container mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Contact Us</h1>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-gray-600 mb-4">
          At Gadget Galaxy, we are committed to providing exceptional customer service. Whether you have questions about our products or need assistance, feel free to contact us. We’re here to help!
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Information</h2>
          <p className="text-lg text-gray-600 mb-2">
            <strong>HelpLine:</strong> +12 345 67 89
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Email:</strong> support@gadgetgalaxy.com
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Address:</strong> 115 Maryland St., Winnipeg, MB
          </p>
          <p className="text-lg text-gray-600 mb-2">
            Providing electronic sales services since 2023
          </p>
          <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-4">Business Hours</h2>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Saturday:</strong> 10:00 AM - 4:00 PM
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>Sunday:</strong> Closed
          </p>
          <h2 className="text-2xl font-semibold text-blue-500 mt-6 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-4">
            Have questions or want to share feedback? Fill out our <strong>contact form</strong> and our team will get back to you as soon as possible.
          </p>
          <p className="text-sm font-semibold mt-8">
            Copyright © 2024 Gadget Galaxy - All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
