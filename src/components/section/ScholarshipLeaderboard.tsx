import React, { useState } from "react";
import data from "../../../public/assets/data/leaderboard.json";
import Container from "../ui/Container";

const ScholarshipLeaderboard = () => {
  const [visibleCount, setVisibleCount] = useState(6); // Initially display 5 items

  // Function to handle showing more items
  const handleShowMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 3, data.length)); // Add 3 more or stop at the end
  };

  // Render the Grouped Avatar for users with multiple images
  const renderGroupedAvatars = (avatars: string[]) => {
    return (
      <div className="flex -space-x-2">
        {avatars?.slice(0, 3).map((avatar, index) => (
          <img
            key={index}
            src={avatar} // Assuming avatars are URL or local paths
            alt={`Avatar ${index}`}
            className="w-12 h-12 rounded-full border-2 border-white -ml-2"
          />
        ))}
        {avatars?.length > 3 && (
          <div className="bg-gray-300 rounded-full flex justify-center items-center w-8 h-8 ml-2">
            <span className="text-xs font-semibold text-white">
              +{avatars.length - 3}
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 bg-white">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-lg text-green-400 font-bold">
          #alteryouthrevolution
        </h1>
        <h2 className="text-2xl text-center m-2 font-semibold">
          The Scholarship Community
        </h2>
        <p className="text-center text-sm leading-6">
          Despite public primary schools being free of cost in Bangladesh, <br /> many
          students still drop out of school to work and earn in order to support
          their families. <br /> Your scholarship helps a child attend school
          and support their families at the same time.
        </p>
      </div>

      {/* Displaying Leaderboard Data with Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.slice(0, visibleCount).map((item, index) => (
          <div
            key={index}
            className="shadow-md rounded-lg py-6 px-6 bg-white flex flex-col justify-between items-center"
          >
            {/* Left side data: Name, Scholarship count, Date */}
            <div className="mb-4 text-center">
              <p className="text-lg font-bold text-gray-800">@{item.name}</p>
              <p className="text-sm bg-green-50 p-1 px-2 rounded-lg my-3 text-green-500 font-semibold">
                {item.count} scholarship
              </p>
              <p className="text-xs text-gray-400">
                {new Date(item.started_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Right side data: Grouped Avatars */}
            <div className="flex items-center justify-center">
              {renderGroupedAvatars(item.student_imgs)}
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < data.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="py-2 px-6 rounded-lg text-green-400 text-lg font-bold transition"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default ScholarshipLeaderboard;
