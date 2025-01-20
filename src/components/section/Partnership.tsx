import React from "react";
import Container from "../ui/Container";
import undp from "../../../public/assets/images/undp.jpg";
import expo from "../../../public/assets/images/expo.png";
import Google from "../../../public/assets/icons/Google";

const Partnership = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between items-center my-6 gap-6 md:gap-12">
        {/* UNDP Logo */}
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
          <img
            src="/assets/images/undp.jpg"
            alt="UNDP Logo"
            className="w-40 h-48 object-contain"
          />
          <p className="font-semibold text-center md:text-left md:ml-4">
            Asia Pacific <br /> SDG Enterprise Award
          </p>
        </div>
        <div className=" md:border-r border-1 border-black w-full md:h-40 mb-4 md:mb-0 md:w-px"></div>

        {/* Expo Logo */}
        <div className="flex flex-col justify-center items-center mb-4 md:mb-0">
          <p className="text-xl font-semibold text-center md:text-left">
            In Association With
          </p>
          <img
            src="/assets/images/expo.png"
            alt="Expo Logo"
            className="w-32 h-36 object-contain"
          />
        </div>
        <div className="md:border-r border-1 border-black w-full md:h-40 mb-4 md:mb-0 md:w-px"></div>

        {/* Google Icon (SVG) */}
        <div className="flex flex-col justify-center items-center">
          <Google className="w-40 h-fit mb-2" />
          <p className="font-semibold text-center">
            Winner of Google Business Group Stories
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Partnership;
