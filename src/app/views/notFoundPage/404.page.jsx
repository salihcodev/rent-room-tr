// BASIC IMPORTS::==>
import React from "react";

// COMPONENTS IMPORTS::==>
import NoteFoundFlag from "../../components/404Page/404Page.component";

// UTILITIES IMPORTS::==>

// COMPONENT IMPORTS::==>
const NotFoundPage = () => {
  const ErrorMsg = "sorry, you followed a broken links...";
  return (
    <>
      <NoteFoundFlag msgTxt={ErrorMsg}></NoteFoundFlag>
    </>
  );
};

export default NotFoundPage;
