import React from 'react';
import ReactPlayer from 'react-player';

const Review = ({ title, description, videoLink }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mx-2 my-4 w-full h-full">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <div className="mt-4">
        <ReactPlayer
          url={videoLink}
          width="100%"
          height="200px"
          controls
          light= "100%"
        />
      </div>
    </div>
  );
};

export default Review;
