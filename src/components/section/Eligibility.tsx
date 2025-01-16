import React from "react";
import Container from "../ui/Container";
import DisableFather from "../../../public/assets/icons/DisabledFather";
import SingleMother from "../../../public/assets/icons/SingleMother";
import Orphan from "../../../public/assets/icons/Orphan";
const Eligibility = () => {
  return (
    <Container>
      <div className="py-9">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-3">
            Scholarship Eligibility
          </h2>
          <p>
            Only students who are currently enrolled in Government Primary
            Schools and fall <br /> under any of the following criteria are
            eligible to apply for scholarships
          </p>
        </div>
        <div className="py-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="flex items-center p-6 gap-6 shadow-xl rounded-xl">
              <DisableFather className="w-[3rem] h-[3rem] " />
              <div>
                <h5 className="text-base font-semibold">Disabled Father</h5>
                <p>Student's father is physically unable to work</p>
              </div>
            </div>
            <div className="flex items-center p-6 gap-6 shadow-lg rounded-lg">
              <SingleMother className="w-[3rem] h-[3rem] "/>
              <div>
                <h5 className=" font-semibold">Single Mother</h5>
                <p>Student's father is deceased or has abandoned the family</p>
              </div>
            </div>
            <div className="flex items-center p-6 gap-6 shadow-lg rounded-lg">
              <Orphan className="w-[3rem] h-[3rem] "/>
              <div>
                <h5 className=" font-semibold">Orphan</h5>
                <p>Both parents are deceased or have abandoned the child</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        
      </div>
    </Container>
  );
};

export default Eligibility;
