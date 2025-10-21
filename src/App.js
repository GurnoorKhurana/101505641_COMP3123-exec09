import React, { useState } from "react";
import Certificate from "./Certificate";
import "./App.css";

function App() {
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");

  return (
    <>

      <Certificate studentId={studentId} studentName={studentName} />
    </>
  );
}

export default App;
