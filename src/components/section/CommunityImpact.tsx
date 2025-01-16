import React from "react";
import Container from "../ui/Container";
import CommunityCarousel from "../ui/CommunityCarousel";

const CommunityImpact = () => {
  return (
    <div>
      <Container>
        <h2 className="text-2xl font-semibold mb-3">Community Impact</h2>
        <p className="text-sm">
          Every scholarship begins with shipping a mobile phone to the parent of
          the student. Then they create their own mobile bank account <br />{" "}
          using that phone, to start receiving their child's scholarships
          directly, every month.
        </p>
      </Container>
      <CommunityCarousel />
    </div>
  );
};

export default CommunityImpact;
