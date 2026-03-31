import React from "react";

const InstructorCard = ({ name, affiliation, url }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div
      className="w-96 h-32 bg-cWhite rounded-md shadow-md p-4 m-3 overflow-hidden flex flex-col justify-center items-center cursor-pointer hover:scale-110 hover:shadow-xl hover:text-cGreen"
      onClick={handleClick}
    >
      <h2 className="text-xl font-bold text-center">{name}</h2>
      <p className="mt-2 text-center">{affiliation}</p>
    </div>
  );
};

const InstructorsList = ({ instructors, instructorsTitle }) => {
  return (
    <div className="lg:px-20 px-5">
      <h1 className="mt-20 mb-5 text-2xl text-cN600 font-extrabold">
        {instructorsTitle}
      </h1>
      <div className="flex flex-wrap">
        {instructors &&
          instructors.map((instructor, index) => (
            <InstructorCard
              key={index}
              name={instructor.name}
              affiliation={instructor.affiliation}
              url={instructor.url}
            />
          ))}
      </div>
    </div>
  );
};

export default InstructorsList;
