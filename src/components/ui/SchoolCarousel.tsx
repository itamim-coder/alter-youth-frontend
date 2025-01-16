import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import schools from "../../../public/assets/data/schools.json";
import {
  Button,
  Dialog,
  DialogHeader,
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

  const handleOpen = () => setOpen(!open);
  return (
    <div className="slider-container py-9 overflow-hidden">
      <Slider {...settings}>
        {schools.map((school, index) => (
          <div
            key={index}
            onClick={handleOpen}
            className="flex flex-col w-48 items-center gap-4 bg-white rounded-lg md:p-3 p-2"
          >
            <img
              src={`/assets/images/school${school?.school_img_id}.jpeg`}
              alt={`${school.name} Image`}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="flex flex-col  mt-2">
              <h3 className="text-base font-bold mb-1">{school.name}</h3>
              <p className="text-sm text-gray-500">{school.location}</p>
            </div>
          </div>
        ))}
      </Slider>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { translateY: "0%", opacity: 1 }, // Starts from bottom
          unmount: { translateY: "100%", opacity: 0 }, // Slides out
        }}
      >
        <DialogHeader>Its a simple modal.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default SchoolCarousel;
