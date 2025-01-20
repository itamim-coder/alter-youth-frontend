import React from "react";
import Container from "../ui/Container";
import thumbnail from "../../../public/assets/images/ay_video_poster.jpg";
// import videoFile from '../../../public/assets/videos/ay_explainer.mp4';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const AppVideo = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <div className="flex flex-col md:flex-row py-9 justify-between items-center gap-8 md:gap-12">
        {/* Image Section with Play Button */}
        <div className="relative group w-full max-w-[36rem] h-[24rem] rounded-lg shadow-lg overflow-hidden mb-6 md:mb-0">
          {/* Background image with zoom effect */}
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundImage: `url(${thumbnail.src})`,
            }}
          ></div>

          {/* Play Button */}
          <div className="absolute inset-0 flex justify-center items-center">
            <button
              onClick={() => handleOpen()}
              className="w-16 h-16 rounded-full bg-gray-300 bg-opacity-80 flex justify-center items-center shadow-lg transform transition-transform duration-300 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2">
          <p className="text-2xl font-semibold mb-4">The Scholarship App</p>
          <p className="leading-7 text-gray-700 text-sm md:text-base">
            In Bangladesh, while 98% of children enroll in school, 2 million
            children drop out to work before achieving literacy in order to
            support their families financially. On the flipside, Bangladesh has
            a diaspora population of 10 million in advanced economies who wish
            to make an impact on their homeland.
            <br />
            <br />
            AlterYouth, imagine Uber for scholarships, is a C2C scholarship app
            enabling users from around the world to start scholarships directly
            for financially struggling students in Government Primary Schools of
            Bangladesh, through digital banking.
          </p>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog
        open={open}
        handler={() => setOpen(false)}
        animate={{
          mount: { translateY: "0%", opacity: 1 },
          unmount: { translateY: "100%", opacity: 0 },
        }}
      >
        <DialogBody className="p-0 relative">
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 z-10 left-6 text-sm bg-white text-gray-800 rounded-full p-2 shadow-lg focus:outline-none"
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

          {/* Video Player */}
          <div className="relative">
            <video className="h-full w-full rounded-lg" controls autoPlay>
              <source src="assets/videos/ay_explainer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogBody>
      </Dialog>
    </Container>
  );
};

export default AppVideo;
