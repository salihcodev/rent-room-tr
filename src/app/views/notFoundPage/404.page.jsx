// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>
import NoteFoundFlag from "../../components/404NotFound/404NoteFound.component";

// UTILITIES IMPORTS::==>

// COMPONENT IMPORTS::==>
const NotFoundPage = () => {
  const ErrorMsg = " It seems you followed a broken links...";
  
  document.title = `404 not fount Rent Room Project`;
  return (
    <main className="contactPage">
      <NoteFoundFlag msgTxt={ErrorMsg} />
    </main>
  );
};

export default NotFoundPage;
