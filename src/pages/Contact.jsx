// 2. Contact Page Implementation (Contact.jsx)
import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div id="contact" className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="bg-white p-6 shadow rounded-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              className="w-full border px-4 py-2 rounded"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Message</label>
            <textarea
              className="w-full border px-4 py-2 rounded"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-accent text-black px-4 py-2 rounded hover:bg-yellow-600"
          >
            Send Message
          </button>
        </form>

        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-bold mb-4">Our Office</h3>
          <p>123 Main Street, Cityville</p>
          <p>Operating Hours: Mon-Fri, 9am-5pm</p>
          <p>Phone: +1 234 567 890</p>
          <div className="mt-4">
            <iframe
              className="w-full h-48 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2004.6605262035469!2d3.3433381442540733!3d7.219621927962004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1735829226693!5m2!1sen!2sng"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;