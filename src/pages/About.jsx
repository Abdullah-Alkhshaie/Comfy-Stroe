import React from "react";

function About() {
  return (
    <div className="px-10  mx-auto mt-32 flex flex-col justify-center md:w-[800px] items-center">
      <h1 className="text-5xl lg:text-7xl text-cyan-900 font-semibold mb-10">
        We love{" "}
        <span className="text-white rounded-lg py-2 px-4 bg-blue-600">
          Comfy
        </span>
      </h1>
      <p className="leading-8 md:leading-10 text-lg lg:text-2xl text-cyan-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
        quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio
        aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed
        officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
      </p>
    </div>
  );
}

export default About;
