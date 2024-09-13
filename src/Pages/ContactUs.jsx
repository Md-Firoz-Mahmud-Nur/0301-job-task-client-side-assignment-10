const ContactUs = () => {
  return (
    <div className="container mx-auto bg-blue-50 p-6 lg:p-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-blue-600">
        Contact Us
      </h1>
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-lg text-gray-600">
          At Gadget Galaxy, we are committed to providing exceptional customer
          service. Whether you have questions about our products or need
          assistance, feel free to contact us. We’re here to help!
        </p>
        <div className="mt-8">
          <div className="justify-evenly md:my-6 md:grid md:grid-cols-7">
            <div className="col-span-3">
              <h2 className="mb-4 text-2xl font-semibold text-blue-500">
                Our Information
              </h2>
              <p className="mb-2 text-lg text-gray-600">
                <strong>HelpLine:</strong> +12 345 67 89
              </p>
              <p className="mb-2 text-lg text-gray-600">
                <strong>Email:</strong> support@gadgetgalaxy.com
              </p>
              <p className="mb-2 text-lg text-gray-600">
                <strong>Address:</strong> 115 Maryland St., Winnipeg, MB
              </p>
              <p className="mb-2 text-lg text-gray-600">
                Providing electronic sales services since 2023
              </p>
            </div>
            <div className="col-span-1 flex justify-center">
              <div className="border-blue-600 md:border"></div>
            </div>
            <div className="col-span-3">
              <h2 className="mb-4 mt-6 text-2xl font-semibold text-blue-500 md:mt-0">
                Business Hours
              </h2>
              <p className="mb-2 text-lg text-gray-600">
                <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
              </p>
              <p className="mb-2 text-lg text-gray-600">
                <strong>Saturday:</strong> 10:00 AM - 4:00 PM
              </p>
              <p className="mb-2 text-lg text-gray-600">
                <strong>Sunday:</strong> Closed
              </p>
            </div>
          </div>
          <h2 className="mb-4 mt-6 flex justify-center text-2xl font-semibold text-blue-500">
            Get in Touch
          </h2>
          <p className="mb-4 text-lg text-gray-600">
            Have questions or want to share feedback? Fill out our{" "}
            <strong>contact form</strong> and our team will get back to you as
            soon as possible.
          </p>
          <p className="mt-8 text-sm font-semibold">
            Copyright © 2024 Gadget Galaxy - All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
