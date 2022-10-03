import React from "react";
import "./IndexPage.css";
import { PageLayout } from './components/atomic-components/PageLayout.js';

export const IndexPage = () => {
  return (
    <div>
      <PageLayout />
        <div className="page-conainer">
          <div className="hero" >
            <h1>Geography Trivia</h1>
            <h2>How will you stack up?</h2>
          </div>
        </div>
    </div>
  );
};