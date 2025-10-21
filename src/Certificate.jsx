import React from "react";
import logo from "./logo.svg";

export default function Certificate({ studentId, studentName }) {
  return (
    <main className="cert-wrap">
      <div className="cert-card">
        <img src={logo} className="cert-logo" alt="React logo" />
        <h1 className="cert-title">Welcome to Fullstack Development - I</h1>
        <h2 className="cert-subtitle">React JS Programming Week09 Lab exercise</h2>

        <div className="cert-field">
          <div className="field-label">Your Student ID</div>
          <div className="field-value">{studentId || "101505641"}</div>
        </div>

        <div className="cert-field">
          <div className="field-label">Your Name</div>
          <div className="field-value">{studentName || "Gurnoor Khurana"}</div>
        </div>

        <div className="cert-footer">George Brown College, Toronto</div>
      </div>
    </main>
  );
}
