import React from "react";

const ParticipantsNote = ({ title, participantsNoteData, language }) => {
  return (
    <div className="lg:px-20 px-5">
      <h1 className="mt-20 mb-5 text-2xl text-cN600 font-extrabold">{title}</h1>

      {participantsNoteData && participantsNoteData.map((note, index) => (
        <div key={index} >
          <p>{note.note[language]}</p>
          {note.req && <p className="py-5">{note.req[language]}</p>}
          {note.image && (
            <div className="lg:px-40 py-5">
              <img
                src={note.image}
                alt={note.alt}
                className="lg:w-auto lg:h-96 w-full h-full rounded-md mb-4"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ParticipantsNote;
