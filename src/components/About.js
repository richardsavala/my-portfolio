import React from "react";
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-items-center">
        <div className="lg:flex-grow md:w-1/2 ld:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi i'm Richard.
            <br className="hidden lg:inline-block" /> I like to code!
          </h1>
          <p className="mb-8 leading-relaxed">
            Studying web development since 2019, now seeking web development
            career opportunities.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Contact me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See my work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2.w-5/6">
          <img
            src="./portfolio-pic-2"
            alt="hero"
            className="object-cover object-center rounded"
          />
        </div>
      </div>
    </section>
  );
}
