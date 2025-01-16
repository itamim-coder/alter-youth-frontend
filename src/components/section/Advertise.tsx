import React from "react";
import Container from "../ui/Container";
import headteacher from "../../../public/assets/images/headteacher.jpg";
import person from "../../../public/assets/images/person.jpg";
import applicant from "../../../public/assets/images/applicant.jpg";

const Advertise = () => {
  return (
    <Container>
      <div className="mb-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="relative group lg:h-[30rem] rounded-lg overflow-hidden shadow-lg cursor-pointer">
          {/* Background image with zoom effect */}
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundImage: `url(${headteacher.src})`,
            }}
          ></div>

          {/* Text Content */}
          <div className="absolute top-4 p-3 left-4 z-10 text-white">
            <h2 className="text-3xl font-bold whitespace-pre-line">
              Are you a teacher?{"\n"}
              Get your students{"\n"}listed on the platform
            </h2>

            <ul className="text-sm py-2 underline">Download the school app</ul>
          </div>

          {/* Bottom Positioned Text */}
          <div className="absolute w-full bottom-4   text-xs text-white text-center">
           Only for Government Primary Schools in Bangladesh
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group lg:h-[30rem] rounded-lg overflow-hidden shadow-lg cursor-pointer">
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundImage: `url(${person.src})`,
            }}
          ></div>
          <div className="absolute top-4 p-3 left-4 z-10 text-white">
            <h2 className="text-3xl font-bold whitespace-pre-line">
              You can be{"\n"}anywhere{"\n"}in the world
            </h2>

            <ul className="text-sm py-2 underline">See all scholarships</ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative group lg:h-[30rem] rounded-lg overflow-hidden shadow-lg cursor-pointer">
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundImage: `url(${applicant.src})`,
            }}
          ></div>
          <div className="absolute top-4 p-3 left-4 z-10 text-white">
            <h2 className="text-3xl font-bold whitespace-pre-line">
              While students{"\n"}get closer to{"\n"}their dreams
            </h2>

            <ul className="text-sm py-2 underline">See all graduates</ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Advertise;
