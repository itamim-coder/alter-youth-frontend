import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import schools from "../../../public/assets/data/schools.json";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function SchoolCarousel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "220px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
    ],
  };

  const [open, setOpen] = React.useState(false);
  const [selectedSchool, setSelectedSchool] = React.useState(null);

  const handleOpen = (school) => {
    setSelectedSchool(school);
    setOpen(!open);
  };

  return (
    <div className="slider-container mb-6 overflow-hidden">
      <Slider {...settings}>
        {schools.map((school, index) => (
          <div
            key={index}
            onClick={() => handleOpen(school)}
            className="flex flex-col w-48 items-center gap-4 bg-white rounded-lg md:p-3 p-2 cursor-pointer"
          >
            <img
              src={`/assets/images/school${school.school_img_id}.jpeg`}
              alt={`${school.name} Image`}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="flex flex-col mt-2">
              <h3 className="text-base font-bold mb-1">{school.name}</h3>
              <p className="text-sm text-gray-500">{school.location}</p>
            </div>
          </div>
        ))}
      </Slider>

      {selectedSchool && (
        <Dialog
          open={open}
          handler={() => setOpen(false)}
          animate={{
            mount: { translateY: "0%", opacity: 1 },
            unmount: { translateY: "100%", opacity: 0 },
          }}
          //   size="xl"
        >
          <DialogBody className="p-0 relative">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 z-10  left-6 text-sm bg-white text-gray-800 rounded-full p-2 shadow-lg focus:outline-none"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Image */}
            <div className="relative">
              <img
                src={`/assets/images/school${selectedSchool.school_img_id}.jpeg`}
                alt={`${selectedSchool.name} Image`}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            </div>
            {/* School Details */}
            <div className="p-6">
              <h2 className="text-md text-black font-semibold">
                {selectedSchool.name}
              </h2>
              <p className="text-xs bg-green-500 w-fit rounded-md text-white p-1 mb-4">
                {selectedSchool.total_applicants} Scholarship Applicants
              </p>
              <p className="text-xs text-gray-500  mb-4">
                {selectedSchool.location}, Bangladesh
              </p>
              <p className="text-sm text-black mb-4">
                Established in {selectedSchool.year_established} in{" "}
                {selectedSchool.location}, Bangladesh. It now hosts{" "}
                {selectedSchool.total_students} Students taught by{" "}
                {selectedSchool.total_teachers} Teachers.
              </p>
              <hr className="my-2 border-blue-gray-50" />
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={`/assets/images/ht${selectedSchool.ht_img_id}.jpeg`}
                  alt={`${selectedSchool.ht_name} Image`}
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <h4 className="text-sm font-semibold text-black">
                    {selectedSchool.ht_name}
                  </h4>
                  <p className="text-sm text-black">Class Teacher</p>
                </div>
              </div>
              <blockquote className="italic text-sm text-gray-700 mt-2">
                "{selectedSchool.ht_quote}"
              </blockquote>
            </div>
          </DialogBody>
        </Dialog>
      )}
    </div>
  );
}

export default SchoolCarousel;
