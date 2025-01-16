import React, { useState } from "react";
import data from "../../../public/assets/data/leaderboard.json"; // Assuming the JSON data is imported from a file
import Container from "../ui/Container";

const ScholarshipLeaderboard = () => {
  const [visibleData, setVisibleData] = useState(9);

  const handleLoadMore = () => {
    setVisibleData((prev) => prev + 3);
  };

  return (
    <div className="p-5">
      <Container>
        <h1 className="text-center text-2xl font-semibold">
          Scholarship Leaderboard
        </h1>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-stretch mt-5">
          {data.slice(0, visibleData).map((item, index) => {
            const imgCount = item.student_imgs.length;

            // Dynamically adjust the card size based on the number of student images
            const cardSize =
              imgCount === 1
                ? "h-40"
                : imgCount === 2
                ? "h-60"
                : imgCount >= 3
                ? "h-80"
                : "h-auto";

            return (
              <div
                key={index}
                className={`border border-gray-300 rounded-lg p-4 text-center shadow-md flex flex-col justify-between h-fit`}
              >
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Invited by: {item.invited_by}
                </p>
                <div className=" gap-2  mt-4">
                  {item.student_imgs.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-stretch mt-5">
          {data.slice(0, visibleData).map((item, index) => {
            const imgCount = item.student_imgs.length;

            // Dynamically adjust the card size based on the number of student images
            const cardSize =
              imgCount === 1
                ? "h-40"
                : imgCount === 2
                ? "h-60"
                : imgCount >= 3
                ? "h-80"
                : "h-auto";

            return (
              <div
                key={index}
                className={`border border-gray-300 rounded-lg p-4 text-center shadow-md flex flex-col justify-between h-fit`}
              >
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Invited by: {item.invited_by}
                </p>
                <div className=" gap-2  mt-4">
                  {item.student_imgs.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        {visibleData < data.length && (
          <div className="text-center mt-5">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              See More
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ScholarshipLeaderboard;
