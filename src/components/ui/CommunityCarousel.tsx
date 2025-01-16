"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// Include your custom styles

const reviews = [
  { userImage: "assets/images/community_1.jpg" },
  { userImage: "assets/images/community_2.jpg" },
  { userImage: "assets/images/community_3.jpg" },
  { userImage: "assets/images/community_4.jpg" },
];

const CommunityCarousel = () => {
  return (
    <div className="py-12">
      <Splide
        options={{
          type: "loop",
          rewind: true,
          autoplay: true,
          arrows: true,
          pagination: true,
          perPage: 4,
          gap: "0rem",
          breakpoints: {
            1024: { perPage: 2, gap: "0rem", arrows: false },
            768: { perPage: 1, gap: "0rem", arrows: false },
          },
        }}
        aria-label="Tour Reviews"
      >
        {reviews.map((review, index) => (
          <SplideSlide key={index}>
            <div>
              <img src={review?.userImage} alt="" />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default CommunityCarousel;
