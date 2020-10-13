import React from "react";

const PageHeader = ({ titleText }) => {
  return (
    <div className="row">
      <div className="col-12 mt-2">
              <h1 className="text-center">{titleText}</h1>
      </div>
    </div>
  );
};

export default PageHeader;