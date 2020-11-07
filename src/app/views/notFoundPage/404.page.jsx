// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>
import NoteFoundFlag from "../../components/404NotFound/404NoteFound.component";

// UTILITIES IMPORTS::==>

// COMPONENT IMPORTS::==>
const NotFoundPage = () => {
  const ErrorMsg = " It seems you followed a broken links...";
  return (
    <>
      <NoteFoundFlag msgTxt={ErrorMsg} />
    </>
  );
};

export default NotFoundPage;
