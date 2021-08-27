/* eslint-disable react/prop-types */
import React from "react";

const Content: React.FC = ({ children }) => (
  <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div className="px-4 py-6 sm:px-0">
      <div className="">{children}</div>
    </div>
  </div>
);

export default Content;
