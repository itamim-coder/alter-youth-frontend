import React from "react";
import SchoolCarousel from "../ui/SchoolCarousel";
import Container from "../ui/Container";

const School = () => {
  return (
    <div>
      <Container>
        <h2 className="text-2xl font-semibold mb-3">
          Students from Government Primary Schools Nationwide
        </h2>
      </Container>

      <SchoolCarousel />
    </div>
  );
};

export default School;
