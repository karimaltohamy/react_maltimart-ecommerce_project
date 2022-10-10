import React from "react";
import "../../styles/commonSection.css";

const CommonSection = ({ title }) => {
  return (
    <div className="common_section">
      <h1>{title}</h1>
    </div>
  );
};

export default CommonSection;
