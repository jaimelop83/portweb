import React from "react";
import { InlineWidget } from "react-calendly";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-200 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-700">Contact Me</h2>
        <p className="text-gray-600 mt-4">
          Have a question or want to work together?
        </p>
        <form className="w-full max-w-sm mx-auto mt-20">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="mt-8">
            <InlineWidget url="https://calendly.com/gvsolutions" />
            </div>
      </div>
    </section>
  );
};

export default Contact;
