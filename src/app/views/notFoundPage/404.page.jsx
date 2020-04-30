// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>
import NoteFoundFlag from "../../components/404NoteFound/404NoteFound.component";

// UTILITIES IMPORTS::==>

// COMPONENT IMPORTS::==>
const NotFoundPage = () => {
  const ErrorMsg = "you followed a broken links...";
  return (
    <>
      <NoteFoundFlag msgTxt={ErrorMsg}></NoteFoundFlag>
    </>
  );
};

export default NotFoundPage;
